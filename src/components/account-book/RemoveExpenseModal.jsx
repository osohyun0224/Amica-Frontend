import PropTypes from "prop-types";
import { styled } from "styled-components";

import Modal from "../Modal.jsx";
import Select from "../Select.jsx";

import { hide, selectProps } from "../../redux/modalSlice.js";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { categorys } from "../../librarys/data.js";
import { useEffect } from "react";
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
  min-height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  font-weight: 400;
  font-size: 14px;
`;

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

const id = "remove_expense";

const RemoveExpenseModal = ({}) => {
  const dispatch = useDispatch();
  const [dataId, setId] = useState("");
  const modalProps = useSelector(selectProps(id));

  useEffect(() => {
    if (modalProps !== undefined) {
      setId(modalProps.id);
    }
  }, [modalProps]);

  return (
    <Modal id={id}>
      <Container>
        <Title>삭제하기</Title>
        <Text>
          정말로 삭제하시겠습니까?
          <br />
          삭제된 항목은 복구할 수 없습니다.
        </Text>
      </Container>
      <ButtonContainer>
        <CoverButton onClick={() => dispatch(hide(id))}>삭제</CoverButton>
        <CoverOutlineButton onClick={() => dispatch(hide(id))}>
          취소
        </CoverOutlineButton>
      </ButtonContainer>
    </Modal>
  );
};

RemoveExpenseModal.propTypes = {};

export default RemoveExpenseModal;
