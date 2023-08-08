import styled from "styled-components";
import BackButton from "../../assets/images/getback.png";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Chagepw from "../../components/login/Chagepw";

const BackButtonImage = styled.img`
  position: absolute;
  left: 15px;
  margin-top: -20px;
  cursor: pointer;
`;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: white;
  min-height: calc(var(--vh) * 100);
  margin: 0 auto;
  max-width: 1000px;
  padding-top: 30px;
  padding-left: 50px;
  position: relative;
  z-index: 1;
`;

const HeaderTitle = styled.h1`
  font-family: Nanum Gothic;
  font-size: 20px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: -0.02em;
  text-align: center;
  margin-top: 5px;
  margin-left: 30px;
`;

const Header = styled.header`
  width: 100%;
  height: 150px;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-top: -80px;
  margin-left: -50px;
`;

const BottomBox = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 84px;
  background-color: #d94a56;
  color: white;
  text-align: center;
  position: absolute;
  bottom: 0;
  text-decoration: none;
  margin-left: -50px;
  opacity: ${(props) => (props.active ? "1" : "0.5")};
  pointer-events: ${(props) => (props.active ? "auto" : "none")};
`;

function ChangeUserPW() {
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [lengthRequirement, setLengthRequirement] = useState(false);
  const [letterRequirement, setLetterRequirement] = useState(false);
  const [numberRequirement, setNumberRequirement] = useState(false);
  const [isPasswordMatch, setIsPasswordMatch] = useState(null);
  const [currentPassword, setCurrentPassword] = useState("");

  const handleCurrentPasswordChange = (e) => {
    setCurrentPassword(e.target.value);
  };

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
  const navigate = useNavigate();
  const handleNextClick = (e) => {
    e.preventDefault();
    navigate("/compelete");
  };

  return (
    <PageContainer>
      <Header>
        <Link to="/profile">
          <BackButtonImage src={BackButton} alt="Back" />
        </Link>
        <HeaderTitle>비밀번호 변경</HeaderTitle>
      </Header>
      <Chagepw
        currentPassword={currentPassword}
        handleCurrentPasswordChange={handleCurrentPasswordChange}
        password={password}
        passwordCheck={passwordCheck}
        handlePasswordChange={handlePasswordChange}
        handlePasswordCheckChange={handlePasswordCheckChange}
        lengthRequirement={lengthRequirement}
        letterRequirement={letterRequirement}
        numberRequirement={numberRequirement}
        isPasswordMatch={isPasswordMatch}
      />

      <BottomBox
        to="/compelete"
        onClick={handleNextClick}
        active={isValid ? 1 : 0}
      >
        변경하기
      </BottomBox>
    </PageContainer>
  );
}

export default ChangeUserPW;
