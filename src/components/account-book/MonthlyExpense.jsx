import PropTypes from "prop-types";
import { styled } from "styled-components";

import { Heading, HeadingBold } from "../Heading.jsx";
import CircularChart from "./CircularChart.jsx";
import ExpenseItem from "./ExpenseItem.jsx";

const Chart = styled(CircularChart)`
  margin: auto;
  margin-top: 16px;
`;

const expenseColors = [
  "rgb(54, 162, 235)", // blue
  "rgb(255, 99, 132)", // red
  "rgb(255, 159, 64)", // orange
  "rgb(255, 205, 86)", // yellow
  "rgb(75, 192, 192)", // green
  "rgb(153, 102, 255)", // purple
  "rgb(201, 203, 207)", // grey
];

const MonthlyExpense = ({ data }) => {
  const monthlyExpenseData = [...data].sort((a, b) => b.value - a.value);
  const highestExpense = monthlyExpenseData[0];
  const circularChartData = monthlyExpenseData.map((item, index) => ({
    color: expenseColors[index],
    value: item.value,
  }));

  return (
    <>
      <Heading style={{ marginTop: "28px" }}>
        이번달 <HeadingBold>{highestExpense.name}</HeadingBold>에 가장 많이
        지출했어요
      </Heading>
      <Chart data={circularChartData} />
      {monthlyExpenseData.map((item, index) => (
        <ExpenseItem
          key={item.id}
          color={expenseColors[index]}
          name={item.name}
          price={item.value}
        />
      ))}
    </>
  );
};

MonthlyExpense.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string,
      value: PropTypes.number,
    }),
  ),
};

export default MonthlyExpense;
