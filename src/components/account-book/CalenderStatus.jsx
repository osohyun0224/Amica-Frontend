import PropTypes from "prop-types";
import { styled } from "styled-components";

import Select from "../Select.jsx";
import { useMemo } from "react";

const TotalAmount = styled.p`
  font-size: 32px;
  font-weight: 700;
`;

const CalenderStatus = ({ list, price, onSelect }) => {
  const selectList = useMemo(
    () =>
      list.map((item, index) => ({
        id: index,
        year: item.year,
        month: item.month,
        name: `${item.year}년 ${item.month}월`,
        default: index === list.length - 1,
      })),
    [list],
  );

  return (
    <>
      <Select list={selectList} onSelect={onSelect} />
      <TotalAmount>{price.toLocaleString()}원</TotalAmount>
    </>
  );
};

CalenderStatus.propTypes = {
  list: PropTypes.array,
  price: PropTypes.number,
  onSelect: PropTypes.func,
};

export default CalenderStatus;
