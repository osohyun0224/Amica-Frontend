import { useMemo, useContext } from "react";
import { styled } from "styled-components";

import Select from "../Select.jsx";

import { StateContext, DispatchContext } from "../../librarys/context.js";

const TotalAmount = styled.p`
  font-size: 32px;
  font-weight: 700;
`;

const CalenderStatus = () => {
  const { calenderlist, expenseList, selectedYear, selectedMonth } =
    useContext(StateContext);
  const dispatch = useContext(DispatchContext);

  const selectList = useMemo(() => {
    return calenderlist.map((item, index) => ({
      id: index,
      year: item.year,
      month: item.month,
      name: `${item.year}년 ${item.month}월`,
      default: index === 0,
    }));
  }, [calenderlist]);

  const price = useMemo(
    () => expenseList.reduce((result, item) => result + item.price, 0),
    [expenseList],
  );

  return (
    <>
      <Select
        list={selectList}
        onSelect={(item) =>
          dispatch({
            type: "selectCalender",
            payload: item,
          })
        }
      />
      <TotalAmount>{price.toLocaleString()}원</TotalAmount>
    </>
  );
};

export default CalenderStatus;
