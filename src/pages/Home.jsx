import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import LogoImage from "../assets/images/mainLogo.svg";
import PetImage from "../assets/images/pet.png";

const Container = styled.div`
  padding: 64px 24px;
  min-height: calc(var(--vh) * 100);

  background: linear-gradient(182deg, #f2b366 0%, #f2d335 37.5%), #fff;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;

  & > * {
    z-index: 1;
  }
`;

const Background = styled.img`
  max-width: 500px;
  width: 100%;
  bottom: 64px;
  padding: 0 min(10%, 50px);
  position: absolute;
  object-fit: contain;

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

const Title = styled.img`
  margin-top: 64px;
  max-width: 360px;
  width: 100%;
`;

const Subtitle = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: white;
`;

const Spacer = styled.div`
  flex-grow: 1;
`;

function Home() {
  const navigate = useNavigate();
  return (
    <Container>
      <Background src={PetImage} />
      <Title src={LogoImage} />
      <Subtitle>내 친구를 위한 현명한 소비</Subtitle>
      <Spacer />
      <LoginButton onClick={() => navigate("/login")}>로그인</LoginButton>
      <SignupButton onClick={() => navigate("/signup")}>회원가입</SignupButton>
    </Container>
  );
}

export default Home;
