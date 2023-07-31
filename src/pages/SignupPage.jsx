import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import InputForm from "../components/InputForm.jsx";
import BackButton from "../assets/images/getback.png";
import XButton from "../assets/images/x.png";

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

const EmailInput = styled(InputForm)`
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

const Overlay = styled.div`
  display: ${props => props.show ? 'block' : 'none'};
  position: absolute;  
  top: 0;
  left: 0;
  width: 100%; 
  height: 100%; 
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 2;
`;


const PopupBox = styled.div`
  display: ${props => props.show ? 'block' : 'none'};
  position: absolute;  
  bottom: 84px;
  width: 100%; 
  height: 250px; 
  margin-left: -50px;
  background-color: white;
  z-index: 3;
  padding: 20px;
  box-sizing: border-box; 
`;


const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
`;


const CheckboxLabel = styled.label`
  position: relative;
  padding-left: 30px;
  cursor: pointer;
  font-size: 18px;
  user-select: none;

  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    height: 20px;
    width: 20px;
    background-color: #ffffff;
    border: 1px solid #000000;
    border-radius: 50%;
  }

  &:after {
    content: "";
    position: absolute;
    display: none;
    left: 6px;
    top: 50%;
    transform: translateY(-50%);
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #000000;
  }
`;

const Checkbox = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;

  &:checked ~ ${CheckboxLabel}:after {
    display: block;
  }
`;

const XButtonImage = styled.img`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;

function SignupPage() {
  const [showPopup, setShowPopup] = useState(false);
  const [agree, setAgree] = useState(false); 

  const closePopup = () => {
    setShowPopup(false);
  };

  const toggleCheckbox = () => {
    setAgree(!agree);
  };

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
      <Overlay show={showPopup} onClick={closePopup} />
      <PopupBox show={showPopup}>
        <XButtonImage src={XButton} alt="Close" onClick={closePopup} /> 
        <CheckboxContainer>
          <Checkbox type="checkbox" id="agree" checked={agree} onChange={toggleCheckbox} />
          <CheckboxLabel htmlFor="agree">전체 내용에 동의합니다.</CheckboxLabel>
        </CheckboxContainer>
      </PopupBox>
      <BottomBox to="/" onClick={(e) => { e.preventDefault(); setShowPopup(true); }}>다음</BottomBox>
    </PageContainer>
  );
}

export default SignupPage;