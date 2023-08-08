import { useState } from "react";
import styled from "styled-components";

const DropdownContainer = styled.div`
    width: 100%;
    max-height: 140px;
    height: auto;
    background-color: #FFFFFF;
    border: 1px solid rgba(0, 0, 0, 0.25);
    border-radius: 6px;
    list-style-type: none;
    padding: 10px 0;
    overflow-y: scroll;
`;

const DropdownList = styled.li`
    display: flex;
    padding: 6px 16px;
    cursor: pointer;
`;

const Dropdown = ({orderList, setOrderList, productOption}) => {
    const optionClick = (option) => {
        setOrderList(option);
    }

    return (
        <DropdownContainer>
            {(productOption.map((option) => (
                <DropdownList key={option.id} 
                    onClick={() => optionClick(option)}
                > { option.productName } 
                </DropdownList>
            )))}
        </DropdownContainer>
    )
}

export default Dropdown;