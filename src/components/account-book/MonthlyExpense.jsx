import PropTypes from "prop-types";
import { styled } from "styled-components";

import { Heading, HeadingBold } from "../Heading.jsx";
import CircularChart from "./CircularChart.jsx";
import ExpenseItem from "./ExpenseItem.jsx";
import { useContext } from "react";
import { StateContext } from "../../librarys/context.js";
import { categorys } from "../../librarys/data.js";

const Chart = styled(CircularChart)`
  margin: auto;
  margin-top: 16px;
`;

const MonthlyExpense = () => {
  const { expenseList } = useContext(StateContext);
  const data = expenseList.reduce((result, item) => {
    const find = result.find((element) => element.id === item.category);

    if (find) {
      find.value += item.price;
      return result;
    }

    const category = categorys.find((element) => element.id === item.category);

    result.push({
      id: item.category,
      name: category?.title,
      value: item.price,
      color: category?.color,
    });
    return result;
  }, []);
  const monthlyExpenseData = [...data].sort((a, b) => b.value - a.value);
  const highestExpense = monthlyExpenseData[0];
  const circularChartData = monthlyExpenseData.map((item) => ({
    color: item.color,
    value: item.value,
  }));

  return (
    <>
      <Heading style={{ marginTop: "28px" }}>
        이번달 <HeadingBold>{highestExpense?.name}</HeadingBold>에 가장 많이
        지출했어요
      </Heading>
      <Chart data={circularChartData} />
      {monthlyExpenseData.map((item) => (
        <ExpenseItem
          key={item.id}
          color={item.color}
          name={item.name}
          price={item.value}
        />
      ))}
    </>
  );
};

MonthlyExpense.propTypes = {};

export default MonthlyExpense;
