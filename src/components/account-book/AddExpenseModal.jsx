import PropTypes from "prop-types";
import { styled } from "styled-components";

import Modal from "../Modal.jsx";

import { hide } from "../../redux/modalSlice.js";
import { useDispatch } from "react-redux";

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
  display: flex;
  align-items: center;

  & > input {
    width: 100%;
    flex-shrink: 1;
    flex-grow: 1;
  }

  & > p {
    width: 100%;
    margin-left: 8px;
    flex-shrink: 1;
    flex-grow: 1;
  }
`;

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

const AddExpenseModal = ({}) => {
  const dispatch = useDispatch();
  return (
    <Modal>
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
        <Textbox type="text" placeholder="14000" />
        <Text>이름</Text>
        <Textbox type="text" placeholder="달이 장난감" />
        <Text>카테고리</Text>
      </Container>
      <CoverButton onClick={() => dispatch(hide())}>확인</CoverButton>
    </Modal>
  );
};

AddExpenseModal.propTypes = {};

export default AddExpenseModal;
