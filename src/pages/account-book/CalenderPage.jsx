import { useEffect, useState, useMemo } from "react";
import { styled } from "styled-components";

import Button from "../../components/account-book/Button.jsx";
import CalenderStatus from "../../components/account-book/CalenderStatus.jsx";
import Calender from "../../components/account-book/Calender.jsx";
import Divider from "../../components/account-book/Divider.jsx";
import DailySummary from "../../components/account-book/DailySummary.jsx";

import {
  GetExpenseMonthlyList,
  GetExpenseMonthly,
} from "../../librarys/dummyAPI.js";

const Container = styled.div`
  margin: 8px 32px;
`;

const CalenderPage = () => {
  const [list, setList] = useState([]);
  const [month, setMonth] = useState([]);
  const [date, setDate] = useState(null);
  const [data, setData] = useState(null);

  const totalPrice = useMemo(
    () =>
      data ? data.list.reduce((result, item) => result + item.value, 0) : 0,
    [data],
  );

  useEffect(() => {
    (async () => {
      const list = await GetExpenseMonthlyList();
      const latest = list[list.length - 1];
      setList(list);
      setMonth([latest.year, latest.month]);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const data = await GetExpenseMonthly(...month);
      setData(data);
      setDate(null);
    })();
  }, [month]);

  useEffect(() => {
    console.log(list, month, data);
  }, [list, month, data]);

  return (
    <Container>
      <CalenderStatus
        list={list}
        price={totalPrice}
        onSelect={(item) => setMonth([item.year, item.month])}
      />
      <Calender
        month={month}
        date={date}
        data={data}
        onSelect={(item) => setDate(item)}
      />
      <Divider style={{ margin: "24px auto" }} />
      <DailySummary data={data} date={date} />
    </Container>
  );
};

export default CalenderPage;
