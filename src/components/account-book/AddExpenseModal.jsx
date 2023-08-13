import PropTypes from "prop-types";
import { styled } from "styled-components";

import Modal from "../Modal.jsx";
import Select from "../Select.jsx";

import { hide } from "../../redux/modalSlice.js";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { categorys } from "../../librarys/data.js";

const Container = styled.div`
  margin: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Title = styled.p`
  width: 100%;
  margin-bottom: 24px;
  font-weight: 600;
  font-size: 20px;
  text-align: center;
`;

const Text = styled.p`
  font-weight: 600;
  font-size: 14px;
`;

const Textbox = styled.input`
  padding: 8px;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  background-color: rgba(248, 248, 248, 1);

  &::placeholder {
    color: rgba(21, 21, 21, 0.3);
  }
`;

const TextboxContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr 16px);
  align-items: center;
  gap: 12px;

  & > input {
    width: 100%;
    text-align: right;
  }

  & > p {
    width: 100%;
    text-align: center;
  }
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  & > input {
    text-align: right;
    flex-grow: 1;
    flex-shrink: 1;
  }
`;

const Dropdown = styled(Select)``;

const CoverButton = styled.button`
  width: 100%;
  padding: 18px 0;
  border: none;
  font-size: 16px;
  color: #ffffff;
  background-color: rgba(217, 74, 86, 1);

  transition: background-color 0.2s;

  &:hover {
    background-color: rgba(217, 74, 86, 0.85);
  }

  cursor: pointer;
`;

const intialList = categorys.map(({ id, title }, index) => ({
  id,
  name: title,
  default: index === 0,
}));

const id = "add_expense";

const AddExpenseModal = ({}) => {
  const dispatch = useDispatch();

  const [list, setList] = useState(intialList);

  return (
    <Modal id={id}>
      <Container>
        <Title>추가하기</Title>
        <Text>날짜</Text>
        <TextboxContainer>
          <Textbox type="text" placeholder="2023" maxLength="4" />
          <Text>년</Text>
          <Textbox type="text" placeholder="8" maxLength="2" />
          <Text>월</Text>
          <Textbox type="text" placeholder="13" maxLength="2" />
          <Text>일</Text>
        </TextboxContainer>

        <Text>금액</Text>
        <PriceContainer>
          <Textbox type="text" placeholder="14000" />
          <Text>원</Text>
        </PriceContainer>
        <Text>이름</Text>
        <Textbox type="text" placeholder="달이 장난감" />
        <Text>카테고리</Text>
        <Dropdown list={list} outline={true} />
      </Container>
      <CoverButton onClick={() => dispatch(hide(id))}>확인</CoverButton>
    </Modal>
  );
};

AddExpenseModal.propTypes = {};

export default AddExpenseModal;
