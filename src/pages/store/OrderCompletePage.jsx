import styled from "styled-components";

import { useEffect } from "react";

import Button from "../../components/account-book/Button.jsx";

import { getOrder } from "../../librarys/order-api.js";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useState } from "react";

const Container = styled.div`
  margin: 0 18px;
  margin-top: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 24px;
`;

const Text = styled.p`
  margin-bottom: 64px;
  font-size: 24px;
`;

const Item = styled.p`
  margin-top: 12px;
  text-align: left;
  font-size: 14px;
  color: #6f6f6f;
`;

const BackButton = styled(Button)`
  max-width: 300px;
  margin: auto;
  margin-top: 36px;
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
      <Text>결제가 완료되었습니다!</Text>
      <Item>주문번호: {order.orderId}</Item>
      <Item>상품명: {order.productName}</Item>
      <Item>금액: {(order.totalPrice)}원 </Item>
      <Item>
        배송지: {order.shipping?.name}님 - {order.shipping?.address}
      </Item>
      <Item>
        결제수단: {order.payment?.method} -{" "}
        {order.payment?.card_data?.card_company}
      </Item>
      <Item>
        PG사 영수증: <a href={order.payment?.receipt_url}>영수증 확인하기</a>{" "}
      </Item>
      <BackButton onClick={() => navigate("/main")}>
        메인으로 돌아가기
      </BackButton>
    </Container>
  );
};

export default PaymentPage;
