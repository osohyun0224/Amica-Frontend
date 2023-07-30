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
  background: #667080;
  color: white;
  box-shadow: 0px 4px 4px 0px #00000040;
`;

const StyledSignupButton = styled(StyledButton)`
  background: linear-gradient(0deg, #eef1f4, #eef1f4),
    linear-gradient(0deg, #667080, #667080);
  color: #667080;
  border: 1px solid #667080;
`;

const Title = styled.h1`
  font-family: Nanum Gothic;
  font-size: 28px;
  font-weight: 700;
  line-height: 33px;
  letter-spacing: 0em;
  text-align: left;
  margin-top: 100px;
`;

const SubTitle = styled.p`
  font-size: 16px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
`;
function Home() {
  return (
    <PageContainer>
      <Title>대충 깔쌈한 슬로건?</Title>
      <SubTitle>너도 한번 Join 해라 어쩌고</SubTitle>
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
