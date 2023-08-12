import { useEffect, useState, useMemo, useReducer } from "react";
import { styled } from "styled-components";

import ViewExpenseModal from "../../components/account-book/ViewExpenseModal.jsx";
import AddExpenseModal from "../../components/account-book/AddExpenseModal.jsx";
import ModifyExpenseModal from "../../components/account-book/ModifyExpenseModal.jsx";
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
} from "../../librarys/expense-api.js";

const Container = styled.div`
  margin: 8px 32px;
`;

const CalenderPage = () => {
  const [state, dispatch] = useReducer(expenseReducer, intialExpenseState);
  const { selectedYear, selectedMonth } = state;

  useEffect(() => {
    (async () => {
      const calenders = await GetExpenseMonthlyList();

      calenders.sort((a, b) => b.year - a.year || b.month - a.month);

      dispatch({
        type: "loadCalenders",
        payload: calenders,
      });

      const { year, month } = calenders[0];
      const expenses = await GetExpenseMonthly(year, month);

      console.log(expenses);

      dispatch({
        type: "loadExpenses",
        payload: expenses,
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
  }, [selectedYear, selectedMonth]);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <ViewExpenseModal />
        <AddExpenseModal />
        <ModifyExpenseModal />
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
