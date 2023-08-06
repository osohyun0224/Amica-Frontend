import PropTypes from "prop-types";
import { styled } from "styled-components";

import { Heading, HeadingBold } from "../Heading.jsx";
import ExpenseItem from "./ExpenseItem.jsx";

const ExpenseTotal = styled(ExpenseItem)`
  color: rgba(21, 21, 21, 1);
  font-weight: 700;
`;

const DailyExpense = ({ date, data }) => {
  const dailyExpenseData = [...data].sort((a, b) => b.value - a.value);
  const totalExpense = dailyExpenseData.reduce(
    (result, item) => result + item.value,
    0,
  );

  return (
    <>
      <Heading style={{ marginTop: "32px" }}>
        <HeadingBold>{date}</HeadingBold>에 가장 많이 지출했어요
      </Heading>
      {dailyExpenseData.map((item) => (
        <ExpenseItem
          key={item.id}
          color={null}
          name={item.name}
          price={item.value}
        />
      ))}
      <ExpenseTotal color={null} name="Total" price={totalExpense} />
    </>
  );
};

DailyExpense.propTypes = {
  date: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string,
      value: PropTypes.number,
    }),
  ),
};

export default DailyExpense;
