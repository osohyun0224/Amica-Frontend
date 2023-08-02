import PropTypes from "prop-types";

import { styled } from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 50px;
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
`;

const Price = styled.p`
  font-size: 9px;
  font-weight: 400;
`;

const CalenderItem = ({ date, value, color }) => {
  return (
    <Container>
      <Text style={{ color }}>{date}</Text>
      <Price style={{ visibility: value > 0 ? "visible" : "hidden" }}>
        {value >= 10000000
          ? value.toLocaleString("ko-KR", { notation: "compact" })
          : value.toLocaleString()}
      </Price>
    </Container>
  );
};

CalenderItem.propTypes = {
  date: PropTypes.string,
  value: PropTypes.number,
  color: PropTypes.string,
};

export default CalenderItem;
