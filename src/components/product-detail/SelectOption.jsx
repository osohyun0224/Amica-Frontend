import { useState, useEffect } from "react";
import { styled } from "styled-components";

import cancel from "../../assets/images/x.png";
import plus from "../../assets/images/plus.png";
import minus from "../../assets/images/minus.png";

const OptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    color: #667080;
    padding: 0 5px 10px 5px;
`;

const SelectOptionTitle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

const SelectOptionName = styled.div`
    margin-top: 5px;
`;

const SelectOptionDetail = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const SelectOptionNumber = styled.div`
    display: flex;
    margin: 0 20px;
`;

const BtnImg = styled.img`
    width: 13px;
    height: 13px;
    cursor: pointer;
`;

const SelectOption = ({ Data, onOrderMiuns, onOrderPlus }) => {
    return (
        <OptionContainer key={Data.id}>
            <SelectOptionTitle>
                <SelectOptionName> {Data} </SelectOptionName>
                <BtnImg 
                    src={cancel}
                    style={{ width: "20px", height: "20px" }}
                    onClick={() => onRemove(Data.id)}
                />
            </SelectOptionTitle>
            <SelectOptionTitle style={{ marginTop: "10px" }}>
                <SelectOptionDetail>
                    <BtnImg src={minus} onClick={onOrderMiuns(Data.id)}/>
                    <SelectOptionNumber> 1 </SelectOptionNumber>
                    <BtnImg src={plus} onClick={onOrderPlus(Data.id)}/>
                </SelectOptionDetail>
                {Data.price}원
            </SelectOptionTitle>
        </OptionContainer>
    )
}

export default SelectOption;