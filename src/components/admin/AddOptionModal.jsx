import PropTypes from "prop-types";
import { styled } from "styled-components";

import Modal from "../Modal.jsx";

import { hide, selectProps } from "../../redux/modalSlice.js";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import { filterNumber } from "../../librarys/util.js";

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

const id = "add_option";

const AddOptionModal = ({ onComplete }) => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");

  function close() {
    onComplete({
      name,
      price,
      discount,
    });
    dispatch(hide(id));
  }

  function clear(value) {
    if (value) {
      setName("");
      setPrice("");
      setDiscount("");
    }
  }

  return (
    <Modal id={id} onToggle={clear}>
      <Container>
        <Title>추가하기</Title>
        <Text>이름</Text>
        <Textbox
          type="text"
          placeholder="옵션명"
          value={name}
          onInput={(e) => setName(e.target.value)}
        />
        <Text>원가</Text>
        <PriceContainer>
          <Textbox
            type="text"
            placeholder="10,000"
            value={price.toLocaleString()}
            onInput={filterNumber(setPrice)}
          />
          <Text>원</Text>
        </PriceContainer>
        <Text>판매 가격 (할인가)</Text>
        <PriceContainer>
          <Textbox
            type="text"
            placeholder="8,000"
            value={discount.toLocaleString()}
            onInput={filterNumber(setDiscount)}
          />
          <Text>원</Text>
        </PriceContainer>
      </Container>
      <CoverButton onClick={close}>확인</CoverButton>
    </Modal>
  );
};

AddOptionModal.propTypes = {
  onComplete: PropTypes.func,
};

export default AddOptionModal;
