import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/Button.jsx";
import LandingBackgroundImage from "../assets/images/landingBackground.jpg";
import { useRef } from "react";

const PageContainer = styled.div`
  padding: 64px 32px;
  min-height: calc(var(--vh) * 100);
  background-position: 50%;
  background-size: cover;

  display: flex;
  flex-direction: column;
  align-item: center;

  transition: background 0.2s;

  animation-duration: 5s;
  animation-name: slide;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-timing-function: ease-in-out;

  @keyframes slide {
    from {
      background-position: 48%;
    }

    to {
      background-position: 52%;
    }
  }
`;

const StyledButton = styled.button`
  min-width: 300px;
  padding: 12px 4px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
`;

const StyledLoginButton = styled(StyledButton)`
  background: #d94a56;
  color: white;

  &:hover {
  }
`;

const StyledLink = styled(Link)`
  margin: 4px 0;
  text-align: center;
`;

const StyledSignupButton = styled(StyledButton)`
  background: white;
  color: #d94a56;
  border: 1px solid #d94a56;
`;

const Title = styled.p`
  font-size: 50px;
  font-weight: 600;
  flex-grow: 1;
`;

const Subtitle = styled.p`
  margin-top: 64px;
  font-size: 16px;
  font-weight: 400;
`;

function Home() {
  return (
    <PageContainer
      style={{ backgroundImage: `url(${LandingBackgroundImage})` }}
    >
      <Subtitle>내 친구를 위한 현명한 소비</Subtitle>
      <Title>Amica!</Title>
      <StyledLink to="/login">
        <StyledLoginButton>로그인</StyledLoginButton>
      </StyledLink>
      <StyledLink to="/signup">
        <StyledSignupButton>회원가입</StyledSignupButton>
      </StyledLink>
    </PageContainer>
  );
}

export default Home;
