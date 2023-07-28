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

function Home() {
  return (
    <PageContainer>
      <h1>Home Page</h1>
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
