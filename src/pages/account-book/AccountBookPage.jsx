import { useState } from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";

import Button from "../../components/account-book/Button.jsx";
import Expense from "../../components/account-book/Expense.jsx";
import ExpenseInfomation from "../../components/account-book/ExpenseInfomation.jsx";
import MonthlyExpense from "../../components/account-book/MonthlyExpense.jsx";
import DailyExpense from "../../components/account-book/DailyExpense.jsx";

import {
  getExpenseMonthlyList,
  getExpenseMonthly,
} from "../../librarys/expense-api.js";
import { useReducer } from "react";
import { expenseReducer, intialExpenseState } from "../../reducer/expense.js";
import { DispatchContext, StateContext } from "../../librarys/context.js";
import { useEffect } from "react";

const Container = styled.div`
  margin: 8px 32px;
  margin-bottom: 36px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const AccountBookPage = () => {
  const [state, dispatch] = useReducer(expenseReducer, intialExpenseState);
  const [previousTotal, setPreviousTotal] = useState(310000);

  useEffect(() => {
    (async () => {
      const calenders = await getExpenseMonthlyList();
      console.log(calenders);
      calenders.sort((a, b) => b.year - a.year || b.month - a.month);
      const { year, month } = calenders[0];
      const expenses = await getExpenseMonthly(year, month);

      dispatch({
        type: "loadExpenses",
        payload: expenses,
      });
    })();
  }, []);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <Container>
          <Expense />
          <StyledLink to="/account-book/calender">
            <Button>이번달 소비 보기</Button>
          </StyledLink>
          <ExpenseInfomation previous={previousTotal} />
          <MonthlyExpense />
          <DailyExpense />
        </Container>
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};

export default AccountBookPage;
