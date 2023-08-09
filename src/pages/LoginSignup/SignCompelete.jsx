import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { userLogin } from "../../librarys/login-api";

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

const SignupTitle = styled.h3`
  font-family: "Nanum Gothic";
  font-size: 24px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: 0.07em;
  text-align: center;
  margin-top: 239px;
  margin-left: 120px;
`;

const HeaderName = styled.p`
  font-family: "Nanum Gothic";
  font-size: 24px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: 0.07em;
  text-align: center;
  margin-top: 14px;
  margin-left: 130px;
`;

const BottomBox = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  width: 275px;
  height: 50px;
  background-color: #d94a56;
  font-family: "Nanum Gothic";
  color: white;
  text-align: center;
  position: absolute;
  bottom: 0;
  text-decoration: none;
  margin-left: 60px;
  margin-bottom: 120px;
`;

function SignCompelete() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loginUser = async () => {
      const loginInfo = await userLogin("likelion1@example.com", "qwerty123");
      setUser(loginInfo);
    };

    loginUser();
  }, []);
  return (
    <PageContainer>
      <Link to="/"></Link>
      <SignupTitle>환영합니다!</SignupTitle>
      {user ? (
        <>
          <HeaderName>{user.name} 님! </HeaderName>
        </>
      ) : (
        <HeaderName>Loading...</HeaderName>
      )}
      <BottomBox to="/main">메인페이지로 가기</BottomBox>
    </PageContainer>
  );
}

export default SignCompelete;
