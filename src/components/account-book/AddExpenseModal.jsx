import { styled } from "styled-components";

import Modal from "../Modal.jsx";
import ExpenseModalForm from "./ExpenseModalForm.jsx";

import { hide } from "../../redux/modalSlice.js";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { categorys } from "../../librarys/data.js";

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

  function clear(value) {
    if (value) {
      setData({
        price: 0,
        name: "",
        category: categorys[0].id,
      });
    }
  }

  return (
    <Modal id={id} onToggle={clear}>
      <ExpenseModalForm data={data} onChange={setData} />
      <CoverButton onClick={() => dispatch(hide(id))}>확인</CoverButton>
    </Modal>
  );
};

export default AddExpenseModal;
