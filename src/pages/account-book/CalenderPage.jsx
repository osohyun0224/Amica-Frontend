import { useEffect, useReducer } from "react";
import { styled } from "styled-components";

import HeaderTitle from "../../components/HeaderTitle.jsx";
import ViewExpenseModal from "../../components/account-book/ViewExpenseModal.jsx";
import AddExpenseModal from "../../components/account-book/AddExpenseModal.jsx";
import ModifyExpenseModal from "../../components/account-book/ModifyExpenseModal.jsx";
import RemoveExpenseModal from "../../components/account-book/RemoveExpenseModal.jsx";
import CalenderStatus from "../../components/account-book/CalenderStatus.jsx";
import Calender from "../../components/account-book/Calender.jsx";
import DailySummary from "../../components/account-book/DailySummary.jsx";

import { intialExpenseState, expenseReducer } from "../../reducer/expense.js";
import { StateContext, DispatchContext } from "../../librarys/context.js";

import {
  getExpenseMonthlyList,
  getExpenseMonthly,
} from "../../librarys/expense-api.js";

const Container = styled.div`
  margin: 0 32px;
`;

const Divider = styled.div`
  width: 75%;
  margin: 8px auto;
  border: 1px solid black;
`;

const CalenderPage = () => {
  const [state, dispatch] = useReducer(expenseReducer, intialExpenseState);
  const { selectedYear, selectedMonth } = state;

  useEffect(() => {
    (async () => {
      const calenders = await getExpenseMonthlyList();

      calenders.sort((a, b) => b.year - a.year || b.month - a.month);

      dispatch({
        type: "loadCalenders",
        payload: calenders,
      });

      const { year, month } = calenders[0];
      const expenses = await getExpenseMonthly(year, month);

      console.log(expenses);

      dispatch({
        type: "loadExpenses",
        payload: expenses,
      });
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const data = await getExpenseMonthly(selectedYear, selectedMonth);
      dispatch({
        type: "loadExpenses",
        payload: data,
      });
    })();
  }, [selectedYear, selectedMonth]);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <HeaderTitle url="/account-book/" title="이번 달 쓴 금액" />
        <ViewExpenseModal />
        <AddExpenseModal />
        <ModifyExpenseModal />
        <RemoveExpenseModal />
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
