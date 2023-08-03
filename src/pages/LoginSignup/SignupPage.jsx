import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import BackButton from "../../assets/images/getback.png";
import TermsAgreement from "../../components/login/TermsAgreement.jsx";
import EmailInput from "../../components/login/EmaiInput.jsx";
import PasswordInputForm from "../../components/login/PasswordInputForm.jsx";
import UserInfo from "../../components/login/UserInfo.jsx";

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

const Header = styled.header`
  width: 111%;
  height: 50px;
  background: #eef1f4;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-top: -31px;
  margin-left: -50px;
`;

const HeaderTitle = styled.h1`
  font-family: NanumGothic;
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: -0.02em;
  text-align: center;
  color: #151515;
`;

const BackButtonImage = styled.img`
  position: absolute;
  left: 15px;
  margin-top: -20px;
  cursor: pointer;
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

function useSignupForm() {
  const [agree, setAgree] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [agreePrivacy, setAgreePrivacy] = useState(false);
  const [agreeMarketing, setAgreeMarketing] = useState(false);
  const [email, setEmail] = useState("");
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [lengthRequirement, setLengthRequirement] = useState(false);
  const [letterRequirement, setLetterRequirement] = useState(false);
  const [numberRequirement, setNumberRequirement] = useState(false);
  const [isPasswordMatch, setIsPasswordMatch] = useState(null);
  const [username, setUsername] = useState("");
  const [userphone, setUserPhone] = useState("");

  const handleUserPhoneChange = (e) => setUserPhone(e.target.value);
  const handleUsernameChange = (e) => setUsername(e.target.value);

  const handlePasswordChange = (e) => {
    const passwordValue = e.target.value;
    setPassword(passwordValue);
    setLengthRequirement(passwordValue.length >= 8);
    setLetterRequirement(/[a-zA-Z]/.test(passwordValue));
    setNumberRequirement(/\d/.test(passwordValue));
  };

  const handlePasswordCheckChange = (e) => setPasswordCheck(e.target.value);

  const handleEmailChange = (e) => {
    const emailInput = e.target.value;
    setEmail(emailInput);
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    setInvalidEmail(!emailRegex.test(emailInput));
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
  }
  
  const toggleCheckbox = () => {
    const newAgreeState = !agree;
    setAgree(newAgreeState);
    setAgreeTerms(newAgreeState);
    setAgreePrivacy(newAgreeState);
    setAgreeMarketing(newAgreeState);
  };

  const navigate = useNavigate();
  const handleNextClick = (e) => {
    e.preventDefault();
    if (agreeTerms && agreePrivacy) navigate("/compelete");
  };

  useEffect(() => {
    const matchRequirement = password === passwordCheck;
    setIsValid(
      lengthRequirement &&
        letterRequirement &&
        numberRequirement &&
        matchRequirement,
    );
    setIsPasswordMatch(password && passwordCheck ? matchRequirement : null);
  }, [
    password,
    passwordCheck,
    lengthRequirement,
    letterRequirement,
    numberRequirement,
  ]);

  useEffect(() => {
    if (agree) {
      setAgreeTerms(true);
      setAgreePrivacy(true);
      setAgreeMarketing(true);
    }
  }, [agree]);

  useEffect(() => {
    if (agreeTerms && agreePrivacy && agreeMarketing) {
      setAgree(true);
    } else {
      setAgree(false);
    }
  }, [agreeTerms, agreePrivacy, agreeMarketing]);

  return {
    agree,
    email,
    invalidEmail,
    password,
    passwordCheck,
    isValid,
    lengthRequirement,
    letterRequirement,
    numberRequirement,
    isPasswordMatch,
    username,
    userphone,
    handleUserPhoneChange,
    handleUsernameChange,
    handlePasswordChange,
    handlePasswordCheckChange,
    handleEmailChange,
    toggleCheckboxTerms,
    toggleCheckboxPrivacy,
    toggleCheckboxMarketing,
    toggleCheckbox,
    handleNextClick,
  };
}

function SignupPage() {
  const formProps = useSignupForm();

  return (
    <PageContainer>
      <Header>
        <Link to="/">
          <BackButtonImage src={BackButton} alt="Back" />
        </Link>
        <HeaderTitle>회원가입</HeaderTitle>
      </Header>
      <TermsAgreement {...formProps} />
      <EmailInput {...formProps} />
      <PasswordInputForm {...formProps} />
      <UserInfo {...formProps} />
      <BottomBox
        to="/compelete"
        onClick={formProps.handleNextClick}
        active={
          formProps.agreeTerms && formProps.agreePrivacy && formProps.isValid
            ? 1
            : 0
        }
      >
        다음
      </BottomBox>
    </PageContainer>
  );
}

export default SignupPage;
