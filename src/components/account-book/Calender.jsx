import { useContext } from "react";
import { styled } from "styled-components";

import CalenderItem from "./CalenderItem.jsx";

import { StateContext } from "../../librarys/context.js";

import dayjs from "dayjs";
import arraySupport from "dayjs/plugin/arraySupport";

dayjs.extend(arraySupport);

const Container = styled.div`
  width: 100%;
  margin-top: 23px;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 6px;
`;

function CreateCalender(data, selectedYear, selectedMonth, selectedDate) {
  const current = dayjs([selectedYear, selectedMonth - 1]);
  const year = current.year();
  const month = current.month();
  const start = dayjs([year, month]).day(0); // 매월 첫째날을 기준 주로, 일요일 date 값을 가져오기

  const list = [];

  for (let i = 0; i < 42; i++) {
    const date = start.add(i, "day");

    if (date.day() === 0 && date.month() === month + 1) {
      break;
    }

    let type = "default";

    if (month !== date.month()) {
      type = "disable";
    } else if (date.date() === selectedDate) {
      type = "select";
    } else if (date.day() === 0) {
      type = "sunday";
    } else if (date.day() === 6) {
      type = "saturday";
    }

    const find = data.find((item) => {
      const d = dayjs(item.date);
      return d.month() === date.month() && d.date() === date.date();
    });

    list.push({
      id: `${year}-${month}-${i}`,
      month: date.month(),
      date: date.date(),
      type,
      value: find ? find.value : 0,
    });
  }

  return list;
}

const Calender = () => {
  const { selectedYear, selectedMonth, selectedDate, expenseList } =
    useContext(StateContext);

  const list = expenseList.reduce((result, item) => {
    const date = dayjs(item.date).date();
    const element = result.find((element) => element.date === date);

    if (!element) {
      result.push({
        date: item.date,
        value: item.price,
      });
    } else {
      element.value += item.price;
    }

    return result;
  }, []);
  const calender = CreateCalender(
    list,
    selectedYear,
    selectedMonth,
    selectedDate,
  );

  return (
    <>
      <Container>
        {calender.map((item) => (
          <CalenderItem
            key={item.id}
            date={item.date}
            value={item.value}
            type={item.type}
          />
        ))}
      </Container>
    </>
  );
};

export default Calender;
