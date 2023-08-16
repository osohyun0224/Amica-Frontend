import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import LandingBackgroundImage from "../assets/images/landingBackground.jpg";

const Container = styled.div`
  padding: 64px 24px;
  min-height: calc(var(--vh) * 100);

  display: flex;
  flex-direction: column;
  align-item: center;
  justify-content: center;

  & > * {
    z-index: 1;
  }
`;

const Background = styled.img`
  max-width: 500px;
  width: 100%;
  height: 100%;
  margin-left: -24px;
  position: absolute;
  object-fit: cover;

  z-index: 0;
`;

const StyledButton = styled.button`
  margin: 4px auto;
  max-width: 300px;
  width: 100%;
  text-align: center;
  padding: 12px 4px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s;
`;

const LoginButton = styled(StyledButton)`
  background-color: rgba(217, 74, 86, 1);
  color: white;

  &:hover {
    background-color: rgba(237, 88, 101, 1);
  }
`;

const SignupButton = styled(StyledButton)`
  border: 1px solid #d94a56;
  color: #d94a56;
  background-color: #ffffff;

  &:hover {
    background-color: rgba(248, 248, 248, 1);
  }
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
  const navigate = useNavigate();
  return (
    <Container>
      <Background src={LandingBackgroundImage} />
      <Subtitle>내 친구를 위한 현명한 소비</Subtitle>
      <Title>Amica!</Title>
      <LoginButton onClick={() => navigate("/login")}>로그인</LoginButton>
      <SignupButton onClick={() => navigate("/signup")}>회원가입</SignupButton>
    </Container>
  );
}

export default Home;
