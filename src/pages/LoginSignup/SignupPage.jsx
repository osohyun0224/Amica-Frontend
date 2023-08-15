import { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import TermsAgreement from "../../components/login/TermsAgreement.jsx";
import EmailInput from "../../components/login/EmaiInput.jsx";
import PasswordInputForm from "../../components/login/PasswordInputForm.jsx";
import UserInfo from "../../components/login/UserInfo.jsx";
import HeaderTitle from "../../components/HeaderTitle.jsx";

import { DispatchContext, StateContext } from "../../librarys/context";
import { intialSignupState, signupReducer } from "../../reducer/signup.js";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(var(--vh) * 100);
`;

const Label = styled.p`
  margin: 8px 24px;
  margin-top: 12px;
  font-size: 16px;
  font-weight: 700;
  color: rgba(21, 21, 21, 1);
`;

const Spacer = styled.div`
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

function SignupPage() {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(signupReducer, intialSignupState);
  const {
    agreement,
    marketing,
    emailCheck,
    passwordCheck,
    nameCheck,
    phoneCheck,
  } = state;

  const isComplete =
    agreement && emailCheck && passwordCheck && nameCheck && phoneCheck;

  function onClick() {
    if (isComplete) {
      navigate("/compelete");
    }
  }

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <Container>
          <HeaderTitle url="/" title="회원가입" />
          <TermsAgreement />
          <Label>이메일</Label>
          <EmailInput />
          <Label>비밀번호</Label>
          <PasswordInputForm />
          <UserInfo />
          <Spacer />
          <BottomBox to="/compelete" onClick={onClick} active={isComplete}>
            가입하기
          </BottomBox>
        </Container>
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}
export default SignupPage;
