import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/Button.jsx';

const PageContainer = styled.div`
  background-color: white;
  min-height: 100vh;
  margin: 0 auto;
  max-width: 1000px;
`;

const ButtonContainer = styled.div`
  position: fixed;
  bottom: 50px;
  width: 100%;
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

function Home() {
  return (
    <PageContainer>
      <h1>Home Page</h1>
      
      <ButtonContainer>
        <Link to="/login">
          <StyledLoginButton>Login</StyledLoginButton>
        </Link>
        <Link to="/signup">
          <StyledButton>Sign Up</StyledButton>
        </Link>
      </ButtonContainer>
    </PageContainer>
  );
}

export default Home;
