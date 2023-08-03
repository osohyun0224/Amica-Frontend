import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/Button.jsx";

const PageContainer = styled.div`
  background-color: white;
  min-height: 100%;
  margin: 0 auto;
  max-width: 1000px;
`;

const ButtonContainer = styled.div`
  position: fixed;
  bottom: 50px;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const StyledButton = styled(Button)`
  padding: 13px 24px;
`;

const StyledLoginButton = styled(StyledButton)`
  background: #D94A56;
  color: white;
  box-shadow: 0px 4px 4px 0px #00000040;
  border: 1px solid #D94A56;
`;

const StyledSignupButton = styled(StyledButton)`
  background: white;
  color: #D94A56;
  border: 1px solid #D94A56;
`;

const Title = styled.h1`
  font-family: Nanum Gothic;
  font-size: 28px;
  font-weight: 700;
  line-height: 33px;
  letter-spacing: 0em;
  text-align: left;
  margin-left: 20px;
  margin-top: 100px;
`;

const SubTitle = styled.p`
  font-size: 16px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: 0em;
  margin-left: 20px;
  margin-top: 10px;
  text-align: left;
`;

function Home() {
  return (
    <PageContainer>
      <Title>대충 깔쌈한 슬로건?</Title>
      <SubTitle>서비스명 나오면 <br/> 그에 따른 ... 이쁜... 말 예정</SubTitle>
      <ButtonContainer>
        <Link to="/login">
          <StyledLoginButton>로그인</StyledLoginButton>
        </Link>
        <Link to="/signup">
          <StyledSignupButton>회원가입</StyledSignupButton>
        </Link>
      </ButtonContainer>
    </PageContainer>
  );
}

export default Home;
