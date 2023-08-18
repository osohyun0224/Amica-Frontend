import { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import TermsAgreement from "../../components/login/TermsAgreement.jsx";
import EmailInput from "../../components/login/EmaiInput.jsx";
import PasswordInputForm from "../../components/login/PasswordInputForm.jsx";
import UserInfo from "../../components/login/UserInfo.jsx";
import HeaderTitle from "../../components/HeaderTitle.jsx";

import SimpleBar from "simplebar-react";

import { DispatchContext, StateContext } from "../../librarys/context";
import { intialSignupState, signupReducer } from "../../reducer/signup.js";
import { registerUser } from "../../librarys/login-api.js";
import { login, selectName } from "../../redux/userSlice.js";
import { useDispatch } from "react-redux";

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
  margin: 8px 24px;
  margin-top: 12px;
  font-size: 16px;
  font-weight: 700;
  color: rgba(21, 21, 21, 1);
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

function SignupPage() {
  const navigate = useNavigate();
  const loginDispatch = useDispatch();
  const [state, dispatch] = useReducer(signupReducer, intialSignupState);
  const {
    agreement,
    marketing,
    email,
    emailCheck,
    password,
    passwordCheck,
    name,
    nameCheck,
    phone,
    phoneCheck,
  } = state;

  const isComplete =
    agreement && emailCheck && passwordCheck && nameCheck && phoneCheck;

  async function onClick() {
    if (isComplete) {
      const data = await registerUser(email, password, name, phone);

      loginDispatch(
        login({
          access_token: "token11",
          refresh_token: "token22",
          email,
          name,
          admin: data.admin,
        }),
      );

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
