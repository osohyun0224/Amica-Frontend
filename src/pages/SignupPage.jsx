import { Link } from "react-router-dom";
import styled from "styled-components";
import BackButton from "../assets/images/getback.png";
import InputForm from "../components/InputForm.jsx";

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
  position: relative;  // Add this line
`;

const BackButtonImage = styled.img`
  position: absolute;
  margin-top: -30px;
  margin-left: -120px;
  cursor: pointer;
`;

const SignupTitle = styled.h3`
  font-family: "Nanum Gothic";
  font-size: 24px;
  font-weight: 700;
  margin-top: 70px;
  margin-left: -100px;
  color: #667080;
`;

const SignupText = styled.p`
  font-family: "Nanum Gothic";
  font-size: 14px;
  font-weight: 500;
  text-align: left;
  margin-top: 10px;
  margin-left: -100px;
  color: #667080;
`;

const EmailInput = styled(InputForm)`
`;

const BottomBox = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 149%;  
  height: 84px;
  background-color: #667080;
  color: white;
  text-align: center;
  position: absolute;  
  bottom: 0;
  text-decoration: none;
  margin-left: -132px;
`;

function SignupPage() {
  return (
    <PageContainer>
      <Link to="/">
        <BackButtonImage src={BackButton} alt="Back" />
      </Link>
      <SignupTitle>회원가입</SignupTitle>
      <SignupText>
        필요한 서비스를 받을 수 있는 <br /> 이메일 주소를 입력하세요.
      </SignupText>
      <EmailInput label="이메일" placeholder="이메일 주소를 입력하세요." type="email"/>
      <BottomBox to="/yourDestinationPath">박스 텍스트 또는 컨텐츠</BottomBox>
    </PageContainer>
  );
}

export default SignupPage;
