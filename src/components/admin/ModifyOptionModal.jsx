import PropTypes from "prop-types";
import { styled } from "styled-components";

import Modal from "../Modal.jsx";

import { hide, selectProps } from "../../redux/modalSlice.js";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
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

const id = "modify_option";

const ModifyOptionModal = ({ onComplete }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const value = useSelector(selectProps(id));

  useEffect(() => {
    if (value) {
      setName(value.name);
      setPrice(value.price);
      setDiscount(value.discount);
    }
  }, [value]);

  function close() {
    onComplete({
      id: value.id,
      name,
      price,
      discount,
    });
    dispatch(hide(id));
  }

  return (
    <Modal id={id}>
      <Container>
        <Title>수정하기</Title>
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

ModifyOptionModal.propTypes = {
  onComplete: PropTypes.func,
};

export default ModifyOptionModal;
