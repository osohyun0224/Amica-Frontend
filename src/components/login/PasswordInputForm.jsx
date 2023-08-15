import styled from "styled-components";
import { useContext } from "react";
import { DispatchContext, StateContext } from "../../librarys/context";
import { useState } from "react";

import CheckImage from "../../assets/images/check.svg";
import { useEffect } from "react";

const Container = styled.div`
  margin: 0 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Input = styled.input`
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

const RequirementsContainer = styled.div`
  margin-top: 4px;
  display: flex;
  align-items: center;
  gap: 12px;
`;

const RequirementText = styled.span`
  display: flex;
  align-items: center;
  gap: 6px;
  font-weight: 500;
  font-size: 12px;
  color: rgba(102, 112, 128, 0.5);
  font-weight: 500;

  transition: color 0.2s;

  &.check {
    color: rgba(217, 74, 86, 1);
  }
`;

const Check = styled.img`
  width: 12px;
  height: 12px;
  filter: ${(props) =>
    props.value
      ? "invert(40%) sepia(33%) saturate(5457%) hue-rotate(331deg) brightness(93%) contrast(82%)"
      : "invert(44%) sepia(8%) saturate(893%) hue-rotate(178deg) brightness(93%) contrast(82%)"};
  opacity: ${(props) => (props.value ? "1" : "0.3")};

  transition:
    opacity 0.2s,
    filter 0.2s;
`;

const PasswordInputForm = () => {
  const { password, passwordCheck } = useContext(StateContext);
  const dispatch = useContext(DispatchContext);

  const [validate, setValidate] = useState("");

  const lengthCheck = password?.length >= 8;
  const alphabetCheck = /[a-zA-Z]/g.test(password || "");
  const numberCheck = /\d/g.test(password);
  const validateCheck = password !== "" && password === validate;

  useEffect(() => {
    if (password !== null) {
      dispatch({
        type: "setPasswordCheck",
        payload: lengthCheck && alphabetCheck && numberCheck && validateCheck,
      });
    }
  }, [
    dispatch,
    password,
    lengthCheck,
    alphabetCheck,
    numberCheck,
    validateCheck,
  ]);

  return (
    <Container>
      <Input
        className={passwordCheck === false ? "error" : null}
        placeholder="비밀번호 입력"
        type="password"
        onInput={(event) =>
          dispatch({
            type: "setPassword",
            payload: event.target.value,
          })
        }
      />
      <RequirementsContainer>
        <RequirementText className={lengthCheck ? "check" : null}>
          8자 이상 <Check src={CheckImage} value={lengthCheck} />
        </RequirementText>
        <RequirementText className={alphabetCheck ? "check" : null}>
          영문 포함 <Check src={CheckImage} value={alphabetCheck} />
        </RequirementText>
        <RequirementText className={numberCheck ? "check" : null}>
          숫자 포함 <Check src={CheckImage} value={numberCheck} />
        </RequirementText>
      </RequirementsContainer>
      <Input
        className={passwordCheck === false ? "error" : null}
        placeholder="비밀번호 확인"
        type="password"
        onInput={(event) => setValidate(event.target.value)}
      />
      <RequirementsContainer>
        <RequirementText className={validateCheck ? "check" : null}>
          비밀번호 일치 <Check src={CheckImage} value={validateCheck} />
        </RequirementText>
      </RequirementsContainer>
    </Container>
  );
};

export default PasswordInputForm;
