import PropTypes from "prop-types";
import { styled } from "styled-components";

import Modal from "../Modal.jsx";
import Select from "../Select.jsx";

import { hide, selectProps, show } from "../../redux/modalSlice.js";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { categorys } from "../../librarys/data.js";
import dayjs from "dayjs";

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

const intialList = categorys.map(({ id, title }, index) => ({
  id,
  name: title,
  default: index === 0,
}));

const id = "modify_expense";

const ModifyExpenseModal = ({}) => {
  const dispatch = useDispatch();
  const [dataId, setId] = useState("");
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [date, setDate] = useState("");
  const [price, setPrice] = useState("");
  const [name, setName] = useState("");
  const [category, setCategory] = useState(categorys[0].id);
  const [list, setList] = useState(intialList);
  const modalProps = useSelector(selectProps(id));

  useEffect(() => {
    if (modalProps !== undefined) {
      setId(modalProps.id);

      const d = dayjs(modalProps.date);
      setYear(d.year());
      setMonth(d.month() + 1);
      setDate(d.date());

      setPrice(modalProps.price);
      setName(modalProps.name);
      setCategory(modalProps.category);
    }
  }, [modalProps]);

  return (
    <Modal id={id}>
      <Container>
        <Title>수정하기</Title>
        <Text>날짜</Text>
        <TextboxContainer>
          <Textbox
            type="text"
            placeholder="2023"
            maxLength="4"
            value={year}
            onInput={(e) => setYear(e.target.value)}
          />
          <Text>년</Text>
          <Textbox
            type="text"
            placeholder="8"
            maxLength="2"
            value={month}
            onInput={(e) => setMonth(e.target.value)}
          />
          <Text>월</Text>
          <Textbox
            type="text"
            placeholder="13"
            maxLength="2"
            value={date}
            onInput={(e) => setDate(e.target.value)}
          />
          <Text>일</Text>
        </TextboxContainer>
        <Text>금액</Text>
        <PriceContainer>
          <Textbox
            type="text"
            placeholder="14000"
            value={price}
            onInput={(e) => setPrice(e.target.value)}
          />
          <Text>원</Text>
        </PriceContainer>
        <Text>이름</Text>
        <Textbox
          type="text"
          placeholder="달이 장난감"
          value={name}
          onInput={(e) => setName(e.target.value)}
        />
        <Text>카테고리</Text>
        <Dropdown
          list={list}
          outline={true}
          value={category}
          onSelect={(item) => setCategory(item.id)}
        />
      </Container>
      <ButtonContainer>
        <CoverOutlineButton
          onClick={() => {
            dispatch(show({ id: "remove_expense", props: { id: dataId } }));
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

ModifyExpenseModal.propTypes = {};

export default ModifyExpenseModal;
