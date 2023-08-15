import { useState, useEffect, useMemo, useCallback } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";

import { getProduct } from "../../librarys/store-api";

import {
  checkOrderStatus,
  _sendOrderComplete,
  getOrder,
  removeDraftOrder,
  postDraftOrder,
  getOrderList,
} from "../../librarys/order-api.js";

import { Bootpay } from "@bootpay/client-js";

const Container = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #FFFFFF;
  overflow-x: hidden;
  overflow-y: scroll;
`;

const TopTitle = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 20px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: -0.02em;
  color: #151515;
`;

const OrderDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const SubTitle = styled.p`
  margin-left: 32px;
  font-size: 16px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: -0.02em;
  color: #151515;
`;

const Line = styled.div`
  margin: 10px 0;
  border: 1px dashed rgba(102, 112, 128, 0.3);
`;

const OrderProfileImg = styled.img`
  width: 50px;
  height: 50px;
  background-color: #eef1f4;
`;

const ProductDetailInfo = styled.div`
  display: flex;
  flex-direction: row;
  padding: 12px 20px;
  margin-bottom: -5px;
  width: 100%;
`;

const ProductName = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.02em;
  color: #667080;
`;

const ProductNumber = styled.p`
  font-size: 13px;
  font-weight: 400;
  letter-spacing: -0.02em;
  color: #667080;
`;

const OrderDetails = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

const QualityPrice = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  position: relative;
  align-items: center;
  margin-top: 10px;
`;

const OrderPrice = styled.p`
  position: absolute;
  right: 60px;
  font-size: 15px;
  font-weight: 400;
  line-height: 35px;
  letter-spacing: -0.02em;
  color: #667080;
`;

const TotalAmountInfo = styled.div`
  display: flex;
  margin: 0 32px;
  justify-content: space-between;
`;

const TotalAmountTitle = styled.p`
  font-size: 13px;
  font-weight: 500;
  line-height: 35px;
  letter-spacing: -0.02em;
  color: #667080;
`;

const TotalAmount = styled.p`
  font-size: 22px;
  font-weight: 800;
  line-height: 35px;
  letter-spacing: -0.02em;
  color: #151515;
`;

const BuyerInfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 21px 30px;
  margin-bottom: 70px;
`;

const BuyerInfoTitle = styled(SubTitle)`
  margin: 10px 0 5px 0;
`;

const BuyerInputForm = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 5px;
  background: #f8f8f8;
  border: none;
  padding: 10px;
  margin-bottom: 10px;
`;

const PurchaseBtn = styled.button`
  max-width: 500px;
  width: 100%;
  height: 80px;
  gap: 10px;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 0;
  border: none;
  border-radius: 0;
  box-shadow: none;
  background-color: #d94a56;
  cursor: pointer;

  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: -0.02em;
  text-decoration: none;
`;

