import { useState } from "react";
import styled from "styled-components";

const DropdownContainer = styled.div`
  padding: 10px 0;

  &.clicked {
    display: "block";
  }
`;

const DropdownList = styled.li`
  display: flex;
  padding: 6px 16px;
  cursor: pointer;
`;

const Dropdown = ({ orderList, setOrderList, productOption }) => {
  return (
    <DropdownContainer>
      {productOption.map((option) => (
        <DropdownList key={option.id} onClick={() => setOrderList(option)}>
          {" "}
          {option.name}
        </DropdownList>
      ))}
    </DropdownContainer>
  );
};

export default Dropdown;
