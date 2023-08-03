import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
//import InputForm from "../../components/InputForm.jsx";
import BackButton from "../../assets/images/getback.png";

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
  height: 80px;
  background: #EEF1F4;
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

const TermsAgreeTitle = styled.h3`
  font-family: NanumGothic;
  font-size: 16px;
  font-weight: 800;
  line-height: 30px;
  letter-spacing: -0.02em;
  text-align: left;
  margin-top: 10px;
  margin-left: -30px;
`;

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
  margin-top:10px;
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

// 이메일 입력 필드를 위한 스타일 컴포넌트
const EmailInputField = styled.input`
  width: 329px;
  height: 40px;
  top: 340px;
  left: 23px;
  border-radius: 5px;
  border: 1px solid #000; // 경계선 색상 설정
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


function SignupPage() {
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
    if (agreeTerms && agreePrivacy) {
      navigate("/password");
    }
  };

  return (
    <PageContainer>
      <Header>
        <Link to="/">
          <BackButtonImage src={BackButton} alt="Back" />
        </Link>
        <HeaderTitle>회원가입</HeaderTitle>
      </Header>
      <TermsAgreeTitle>약관 동의</TermsAgreeTitle> 
      <CheckboxContainer>
        <CheckboxItem border>
          <CheckboxInput
            type="checkbox"
            id="agree"
            checked={agree}
            onChange={toggleCheckbox}
          />
          <CheckboxLabel htmlFor="agree"> 전체 약관 동의</CheckboxLabel>
        </CheckboxItem>
        <CheckboxItem>
          <CheckboxInput
            type="checkbox"
            id="terms"
            checked={agreeTerms}
            onChange={toggleCheckboxTerms}
          />
          <CheckboxLabel htmlFor="terms">[필수] 서비스 이용 약관</CheckboxLabel>
        </CheckboxItem>
        <CheckboxItem>
          <CheckboxInput
            type="checkbox"
            id="privacy"
            checked={agreePrivacy}
            onChange={toggleCheckboxPrivacy}
          />
          <CheckboxLabel htmlFor="privacy">
          [필수] 개인정보 수집 및 이용
          </CheckboxLabel>
        </CheckboxItem>
        <CheckboxItem>
          <CheckboxInput
            type="checkbox"
            id="marketing"
            checked={agreeMarketing}
            onChange={toggleCheckboxMarketing}
          />
          <CheckboxLabel htmlFor="marketing">
            혜택 및 마케팅 정보 수신 동의 
          </CheckboxLabel>
        </CheckboxItem>
      </CheckboxContainer>
      <EmailLabel>이메일</EmailLabel>
      <EmailInputField
        placeholder="이메일 주소를 입력하세요."
        type="email"
      />
      <BottomBox
        to="/"
        onClick={handleNextClick}
        active={agreeTerms && agreePrivacy ? 1 : 0}
      >
        다음
      </BottomBox>
    </PageContainer>
  );
}
export default SignupPage;