const OrderInfo = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const productId = searchParams.get("pid");
  const optionId = searchParams.get("oid").split(",");
  const quality = searchParams.get("qty").split(",");
  const [product, setProduct] = useState({});
  const [userInfo, setUserInfo] = useState({
    name: "",
    phone: "",
    postal: "",
    baseAddress: "",
    detailAddress: "",
    request: ""
  });
  const navigate = useNavigate();

  const { name, phone, postal, baseAddress, detailAddress, request } = userInfo;
  
  const onChange = (e) => {
    const { title, value } = e.target;
    setUserInfo({
      ...userInfo,
      [title]: value
    });
  };

  const option = useMemo(
    () =>
    product.options
      ? product.options.find((item) => optionId.includes(item.id.toString()))
      : null,
    [product, optionId],
  );

  const optionPrice = useMemo(
    () => 
    option
      ? optionId.map((itemId, idx) => {
          const checkOption = product.options.find(
            option => option.id === Number(itemId)
          );

          if (checkOption) {
            return (
              checkOption.discount !== 0
              ? checkOption.discount
              : checkOption.price
            );
          }
        }).filter(value => !isNaN(value))
      : [],
    [product, optionId, quality]
  );
  
  const totalPrice = useMemo(() => {
    return optionPrice.reduce((sum, value, idx) => {
      return sum + value * quality[idx];
    }, 0);
  }, [optionPrice, quality]);

  async function requestPayment(order) {
    const response = await Bootpay.requestPayment({
      application_id: "59a4d323396fa607cbe75de4",
      price: totalPrice,
      order_name: order.productName,
      order_id: order.orderId,
      pg: "토스",
      method: "카드",
      tax_free: 0,
      user: {
        id: "testaccount",
        username: order.shipping.name,
        phone: order.shipping.phone,
        email: "test@example.com",
        addr: order.shipping.address,
      },
      items: order.option.map((item) => ({
        id: item.id,
        name: item.name,
        qty: item.quality,
        price: item.price,
      })),
      extra: {
        open_type: "iframe",
        card_quota: "0,2,3",
        escrow: false,
      },
    });
   
    if (response.event !== "done") {
      alert(
        "에러가 발생했습니다. 개발자 콘솔을 확인해주세요. 주문은 처음부터 다시 시도하세요.",
      );
      console.error(response);
  
      await removeDraftOrder(order.orderId);
  
      return false;
    }
  
    await _sendOrderComplete(order.orderId, response.data);
  
    return true;
  }
  
  const startPayment = useCallback(() => {
    (async () => {
      const order = await postDraftOrder({
        productId: product.id,
        productName: product.name,
        option: product.options.map((item, idx) => ({
          img: product.coverImage,
          id: item.id,
          name: item.name,
          quality: quality[idx],
          price: optionPrice[idx],
        })).filter(value => !isNaN(value.price) && !isNaN(value.quality)),
        shipping: {
          name,
          phone,
          postal,
          baseAddress,
          detailAddress,
          request,
        },
      });
      
      const result = await requestPayment(order);

      console.log(await getOrderList());

      if (!result) {
        navigate("/main");
      } else {
        navigate("/orderComplete?oid=" + order.orderId);
      }
    })();
  }, [
    baseAddress,
    detailAddress,
    name,
    navigate,
    option,
    optionPrice,
    totalPrice,
    phone,
    postal,
    product,
    quality,
    request,
  ]);

  useEffect(() => {
    (async () => {
      const data = await getProduct(productId);

      if (data === null) {
        return;
      }

      setProduct(data);
    })();
  }, [productId]);

  return (
    <Container>
      <TopTitle>배송정보</TopTitle>
      <OrderDetailContainer>
        <OrderDetailContainer>
          <SubTitle>주문내역</SubTitle>
          <Line />
          {product.options && optionId.map((itemId, idx) => {
            const selectedOption = product.options.find(option => option.id === Number(itemId));
              return (
                <ProductDetailInfo key={selectedOption.id}>
                  <OrderProfileImg src={product.coverImage} alt="상품 이미지" />
                  <OrderDetails>
                    <ProductName> {product.name} </ProductName>
                    <QualityPrice>
                      <ProductNumber> 옵션: {selectedOption.name} / {quality[idx]}개 </ProductNumber>
                      <OrderPrice> {optionPrice[idx]?.toLocaleString()}원 </OrderPrice>
                    </QualityPrice>
                  </OrderDetails>
                </ProductDetailInfo>
              );
          })}
          <Line />
          <TotalAmountInfo>
            <TotalAmountTitle>총 상품 금액</TotalAmountTitle>
            <TotalAmount> {totalPrice?.toLocaleString()}원 </TotalAmount>
          </TotalAmountInfo>
        </OrderDetailContainer>
        <BuyerInfoContainer>
          <BuyerInfoTitle> 받는 이 </BuyerInfoTitle>
          <BuyerInputForm 
            title="name"
            value={name} 
            onChange={onChange} 
            placeholder="이름" 
          />
          <BuyerInfoTitle> 전화번호 </BuyerInfoTitle>
          <BuyerInputForm
            title="phone"
            value={phone}
            onChange={onChange}
            placeholder="전화번호"
          />
          <BuyerInfoTitle> 주소지</BuyerInfoTitle>
          <BuyerInputForm
            title="postal"
            value={postal}
            onChange={onChange}
            placeholder="우편번호"
          />
          <BuyerInputForm 
            title="baseAddress"
            value={baseAddress}
            onChange={onChange}
            placeholder="주소"
          />
          <BuyerInputForm
            title="detailAddress"
            value={detailAddress}
            onChange={onChange}
            placeholder="상세주소"
          />
          <BuyerInfoTitle> 요청사항 </BuyerInfoTitle>
          <BuyerInputForm
            title="request"
            value={request}
            onChange={onChange}
            placeholder="배송 요청사항"
          />
        </BuyerInfoContainer>
      </OrderDetailContainer>
      <PurchaseBtn onClick={startPayment}> 결제하기 </PurchaseBtn>
    </Container>
  );
};

export default OrderInfo;