import { useEffect, useState, useMemo, useReducer } from "react";
import { styled } from "styled-components";

import AddExpenseModal from "../../components/account-book/AddExpenseModal.jsx";
import Button from "../../components/account-book/Button.jsx";
import CalenderStatus from "../../components/account-book/CalenderStatus.jsx";
import Calender from "../../components/account-book/Calender.jsx";
import Divider from "../../components/account-book/Divider.jsx";
import DailySummary from "../../components/account-book/DailySummary.jsx";

import { intialExpenseState, expenseReducer } from "../../reducer/expense.js";
import { StateContext, DispatchContext } from "../../librarys/context.js";

import {
  GetExpenseMonthlyList,
  GetExpenseMonthly,
} from "../../librarys/accountBook-api.js";

const Container = styled.div`
  margin: 8px 32px;
`;

const CalenderPage = () => {
  const [state, dispatch] = useReducer(expenseReducer, intialExpenseState);
  const { calenderlist, selectedYear, selectedMonth } = state;

  useEffect(() => {
    (async () => {
      const data = await GetExpenseMonthlyList();
      data.sort((a, b) => b.year - a.year || b.month - a.month);
      dispatch({
        type: "loadCalenders",
        payload: data,
      });
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const data = await GetExpenseMonthly(selectedYear, selectedMonth);
      dispatch({
        type: "loadExpenses",
        payload: data,
      });
    })();
  }, [calenderlist, selectedYear, selectedMonth]);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <AddExpenseModal />
        <Container>
          <CalenderStatus />
          <Calender />
          <Divider style={{ margin: "24px auto" }} />
          <DailySummary />
        </Container>
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};

export default CalenderPage;
