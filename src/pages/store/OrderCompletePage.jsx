import styled from "styled-components";

import { useEffect } from "react";

import Button from "../../components/account-book/Button.jsx";

import { getOrder } from "../../librarys/order-api.js";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useState } from "react";

const Container = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #ffffff;
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

const PaymentDetailContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 15px 0;
`;

const Title = styled.p`
  position: relative;
  display: flex;
  margin: 0 32px;

  font-size: 16px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: -0.02em;
  color: #151515;
`;

const Content = styled.p`
  margin-left: 40px;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.02em;
  color: rgba(21, 21, 21, 0.7);
`;

const ProductDetailInfo = styled.div`
  display: flex;
  flex-direction: row;
  padding: 12px 20px;
  margin-bottom: -5px;
`;

const ProductImg = styled.img`
  width: 50px;
  height: 50px;
  background-color: #eef1f4;
`;

const ProductDetail = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

const ProductName = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.02em;
  color: #667080;
`;

const QualityPrice = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  position: relative;
  align-items: center;
  margin-top: 10px;
`;

const ProductNumber = styled.p`
  font-size: 13px;
  font-weight: 400;
  letter-spacing: -0.02em;
  color: #667080;
`;

const ProductPrice = styled.p`
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
  margin: 0 32px 10px 32px;
  justify-content: space-between;
`;

const TotalAmountTitle = styled.p`
  font-size: 13px;
  font-weight: 500;
  line-height: 34.57px;
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

const AddressInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const BuyerInfoContainer = styled.div`
  height: 100%;
  display: flex;
  flex: row;
  align-items: center;
  margin: 7px 0;
`;

const PgReceipt = styled.a`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.02em;
  color: rgba(21, 21, 21, 0.7);
`;

const BackButton = styled(Button)`
  width: 275px;
  height: 50px;
  margin: auto;
  margin-top: 30px;
  margin-bottom: 60px;

  font-size: 16px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: 0em;
  color: #ffffff;
`;

const AddressContent = styled.p`
  margin: 20px 40px 0 40px;

  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.02em;
  color: rgba(21, 21, 21, 0.7);
`;

const Line = styled.div`
  margin: 10px 0;
  border: 1px dashed rgba(102, 112, 128, 0.3);
`;

const PaymentPage = () => {
  const [order, setOrder] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();
  const orderId = searchParams.get("oid");
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const data = await getOrder(orderId);

      console.log(data);

      if (data === null) {
        alert("주문 내역이 없습니다!! 다시 한번 주문해보세요");
        navigate("/main");
        return;
      }

      setOrder(data);
    })();
  }, [orderId, navigate]);
  console.log(order);
  return (
    <Container>
      <TopTitle> 결제완료 </TopTitle>
      <PaymentDetailContainer>
        <Title> 주문번호: {order.id}</Title>
        <Line />
        {order?.option?.map((item, idx) => {
          return (
            <ProductDetailInfo key={item.id}>
              <ProductImg src={item.img} alt="상품 이미지" />
              <ProductDetail>
                <ProductName> {order.productName} </ProductName>
                <QualityPrice>
                  <ProductNumber>
                    옵션: {item.name} / {item.quality}개
                  </ProductNumber>
                  <ProductPrice> {item.price}원 </ProductPrice>
                </QualityPrice>
              </ProductDetail>
            </ProductDetailInfo>
          );
        })}
        <Line />
        <TotalAmountInfo>
          <TotalAmountTitle> 총 결제 금액 </TotalAmountTitle>
          <TotalAmount> {order.price?.toLocaleString()}원 </TotalAmount>
        </TotalAmountInfo>

        <BuyerInfoContainer>
          <Title> 받는 이 </Title>
          <Content style={{ marginLeft: "35px" }}>
            {order.shipping?.name}
          </Content>
        </BuyerInfoContainer>
        <BuyerInfoContainer>
          <Title> 전화번호 </Title>
          <Content style={{ marginLeft: "25px" }}>
            {order.shipping?.phone}
          </Content>
        </BuyerInfoContainer>
        <BuyerInfoContainer>
          <Title
            style={{
              height: "130px",
            }}
          >
            주소지
          </Title>
          <AddressInfo>
            <Content> {order.shipping?.postal} </Content>
            <AddressContent> {order.shipping?.baseAddress} </AddressContent>
            <AddressContent> {order.shipping?.detailAddress} </AddressContent>
          </AddressInfo>
        </BuyerInfoContainer>
        <BuyerInfoContainer>
          <Title> 요청사항 </Title>
          <Content style={{ marginLeft: "25px" }}>
            {" "}
            {order.shipping?.request}{" "}
          </Content>
        </BuyerInfoContainer>
        <BuyerInfoContainer>
          <Title> 결제수단 </Title>
          <Content style={{ marginLeft: "25px" }}>
            {order.payment?.method}
          </Content>
        </BuyerInfoContainer>
        <BuyerInfoContainer>
          <Title> PG사 영수증 </Title>
          <PgReceipt href={order.payment?.receipt_url}>
            영수증 확인하기
          </PgReceipt>
        </BuyerInfoContainer>
      </PaymentDetailContainer>
      <BackButton onClick={() => navigate("/main")}>
        메인으로 돌아가기
      </BackButton>
    </Container>
  );
};

export default PaymentPage;
