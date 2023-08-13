import PropTypes from "prop-types";
import { useContext } from "react";
import { styled } from "styled-components";
import { DispatchContext, StateContext } from "../../librarys/context";

const Container = styled.div`
  width: 100%;
  background-color: rgba(250, 250, 250, 1);
  padding: 20px;
`;

const Heading = styled.p`
  font-size: 16px;
  color: rgba(21, 21, 21, 0.5);
`;

const TextContainer = styled.div`
  margin-top: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Text = styled.p`
  font-size: 32px;
  font-weight: 700;
  letter-spacing: -1px;
  color: rgba(21, 21, 21, 1);
`;

const Expense = () => {
  const { expenseList } = useContext(StateContext);

  const totalPrice = expenseList.reduce(
    (result, item) => result + item.price,
    0,
  );

  return (
    <Container>
      <Heading>이번달 쓴 금액</Heading>
      <TextContainer>
        <Text>{totalPrice.toLocaleString()}</Text>
        <Text>원</Text>
      </TextContainer>
    </Container>
  );
};

Expense.propTypes = {};

export default Expense;
