import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import InputForm from "../../components/InputForm.jsx";
import BackButton from "../../assets/images/getback.png";
import Popup from "../../components/Popup.jsx";

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

const CheckboxInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;
const CheckboxContainer = styled.div`
  display: block;
  position: relative;
  padding-left: 0px;
  cursor: pointer;
  user-select: none;
  padding-bottom: 15px;
  margin-top: 10px;
`;

const CheckboxItem = styled.div`
  border-bottom: ${props => props.border === true ? '1px solid black' : 'none'};
  padding-bottom: 10px;
  margin-top: 10px; 
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  font-size: 14px;
  margin-bottom: 10px;

  &:before {
    content: "";
    margin-right: 10px;
    display: inline-block;
    vertical-align: text-top;
    width: 18px;
    height: 18px;
    border: 1px solid #667080;
    border-radius: 3px;
  }

  ${CheckboxInput}:checked ~ &:before {
    background-color: #667080;
  }

  &:after {
    content: "";  
    position: absolute;
    display: none;
  }

  ${CheckboxInput}:checked ~ &:after {
    display: block;
    left: 9px;
    top: 13px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
  }
`;

// const Checkbox = styled.input`
//   position: absolute;
//   opacity: 0;
//   cursor: pointer;
//   height: 0;
//   width: 0;

//   &:checked ~ ${CheckboxLabel}:after {
//     display: block;
//   }
// `;

function SignupPage() {
  const [showPopup, setShowPopup] = useState(false);
  const [agree, setAgree] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [agreePrivacy, setAgreePrivacy] = useState(false);
  const [agreeMarketing, setAgreeMarketing] = useState(false);

  const toggleCheckboxTerms = () => {
    const newAgreeTermsState = !agreeTerms;
    setAgreeTerms(newAgreeTermsState);
    if (!newAgreeTermsState) setAgree(false);
  };
  
  const toggleCheckboxPrivacy = () => {
    const newAgreePrivacyState = !agreePrivacy;
    setAgreePrivacy(newAgreePrivacyState);
    if (!newAgreePrivacyState) setAgree(false);
  };
  
  const toggleCheckboxMarketing = () => {
    const newAgreeMarketingState = !agreeMarketing;
    setAgreeMarketing(newAgreeMarketingState);
    if (!newAgreeMarketingState) setAgree(false);
  };
  

  const navigate = useNavigate();

  const toggleCheckbox = () => {
    const newAgreeState = !agree;
    setAgree(newAgreeState);
    setAgreeTerms(newAgreeState);
    setAgreePrivacy(newAgreeState);
    setAgreeMarketing(newAgreeState);
  };

  const handleNextClick = (e) => {
    e.preventDefault();
    if (agree) {
      navigate("/password");
    } else {
      setShowPopup(true);
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
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
      <EmailInput
        label="이메일"
        placeholder="이메일 주소를 입력하세요."
        type="email"
      />
      <Popup showPopup={showPopup} handleClose={handleClosePopup}>
        <CheckboxContainer>
          <CheckboxItem border>
            <CheckboxInput
              type="checkbox"
              id="agree"
              checked={agree}
              onChange={toggleCheckbox}
            />
            <CheckboxLabel htmlFor="agree"> 전체동의</CheckboxLabel>
          </CheckboxItem>
          <CheckboxItem>
            <CheckboxInput
              type="checkbox"
              id="terms"
              checked={agreeTerms}
              onChange={toggleCheckboxTerms}
            />
            <CheckboxLabel htmlFor="terms">서비스 이용 약관</CheckboxLabel>
          </CheckboxItem>
          <CheckboxItem>
            <CheckboxInput
              type="checkbox"
              id="privacy"
              checked={agreePrivacy}
              onChange={toggleCheckboxPrivacy}
            />
            <CheckboxLabel htmlFor="privacy">개인정보 수집 및 이용</CheckboxLabel>
          </CheckboxItem>
          <CheckboxItem>
            <CheckboxInput
              type="checkbox"
              id="marketing"
              checked={agreeMarketing}
              onChange={toggleCheckboxMarketing}
            />
            <CheckboxLabel htmlFor="marketing">
              혜택 및 마케팅 정보 수신 동의 (선택)
            </CheckboxLabel>
          </CheckboxItem>
        </CheckboxContainer>
      </Popup>
      <BottomBox to="/" onClick={handleNextClick} active={agree ? 1 : 0}>
        다음
      </BottomBox>
    </PageContainer>
  );
}

export default SignupPage;