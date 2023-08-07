import { useState } from "react";
import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import styled from "styled-components";
import BackButton from "../../assets/images/getback.png";
import EmailInput from "../../components/login/EmaiInput.jsx";
import LoginPassword from "../../components/login/LoginPassword.jsx";

import { userLogin } from "../../librarys/login-api.js";
import { login, selectName } from "../../redux/userSlice.js";
import { useDispatch } from "react-redux";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: white;
  min-height: calc(var(--vh) * 100);
  margin: 0 auto;
  max-width: 1000px;
  padding-top: 30px;
  padding-left: 50px;
  position: relative;
  z-index: 1;
`;

const Header = styled.header`
  width: 111%;
  height: 50px;
  background: #eef1f4;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-top: -31px;
  margin-left: -50px;
`;

const HeaderTitle = styled.h1`
  font-family: "Nanum Gothic";
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: -0.02em;
  text-align: center;
  color: #151515;
`;

const BackButtonImage = styled.img`
  position: absolute;
  left: 15px;
  margin-top: -20px;
  cursor: pointer;
`;

const BottomBox = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 84px;
  background-color: #d94a56;
  color: white;
  text-align: center;
  position: absolute;
  bottom: 0;
  text-decoration: none;
  margin-left: -50px;
`;

function LoginPage() {
  const [email, setEmail] = useState("likelion1@example.com");
  const [password, setPassword] = useState("qwerty123");
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
    e.preventDefault();
    const account = await userLogin(email, password);

    if (!account) {
      alert(
        "로그인을 다시 시도하여주세요.\nid: likelion1@example.com\npw: qwerty123",
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
    <PageContainer>
      <Header>
        <Link to="/">
          <BackButtonImage src={BackButton} alt="Back" />
        </Link>
        <HeaderTitle>로그인</HeaderTitle>
      </Header>
      <EmailInput email={email} handleEmailChange={handleEmailChange} />
      <LoginPassword
        password={password}
        handlePasswordChange={handlePasswordChange}
      />
      <BottomBox onClick={handleLoginClick}>로그인</BottomBox>
    </PageContainer>
  );
}

export default LoginPage;
