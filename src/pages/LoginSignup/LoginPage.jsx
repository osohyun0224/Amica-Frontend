import { useState } from "react";
import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import styled from "styled-components";
import BackButton from "../../assets/images/getback.png";
import LoginPassword from "../../components/login/LoginPassword.jsx";
import HeaderTitle from "../../components/HeaderTitle.jsx";

import { userLogin } from "../../librarys/login-api.js";
import { login, selectName } from "../../redux/userSlice.js";
import { useDispatch } from "react-redux";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(var(--vh) * 100);
`;

const Label = styled.p`
  margin: 8px 24px;
  margin-top: 24px;
  font-size: 16px;
  font-weight: 700;
  color: rgba(21, 21, 21, 1);
`;

const Input = styled.input`
  margin: 0 24px;
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
  cursor: pointer;

  transition: opacity 0.2s;
`;

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const redirect = searchParams.get("redirect");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const navigate = useNavigate();

  const handleLoginClick = async (e) => {
    const account = await userLogin(email, password);

    if (!account) {
      alert(
        "계정이 존재하지 않거나 비밀번호가 틀렸습니다.\n다시 시도해주세요.\n\n[일반 계정]\nid: likelion1@example.com\npw: qwerty123\n[관리자 계정]\nid: likelion2@example.com\npw: qwerty123",
      );
      return;
    }

    dispatch(login(account));

    if (redirect) {
      navigate(redirect);
    } else {
      navigate("/main");
    }
  };

  return (
    <Container>
      <HeaderTitle url="/" title="로그인" />
      <Label>이메일</Label>
      <Input
        type="text"
        placeholder="likelion1@example.com"
        value={email}
        onInput={handleEmailChange}
      />
      <Label>비밀번호</Label>
      <Input
        type="password"
        placeholder="qwerty123"
        value={password}
        onInput={handlePasswordChange}
      />
      <Spacer />
      <BottomBox onClick={handleLoginClick}>로그인</BottomBox>
    </Container>
  );
}

export default LoginPage;
