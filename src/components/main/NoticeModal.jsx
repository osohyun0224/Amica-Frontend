import { styled } from "styled-components";

import Modal from "../Modal.jsx";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { hide } from "../../redux/modalSlice.js";

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

const Input = styled.input`
  padding: 8px;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  background-color: rgba(248, 248, 248, 1);

  &::placeholder {
    color: rgba(21, 21, 21, 0.3);
  }
`;

const TextBox = styled.textarea`
  min-height: 240px;
  padding: 8px;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  background-color: rgba(248, 248, 248, 1);
  resize: none;

  &::placeholder {
    color: rgba(21, 21, 21, 0.3);
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

const id = "modify_notice";

const NoticeModal = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  return (
    <Modal id={id}>
      <Container>
        <Title>새로운 공지사항 작성</Title>
        <Text>제목</Text>
        <Input
          type="text"
          placeholder="제목"
          value={title}
          onInput={(e) => setTitle(e.target.value)}
        />
        <Text>내용</Text>
        <TextBox
          type="textbox"
          placeholder="내용을 입력하세요"
          value={description}
          onInput={(e) => setDescription(e.target.value)}
        />
      </Container>
      <CoverButton onClick={dispatch(hide(id))}>확인</CoverButton>
    </Modal>
  );
};

export default NoticeModal;
