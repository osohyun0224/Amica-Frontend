import { Link } from "react-router-dom";
import styled from "styled-components";

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
  margin-top: 80px;
  margin-left: -20px;
  color: #667080;
`;

const SignupText = styled.p`
  font-family: "Nanum Gothic";
  font-size: 14px;
  font-weight: 500;
  text-align: left;
  margin-top: 10px;
  margin-left: -20px;
  color: #667080;
`;

const BottomBox = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 84px;
  background-color: #667080;
  color: white;
  text-align: center;
  position: absolute;
  bottom: 0;
  text-decoration: none;
  margin-left: -50px;
`;

const SkipButton = styled.p`
  font-family: "Nanum Gothic";
  position: absolute;
  right: 20px;
  top: 20px;
  color: #667080;
  cursor: pointer;
`;

function SignCompelete() {
  return (
    <PageContainer>
      <Link to="/"></Link>
      <SignupTitle>가입을 환영합니다!</SignupTitle>
      <SignupText>
        지금 바로
        <br /> 반려동물을 등록해보세요
      </SignupText>
      <BottomBox to="/">추가하기</BottomBox>
      <Link to="/main">
        <SkipButton>건너뛰기</SkipButton>
      </Link>
    </PageContainer>
  );
}

//BottomBox to="/"에 누가 반려동물 추가하는 페이지 구현하면 연결 좀 해주세요 - 소현
export default SignCompelete;
