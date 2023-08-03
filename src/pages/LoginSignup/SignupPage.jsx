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

const CheckboxContainer = styled.div`
  display: block;
  position: relative;
  padding-left: 0px;
  cursor: pointer;
  user-select: none;
  padding-bottom: 15px;
  margin-top: 10px;
  margin-left: -27px;
`;

const CheckboxItem = styled.div`
  border-bottom: ${(props) =>
    props.border === true ? "1px solid black" : "none"};
  padding-bottom: 6px;
  margin-top: 10px;
  width: 400px;
`;

const CheckboxInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
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
      <HeaderComponent />
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
      
물론이죠, 코드에서 회원가입 페이지를 구현하는데 필요한 컴포넌트를 정리해 보았습니다. 수정해야 할 주요 부분을 몇 가지 파악했습니다:

TermsAgreementComponent: 이 부분은 TermsAgreement 컴포넌트로 대체해야 할 것 같습니다. 그리고 해당 컴포넌트에 필요한 props도 전달해주어야 합니다.
EmailAndPasswordComponent: 이 부분에 대한 구현이 누락된 것 같습니다. 실제 이메일과 비밀번호 입력을 위한 코드를 추가해야 할 것 같습니다.
HeaderComponent: HeaderComponent를 불러오지 않고 있습니다. 여기에서는 SignUpHeader로 불러왔으므로 그에 맞게 수정해주면 됩니다.
아래는 수정된 부분입니다.

jsx
Copy code
function SignupPage() {
  // ... 이전과 동일한 state 및 로직

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
export default SignupPage;
