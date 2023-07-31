import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import InputForm from "../../components/InputForm.jsx";
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

const PasswordInput = styled(InputForm)``;

const ConditionText = styled.p`
  font-size: 10px;
  color: ${(props) => (props.$isValid ? "green" : "red")};
  margin-top: 10px;
`;

const BottomBox = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 84px;
  background-color: ${(props) => (props.$isValid ? "#667080" : "#aaa")};
  color: white;
  text-align: center;
  position: absolute;
  bottom: 0;
  text-decoration: none;
  margin-left: -50px;
  pointer-events: ${(props) => (props.$isValid ? "all" : "none")};
`;

function PasswordPage() {
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [isValid, setIsValid] = useState(false);


  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handlePasswordCheckChange = (e) => {
    setPasswordCheck(e.target.value);
  };

  useEffect(() => { 
    checkPassword(password, passwordCheck);
  }, [password, passwordCheck]); 

  const checkPassword = (password, passwordCheck) => {
    const lengthRequirement = password.length >= 8;
    const letterRequirement = /[a-zA-Z]/.test(password);
    const numberRequirement = /\d/.test(password);
    const matchRequirement = password === passwordCheck;
    setIsValid(
      lengthRequirement &&
        letterRequirement &&
        numberRequirement &&
        matchRequirement,
    );
  };

  return (
    <PageContainer>
      <Link to="/">
        <BackButtonImage src={BackButton} alt="Back" />
      </Link>
      <SignupTitle>회원가입</SignupTitle>
      <SignupText>
        로그인에 사용할 <br /> 비밀번호를 입력해주세요.
      </SignupText>
      <PasswordInput
        label="비밀번호"
        placeholder="비밀번호를 입력하세요."
        type="password"
        onChange={handlePasswordChange}
        value={password}
      />
      <PasswordInput
        label="비밀번호 확인"
        placeholder="비밀번호를 입력하세요."
        type="password"
        onChange={handlePasswordCheckChange}
        value={passwordCheck} 
      />
      <ConditionText $isValid={isValid}>
        비밀번호는 8자리 이상, 영문, 숫자가 포함되어야 하며, 비밀번호 확인란과
        일치해야 합니다.
      </ConditionText>
      <BottomBox to="/compelete" $isValid={isValid}>
        다음
      </BottomBox>
    </PageContainer>
  );
}

export default PasswordPage;
