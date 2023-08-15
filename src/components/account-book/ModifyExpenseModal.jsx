import { styled } from "styled-components";

import Modal from "../Modal.jsx";
import ExpenseModalForm from "./ExpenseModalForm.jsx";

import { hide, selectProps, show } from "../../redux/modalSlice.js";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  overflow: hidden;
`;

const CoverButton = styled.button`
  flex-grow: 1;
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

const CoverOutlineButton = styled(CoverButton)`
  color: rgba(217, 74, 86, 1);
  box-shadow: 0px 1px 0px rgba(217, 74, 86, 1) inset;
  background-color: rgba(255, 255, 255, 1);

  &:hover {
    background-color: rgba(235, 235, 235, 1);
  }
`;

const id = "modify_expense";

const ModifyExpenseModal = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectProps(id));
  const [data, setData] = useState(value);

  return (
    <Modal id={id}>
      <ExpenseModalForm data={value} onChange={setData} />
      <ButtonContainer>
        <CoverOutlineButton
          onClick={() => {
            dispatch(show({ id: "remove_expense", props: { id: value?.id } }));
            dispatch(hide(id));
          }}
        >
          삭제
        </CoverOutlineButton>
        <CoverButton onClick={() => dispatch(hide(id))}>적용</CoverButton>
      </ButtonContainer>
    </Modal>
  );
};

export default ModifyExpenseModal;
