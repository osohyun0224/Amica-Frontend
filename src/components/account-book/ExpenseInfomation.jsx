import PropTypes from "prop-types";
import { styled } from "styled-components";

import { useContext, useMemo } from "react";
import { StateContext } from "../../librarys/context";

const Container = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: center;
`;

const Text = styled.p`
  color: rgba(21, 21, 21, 0.5);
  font-size: 15px;
  font-weight: 400;
`;

const ExpenseInfomation = ({ previous }) => {
  const { expenseList } = useContext(StateContext);

  const message = useMemo(() => {
    const totalPrice = expenseList.reduce(
      (result, item) => result + item.price,
      0,
    );
    const value = totalPrice - previous;
    const valueString = Math.abs(value).toLocaleString();

    if (value > 0) {
      return `저번달 대비 ${valueString}원을 더 지출했어요`;
    } else if (value < 0) {
      return `저번달 대비 ${valueString}원을 절약했어요`;
    } else {
      return `저번달과 지출액이 똑같아요`;
    }
  }, [expenseList, previous]);

  return (
    <Container>
      <Text>{message}</Text>
    </Container>
  );
};

ExpenseInfomation.propTypes = {
  previous: PropTypes.number,
};

ExpenseInfomation.defaultProps = {
  previous: 0,
};

export default ExpenseInfomation;
