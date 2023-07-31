import { useState } from "react";
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
  position: relative;  
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

const EmailInput = styled(InputForm)`
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

const Overlay = styled.div`
  display: ${props => props.show ? 'block' : 'none'};
  position: fixed;  
  top: 0;
  left: 0;
  width: 100vw; 
  height: 100vh; 
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 999;
`;

const PopupBox = styled.div`
  display: ${props => props.show ? 'block' : 'none'};
  position: absolute;  
  bottom: 84px;
  width: 100%; 
  height: 250px; 
  background-color: white;
  margin-left: -50px;
`;


function SignupPage() {
  const [showPopup, setShowPopup] = useState(false);

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <PageContainer>
      <Overlay show={showPopup} onClick={closePopup} />
      <Link to="/">
        <BackButtonImage src={BackButton} alt="Back" />
      </Link>
      <SignupTitle>회원가입</SignupTitle>
      <SignupText>
        필요한 서비스를 받을 수 있는 <br /> 이메일 주소를 입력하세요.
      </SignupText>
      <EmailInput label="이메일" placeholder="이메일 주소를 입력하세요." type="email"/>
      <PopupBox show={showPopup}>
        {/* 팝업 박스 내용을 여기에 채워주세요 */}
      </PopupBox>
      <BottomBox to="/" onClick={(e) => { e.preventDefault(); setShowPopup(true); }}>다음</BottomBox>
    </PageContainer>
  );
}

export default SignupPage;