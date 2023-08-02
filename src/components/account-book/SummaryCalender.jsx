import PropTypes from "prop-types";

import { styled } from "styled-components";

import CalenderItem from "./CalenderItem.jsx";

import dayjs from "dayjs";
import arraySupport from "dayjs/plugin/arraySupport";

dayjs.extend(arraySupport);

const Select = styled.select`
  margin-left: -2px;
  border: none;
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
`;

const TotalAmount = styled.p`
  font-size: 32px;
  font-weight: 700;
`;

const CalenderContainer = styled.div`
  width: 100%;
  margin-top: 23px;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 4px;
`;

const data = [
  { date: 4, value: 5600 },
  { date: 6, value: 12000 },
  { date: 7, value: 40230 },
  { date: 10, value: 20230 },
  { date: 16, value: 1030 },
  { date: 20, value: 390230 },
  { date: 24, value: 120230 },
  { date: 25, value: 320230 },
  { date: 28, value: 820230 },
];

const SummaryCalender = () => {
  const current = dayjs();
  const year = current.year();
  const month = current.month();
  const start = dayjs([year, month]).day(0); // 매월 첫째날을 기준 주로, 일요일 date 값을 가져오기

  const list = [];

  const disabledColor = "rgba(21, 21, 21, 0.25)";
  const mainColor = "rgba(21, 21, 21, 1)";
  const todayColor = "rgba(242, 211, 53, 1)";
  const saturdayColor = "rgba(54, 162, 235, 1)";
  const sundayColor = "rgba(217, 74, 86, 1)";

  for (let i = 0; i < 35; i++) {
    const date = start.add(i, "day");

    let color = mainColor;

    if (month !== date.month()) {
      color = disabledColor;
    } else if (
      date.month() === current.month() &&
      date.date() === current.date()
    ) {
      color = todayColor;
    } else if (date.day() === 0) {
      color = sundayColor;
    } else if (date.day() === 6) {
      color = saturdayColor;
    }

    const find = data.find(
      (item) => month === date.month() && item.date === date.date(),
    );

    list.push({
      id: `${year}-${month}-${i}`,
      month: date.month(),
      date: date.date(),
      color,
      value: find ? find.value : 0,
    });
  }

  return (
    <>
      <Select>
        <option value="">2023년 8월</option>
        <option value="1">2023년 9월</option>
        <option value="2">2023년 10월</option>
      </Select>
      <TotalAmount>504,000원</TotalAmount>
      <CalenderContainer>
        {list.map((item) => (
          <CalenderItem
            key={item.id}
            date={item.date}
            value={item.value}
            color={item.color}
          />
        ))}
      </CalenderContainer>
    </>
  );
};

SummaryCalender.propTypes = {};

export default SummaryCalender;
