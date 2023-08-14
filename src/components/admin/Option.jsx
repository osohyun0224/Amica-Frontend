import styled from "styled-components";
import PropTypes from "prop-types";
import { useState } from "react";
import { useEffect } from "react";

const Container = styled.div`
  margin-top: 6px;
  padding: 4px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  color: rgba(102, 112, 128, 1);
  gap: 8px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #dfdfdf;
  }
`;

const Title = styled.p`
  flex-grow: 1;
  color: rgba(21, 21, 21, 1);
`;

const Discount = styled.p`
  font-size: 14px;
  color: rgba(21, 21, 21, 1);
`;

const Price = styled.p`
  font-size: 12px;
  text-decoration: line-through;
`;

const Option = ({ name, price, discount, onClick, ...props }) => {
  const percentage = 100 - Math.round((discount / price) * 100);
  return (
    <Container onClick={onClick}>
      <Title>{name}</Title>
      <Discount>
        {discount?.toLocaleString()}원 (-{percentage || 0}%)
      </Discount>
      <Price>{price?.toLocaleString()}원</Price>
    </Container>
  );
};

Option.propTypes = {};

export default Option;
