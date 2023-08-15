import { styled } from "styled-components";

import Modal from "../Modal.jsx";
import ExpenseModalForm from "./ExpenseModalForm.jsx";

import { hide } from "../../redux/modalSlice.js";
import { useDispatch } from "react-redux";
import { useState } from "react";

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

const id = "add_expense";

const AddExpenseModal = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState(null);

  return (
    <Modal id={id}>
      <ExpenseModalForm onChange={setData} />
      <CoverButton onClick={() => dispatch(hide(id))}>확인</CoverButton>
    </Modal>
  );
};

export default AddExpenseModal;
