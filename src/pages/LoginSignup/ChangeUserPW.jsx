import styled from "styled-components";

import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import HeaderTitle from "../../components/HeaderTitle.jsx";
import PasswordChangeForm from "../../components/login/PasswordChangeForm.jsx";

import SimpleBar from "simplebar-react";

import { useReducer } from "react";
import { DispatchContext, StateContext } from "../../librarys/context";
import {
  intialPasswordState,
  passwordReducer,
} from "../../reducer/password.js";

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

function ChangeUserPW() {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(passwordReducer, intialPasswordState);

  const { currentPassword, password, currentPasswordCheck, passwordCheck } =
    state;

  const isComplete = currentPasswordCheck && passwordCheck;

  function onClick() {
    if (isComplete) {
      navigate("/compelete");
    }
  }

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <Container>
          <HeaderTitle to="/profile" title="비밀번호 변경" />
          <PasswordChangeForm />
          <Spacer />
          <BottomBox to="/compelete" onClick={onClick} active={isComplete}>
            변경하기
          </BottomBox>
        </Container>
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

export default ChangeUserPW;
