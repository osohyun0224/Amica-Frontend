import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { userLogin } from "../../librarys/login-api";
import { useSelector } from "react-redux";
import { selectName } from "../../redux/userSlice";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: flex-start; */
  justify-content: center;
  background-color: white;
  min-height: calc(var(--vh) * 100);
  margin: 0 auto;
  max-width: 1000px;
  position: relative;
  z-index: 1;
`;

const SignupTitleContainer = styled.div`
  text-align: center;
`;

const SignupTitle = styled.h3`
  font-family: "Nanum Gothic";
  font-size: 24px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: 0.07em;
  margin-bottom: 15px;
`;

const SignupSubTitle = styled.p`
  font-size: 15px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0.07em;
  margin-bottom: 10px;
`;

const HeaderName = styled.p`
  font-family: "Nanum Gothic";
  font-size: 24px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: 0.07em;
  text-align: center;
  margin-bottom: 250px;
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
  margin-left: 110px;
  margin-bottom: 120px;
`;

function SignCompelete() {
  const name = useSelector(selectName);

  return (
    <PageContainer>
      <Link to="/"></Link>
      <SignupTitleContainer>
        <SignupSubTitle>Wooooooooooha!!</SignupSubTitle>
        <SignupTitle>환영합니다</SignupTitle>
      </SignupTitleContainer>
      <HeaderName>{name} 님!</HeaderName>
      <BottomBox to="/main">메인페이지로 가기</BottomBox>
    </PageContainer>
  );
}

export default SignCompelete;
