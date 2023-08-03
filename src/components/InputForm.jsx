import styled from "styled-components";
import PropTypes from 'prop-types';


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

const InputField = styled.input`
  padding: 10px;
  margin: 5px 0;
  width: 100%;
  border: 1px solid ${props => (props.invalid ? 'red' : '#ccc')};
`;

const RequirementsList = styled.ul`
  padding-left: 20px;
  color: #888;
`;

const RequirementItem = styled.li`
  color: ${props => (props.valid ? 'green' : '#888')};
`;

InputForm.propTypes = {
  email: PropTypes.string.isRequired,
  handleEmailChange: PropTypes.func.isRequired,
  invalidEmail: PropTypes.bool.isRequired,
  password: PropTypes.string.isRequired,
  handlePasswordChange: PropTypes.func.isRequired,
  passwordCheck: PropTypes.string.isRequired,
  handlePasswordCheckChange: PropTypes.func.isRequired,
  lengthRequirement: PropTypes.bool.isRequired,
  letterRequirement: PropTypes.bool.isRequired,
  numberRequirement: PropTypes.bool.isRequired,
  isPasswordMatch: PropTypes.bool,
};

function InputForm({
  email, handleEmailChange, invalidEmail,
  password, handlePasswordChange,
  passwordCheck, handlePasswordCheckChange,
  lengthRequirement, letterRequirement, numberRequirement, isPasswordMatch,
}) {

  return (
    <>
      <EmailLabel>이메일</EmailLabel>
      <EmailInputField
        type="email"
        value={email}
        onChange={handleEmailChange}
        invalidEmail={invalidEmail}
      />
      {invalidEmail && <InvalidEmailMessage>유효한 이메일</InvalidEmailMessage>}

      <EmailLabel>비밀번호</EmailLabel>
      <PasswordInput
        type="password"
        value={password}
        onChange={handlePasswordChange}
      />

      <RequirementsContainer>
        <RequirementText $isValid={lengthRequirement}>
          8자 이상
        </RequirementText>
        <RequirementText $isValid={letterRequirement}>
          영문 포함
        </RequirementText>
        <RequirementText $isValid={numberRequirement}>
          숫자 포함
        </RequirementText>
      </RequirementsContainer>

      <EmailLabel>비밀번호 확인</EmailLabel>
      <PasswordInput
        type="password"
        value={passwordCheck}
        onChange={handlePasswordCheckChange}
      />
      <ConfirmationText $isValid={isPasswordMatch}>
        {isPasswordMatch === null
          ? ''
          : isPasswordMatch
          ? '비밀번호 일치'
          : '비밀번호 일치하지 않음'}
      </ConfirmationText>
    </>
  );
}

export default InputForm;