import { useContext } from "react";
import { styled } from "styled-components";

import { Heading, HeadingBold } from "../Heading.jsx";
import Button from "./Button.jsx";
import DailyExpenseItem from "./DailyExpenseItem.jsx";

import { StateContext, DispatchContext } from "../../librarys/context.js";

import { show } from "../../redux/modalSlice.js";
import { useDispatch } from "react-redux";
import dayjs from "dayjs";

const ExpenseTotal = styled(DailyExpenseItem)`
  color: rgba(21, 21, 21, 1);
  font-weight: 700;
`;

const Container = styled.div`
  width: 100%;
`;

const DailySummary = () => {
  const { expenseList, selectedDate } = useContext(StateContext);
  const dispatch = useContext(DispatchContext);
  const modalDispatch = useDispatch();

  let filteredList = [];
  let totalPrice = 0;

  if (selectedDate) {
    filteredList = expenseList.filter(
      (item) => dayjs(item.date).date() === selectedDate,
    );
    totalPrice = filteredList.reduce((result, item) => result + item.price, 0);
  }

  console.log(filteredList);

  const showModal = async (item) => {
    if (item.orderId) {
      // 주문 내역 모달 표시
      modalDispatch(
        show({
          id: "view_expense",
          props: {
            id: item.id,
            orderId: item.orderId,
            list: [
              {
                id: 0,
                name: item.name,
                price: item.price,
                quantity: 1,
              },
            ],
          },
        }),
      );
    } else {
      // 사용자 입력 소비 내역 -> 수정 모달 표시
      modalDispatch(
        show({
          id: "modify_expense",
          props: {
            id: item.id,
            date: item.date,
            name: item.name,
            price: item.price,
            category: item.category,
          },
        }),
      );
    }
  };

  return (
    <Container>
      <Heading>
        <HeadingBold>이 날의 소비 내역</HeadingBold>
      </Heading>
      <ExpenseTotal color={null} name="Total" price={totalPrice} />
      {filteredList.map((item) => (
        <DailyExpenseItem
          key={item.id}
          id={item.id}
          color={null}
          name={item.name}
          price={item.price}
          order={item.orderId}
          onClick={() => showModal(item)}
          enabled={true}
        />
      ))}
      <Button onClick={() => modalDispatch(show("add_expense"))}>
        소비내역 추가하기
      </Button>
    </Container>
  );
};

export default DailySummary;
