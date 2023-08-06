import PropTypes from "prop-types";
import { useState } from "react";
import { styled } from "styled-components";

import CalenderItem from "./CalenderItem.jsx";

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

const initialSelect = null;

function CreateCalenderList(selectedMonth, data, select) {
  const current = dayjs([selectedMonth[0], selectedMonth[1] - 1]);
  const year = current.year();
  const month = current.month();
  const start = dayjs([year, month]).day(0); // 매월 첫째날을 기준 주로, 일요일 date 값을 가져오기

  const list = [];

  for (let i = 0; i < 35; i++) {
    const date = start.add(i, "day");

    let type = "default";

    if (month !== date.month()) {
      type = "disable";
    } else if (date.date() === select) {
      type = "select";
    } else if (date.day() === 0) {
      type = "sunday";
    } else if (date.day() === 6) {
      type = "saturday";
    }

    const find = data.find(
      (item) => month === date.month() && item.date === date.date(),
    );

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

const Calender = ({ month, data, date, onSelect }) => {
  const list = [];

  if (data) {
    data.list.forEach((item) => {
      let element = list.find((element) => element.date === item.date);
      if (!element) {
        element = {
          date: item.date,
          value: 0,
        };
        list.push(element);
      }
      element.value += item.value;
    });
  }

  const calenderList = CreateCalenderList(month, list, date);

  return (
    <>
      <Container>
        {calenderList.map((item) => (
          <CalenderItem
            key={item.id}
            id={item.id}
            date={item.date}
            value={item.value}
            type={item.type}
            onClick={(item) => onSelect(item)}
          />
        ))}
      </Container>
    </>
  );
};

Calender.propTypes = {
  month: PropTypes.arrayOf(PropTypes.number),
  data: PropTypes.shape({
    year: PropTypes.number,
    month: PropTypes.number,
    list: PropTypes.array,
  }),
  date: PropTypes.number,
  onSelect: PropTypes.func,
};

export default Calender;
