import PropTypes from "prop-types";

import { styled } from "styled-components";

import { DispatchContext } from "../../librarys/context.js";
import { useContext } from "react";

const Container = styled.div`
  width: 100%;
  aspect-ratio: 1;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-color: #dfdfdf;
  }
`;

const Text = styled.p`
  font-size: 16px;
  font-weight: 700;

  &.disable {
    color: rgba(21, 21, 21, 0.25);
  }

  &.select {
    color: rgba(242, 211, 53, 1);
  }

  &.saturday {
    color: rgba(54, 162, 235, 1);
  }

  &.sunday {
    color: rgba(217, 74, 86, 1);
  }
`;

const Price = styled.p`
  font-size: 12px;
  font-weight: 400;

  @media screen and (max-width: 500px) {
    font-size: 8px;
  }
`;

const CalenderItem = ({ date, value = 0, type }) => {
  const dispatch = useContext(DispatchContext);
  return (
    <Container
      onClick={
        type === "disable"
          ? null
          : () => dispatch({ type: "selectDate", payload: date })
      }
    >
      <Text className={type}>{date}</Text>
      <Price style={{ visibility: value > 0 ? "visible" : "hidden" }}>
        {value.toLocaleString()}
      </Price>
    </Container>
  );
};

CalenderItem.propTypes = {
  date: PropTypes.number,
  value: PropTypes.number,
  type: PropTypes.string,
};

export default CalenderItem;
