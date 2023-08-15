import styled from "styled-components";
import { useContext } from "react";
import { DispatchContext, StateContext } from "../../librarys/context";

import { debounce } from "../../librarys/util";
import { useMemo } from "react";

const Container = styled.div`
  margin: 0 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Input = styled.input`
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

  &.error {
    border: 1px solid rgba(217, 74, 86, 1);
  }
`;

const Error = styled.p`
  margin-top: 5px;
  color: #d94a56;
  font-size: 12px;

  &.hidden {
    opacity: 0;
  }
`;

const EmailInput = () => {
  const { email, emailCheck } = useContext(StateContext);
  const dispatch = useContext(DispatchContext);

  const errorMessage = useMemo(() => {
    if (emailCheck !== false) {
      return "-";
    } else if (email === "") {
      return "이메일을 입력하세요.";
    } else {
      return "이메일 형식을 다시 확인해주세요.";
    }
  }, [email, emailCheck]);

  function onInput(event) {
    const value = event.target.value;
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    dispatch({
      type: "setEmail",
      payload: value,
    });
    dispatch({
      type: "setEmailCheck",
      payload: regex.test(value),
    });
  }

  return (
    <Container>
      <Input
        className={emailCheck === false ? "error" : null}
        placeholder="likelion@example.com"
        type="text"
        onInput={debounce(onInput)}
      />
      <Error className={emailCheck === false ? null : "hidden"}>
        {errorMessage}
      </Error>
    </Container>
  );
};

export default EmailInput;
