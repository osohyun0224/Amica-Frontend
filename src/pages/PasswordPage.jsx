import { Link } from "react-router-dom";
import styled from "styled-components";
import InputForm from "../components/InputForm.jsx";
import BackButton from "../assets/images/getback.png";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;  
  background-color: white;
  min-height: 100vh;
  margin: 0 auto;
  max-width: 1000px;
  padding-top: 30px;
  padding-left: 50px;
  position: relative;  
  z-index: 1;
`;
const BackButtonImage = styled.img`
  position: absolute;
  margin-top: 0px;
  margin-left: -40px;
  cursor: pointer;
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

const PasswordInput = styled(InputForm)`
//혹시 몰라서 일단 스타일 넣어둠.
`;

const PasswordCheck= styled(InputForm)`
//혹시 몰라서 일단 스타일 넣어둠.
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


function PasswordPage () {
  return (
    <PageContainer>
      <Link to="/">
        <BackButtonImage src={BackButton} alt="Back" />
      </Link>
      <SignupTitle>회원가입</SignupTitle>
      <SignupText>
        로그인에 사용할 <br /> 비밀번호를 입력해주세요.
      </SignupText>
      <PasswordInput label="비밀번호" placeholder="비밀번호를 입력하세요." type="password"/>
      <PasswordCheck label="비밀번호 확인" placeholder="비밀번호를 입력하세요." type="password"/>
      <BottomBox to="/">다음</BottomBox>
    </PageContainer>
  );
}

export default PasswordPage;