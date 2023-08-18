import styled from "styled-components";

import HeaderTitle from "../../components/HeaderTitle.jsx";
import { useState } from "react";

import SimpleBar from "simplebar-react";
import { useNavigate } from "react-router-dom";

const Container = styled(SimpleBar)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(var(--vh) * 100);
  overflow: auto;

  &.freeze > .simplebar-track {
    display: none;
  }

  & .simplebar-content {
    min-height: calc(var(--vh) * 100);
    display: flex;
    flex-direction: column;
  }

  & > .simplebar-track.simplebar-horizontal {
    height: 7px;
  }

  & > .simplebar-track.simplebar-vertical {
    width: 7px;
  }

  & .simplebar-mask {
    z-index: auto;
  }
`;

const Label = styled.p`
  margin: 0 24px;
  margin-top: 36px;
  font-size: 14px;
  font-weight: 700;
  color: rgba(21, 21, 21, 1);

  &:first-child {
    margin-top: 0;
  }
`;

const Input = styled.input`
  margin: 0 24px;
  margin-top: 12px;
  padding: 8px;
  font-size: 14px;
  background-color: rgba(248, 248, 248, 1);
  border: 1px solid transparent;
  border-radius: 5px;

  transition:
    border 0.2s,
    color 0.2s;

  &::placeholder {
    color: #bfbfbf;
  }

  &:first-child {
    margin-top: 0;
  }

  &.error {
    border: 1px solid rgba(217, 74, 86, 1);
  }
`;

const Spacer = styled.div`
  min-height: 64px;
  flex-grow: 1;
`;

const BottomBox = styled.button`
  padding: 24px;
  border: none;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #d94a56;
  color: white;
  text-align: center;

  opacity: ${(props) => (props.active ? "1" : "0.5")};
  cursor: ${(props) => (props.active ? "pointer" : "auto")};

  transition: opacity 0.2s;
`;

function ChangeUserName() {
  const navigate = useNavigate();
  const [current, setCurrent] = useState("");
  const [change, setChange] = useState("");

  function onClick() {
    if (current && change) {
      navigate("/profile");
    }
  }

  return (
    <Container>
      <HeaderTitle to="/profile" title="사용자 이름 변경" />
      <Label>현재 사용자 이름</Label>
      <Input
        placeholder="null 사랑하지 않아"
        type="text"
        value={current}
        onInput={(event) => setCurrent(event.target.value)}
      />
      <Label>변경할 사용자 이름</Label>
      <Input
        placeholder="Java칩푸라푸치노"
        type="text"
        value={change}
        onInput={(event) => setChange(event.target.value)}
      />
      <Spacer />
      <BottomBox to="/compelete" onClick={onClick} active={current && change}>
        변경하기
      </BottomBox>
    </Container>
  );
}

export default ChangeUserName;
