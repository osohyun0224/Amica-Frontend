import PropTypes from "prop-types";
import { styled } from "styled-components";

import { Heading, HeadingBold } from "../Heading.jsx";
import ExpenseItem from "./ExpenseItem.jsx";
import { useContext } from "react";
import { StateContext } from "../../librarys/context.js";
import dayjs from "dayjs";
import { categorys } from "../../librarys/data.js";

const ExpenseTotal = styled(ExpenseItem)`
  color: rgba(21, 21, 21, 1);
  font-weight: 700;
`;

const DailyExpense = () => {
  const { expenseList } = useContext(StateContext);

  const data = expenseList
    .reduce((result, item) => {
      const date = dayjs(item.date).date();
      const find = result.find((element) => element.date === date);

      if (find) {
        find.list.push(item);
        find.value += item.price;
        return result;
      }

      console.log();

      result.push({
        date,
        time: item.date,
        value: item.price,
        list: [item],
      });
      return result;
    }, [])
    .sort((a, b) => b.value - a.value); // 일자별 지출 내역 생성 및 정렬
  const mostExpense = (data[0]?.list ?? []).reduce((result, item) => {
    const find = result.find((element) => element.id === item.category);

    if (find) {
      find.value += item.price;
      return result;
    }

    const category = categorys.find((element) => element.id === item.category);

    result.push({
      id: item.category,
      value: item.price,
      name: category?.title,
    });

    return result;
  }, []); // 최다 지출

  const dailyExpenseData = [...mostExpense].sort((a, b) => b.value - a.value);
  const totalExpense = dailyExpenseData.reduce(
    (result, item) => result + item.value,
    0,
  );

  const mostExpenseDate = data[0]
    ? dayjs(data[0].time).format("MM월 DD일")
    : null;

  return (
    <>
      <Heading style={{ marginTop: "32px" }}>
        <HeadingBold>{mostExpenseDate}</HeadingBold>에 가장 많이 지출했어요
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

DailyExpense.propTypes = {};

export default DailyExpense;
