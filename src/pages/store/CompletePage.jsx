import styled from "styled-components";
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import Button from "../../components/account-book/Button.jsx";

import { getOrder } from "../../librarys/order-api.js";

const Container = styled.div`
  width: 100%;
  margin-top: 50%;
  text-align: center;
  font-size: 24px;
`;

const Text = styled.p`
  font-size: 24px;
`;

const CompletePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const orderId = searchParams.get("orderId");
  const navigate = useNavigate();

  return (
    <Container>
      <Text>주문 성공</Text>
      <Hint>결제 화면이 표시되지 않거나 결제 화면을 꺼버렸나요?</Hint>
      <RetryButton>결제 다시 하기</RetryButton>
    </Container>
  );
};

export default CompletePage;
