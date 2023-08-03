import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
//import InputForm from "../../components/InputForm.jsx";
import BackButton from "../../assets/images/getback.png";
import SignUpHeader from "../../components/HeaderComponent";
import TermsAgreement from "../../components/TermsAgreement";


// const EmailInput = styled(InputForm)`
//   //혹시 몰라서 일단 스타일 넣어둠.
// `;

// 이메일 라벨을 위한 스타일 컴포넌트
const EmailLabel = styled.label`
  font-family: NanumGothic;
  font-size: 16px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: -0.02em;
  text-align: left;
  color: #151515;
  margin-top: 20px;
`;

const EmailInputField = styled.input`
  width: 329px;
  height: 40px;
  top: 340px;
  left: 23px;
  border-radius: 5px;
  border: 1px solid
    ${(props) => (props.invalidEmail ? "#D94A56" : "transparent")}; // 경계선 색상 설정
`;

const InvalidEmailMessage = styled.p`
  color: #d94a56;
  margin-top: 5px;
  font-size: 14px;
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
  opacity: ${(props) => (props.active ? "1" : "0.5")};
  pointer-events: ${(props) => (props.active ? "auto" : "none")};
`;

/*const SignupContainer = styled.div`
  // 여기에 필요한 CSS를 추가하세요
`;*/

const PasswordInput = styled.input`
  width: 329px;
  height: 40px;
  top: 340px;
  left: 23px;
  border-radius: 5px;
  border: 1px solid
    ${(props) => (props.invalidEmail ? "#D94A56" : "transparent")};
`;

const RequirementsContainer = styled.div`
  font-family: "Nanum Gothic";
  font-weight: 500;
  display: flex;
  justify-content: flex-start;
  margin-top: -30px;
`;

const RequirementText = styled.span`
  font-family: "Nanum Gothic";
  font-weight: 500;
  font-size: 14px;
  color: ${(props) => (props.$isValid ? "green" : "red")};
  margin-right: 10px;
  font-weight: 500;
`;

const ConfirmationText = styled.span`
  font-family: "Nanum Gothic";
  font-weight: 500;
  font-size: 14px;
  color: ${(props) =>
    props.$isValid === null ? "red" : props.$isValid ? "green" : "red"};
  margin-top: -30px;
`;

function SignupPage() {
  const [agree, setAgree] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [agreePrivacy, setAgreePrivacy] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('')
  const [agreeMarketing, setAgreeMarketing] = useState(false);
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const [lengthRequirement, setLengthRequirement] = useState(false);
  const [letterRequirement, setLetterRequirement] = useState(false);
  const [numberRequirement, setNumberRequirement] = useState(false);
  const [isPasswordMatch, setIsPasswordMatch] = useState(null);
  
  const handleToggleAgreeTerms = () => setAgreeTerms(!agreeTerms);
  const handleToggleAgreePrivacy = () => setAgreePrivacy(!agreePrivacy);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handlePasswordCheckChange = (e) => setPasswordCheck(e.target.value);
  const handleNextClick = () => {

  const handlePasswordChange = (e) => {
    const passwordValue = e.target.value;
    setPassword(passwordValue);
    setLengthRequirement(passwordValue.length >= 8);
    setLetterRequirement(/[a-zA-Z]/.test(passwordValue));
    setNumberRequirement(/\d/.test(passwordValue));
  };

  const handlePasswordCheckChange = (e) => {
    setPasswordCheck(e.target.value);
  };

  useEffect(() => {
    const checkPassword = (password, passwordCheck) => {
      const matchRequirement = password === passwordCheck;
      setIsValid(
        lengthRequirement &&
          letterRequirement &&
          numberRequirement &&
          matchRequirement,
      );
      setIsPasswordMatch(password && passwordCheck ? matchRequirement : null);
    };

    checkPassword(password, passwordCheck);
  }, [
    password,
    passwordCheck,
    lengthRequirement,
    letterRequirement,
    numberRequirement,
  ]);

  const handleEmailChange = (e) => {
    const emailInput = e.target.value;
    setEmail(emailInput);

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(emailInput)) {
      setInvalidEmail(true);
    } else {
      setInvalidEmail(false);
    }
  };

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
    if (agreeTerms && agreePrivacy) {
      navigate("/password");
    }
  };

  return (
    <PageContainer>
      <SignUpHeader />
      <TermsAgreement
        agree={agree}
        agreeTerms={agreeTerms}
        agreePrivacy={agreePrivacy}
        agreeMarketing={agreeMarketing}
        toggleCheckbox={toggleCheckbox}
        toggleCheckboxTerms={toggleCheckboxTerms}
        toggleCheckboxPrivacy={toggleCheckboxPrivacy}
        toggleCheckboxMarketing={toggleCheckboxMarketing}
      />
      {/* 이메일 및 비밀번호 입력 부분 추가 */}
      <EmailLabel>Email Address</EmailLabel>
      <EmailInputField
        type="email"
        value={email}
        onChange={handleEmailChange}
        invalidEmail={invalidEmail}
      />
      {invalidEmail && <InvalidEmailMessage>Invalid Email</InvalidEmailMessage>}
      <PasswordInput
        type="password"
        value={password}
        onChange={handlePasswordChange}
      />
      <EmailAndPasswordComponent 
        email={email}
        password={password}
        passwordCheck={passwordCheck}
        handleEmailChange={handleEmailChange}
        handlePasswordChange={handlePasswordChange}
        handlePasswordCheckChange={handlePasswordCheckChange}
      />
      <BottomBox
        to="/"
        onClick={handleNextClick}
        active={agreeTerms && agreePrivacy && isValid ? 1 : 0}
      >
        다음
      </BottomBox>
    </PageContainer>
  );
}
}
export default SignupPage;
