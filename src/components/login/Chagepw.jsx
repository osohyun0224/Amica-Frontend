import styled from "styled-components";
import PropTypes from "prop-types";

const PasswordLabel = styled.label`
  font-family: NanumGothic;
  font-size: 16px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: -0.02em;
  text-align: left;
  color: #151515;
  margin-top: 10px;
  margin-left: -27px;
`;

const PasswordInput = styled.input`
  font-family: "Nanum Gothic";
  width: 329px;
  height: 40px;
  top: 340px;
  left: 23px;
  font-size: 10px;
  border-radius: 5px;
  border: 1px solid
    ${(props) => (props.invalidEmail ? "#D94A56" : "transparent")};
  margin-left: -27px;

  @media (min-width: 768px) {
    width: 329px;
  }
`;

const RequirementsContainer = styled.div`
  font-family: "Nanum Gothic";
  font-weight: 500;
  display: flex;
  justify-content: flex-start;
  margin-top: 5px;
  margin-bottom: 10px;
  margin-left: -27px;
`;

const RequirementText = styled.span`
  font-family: "Nanum Gothic";
  font-weight: 500;
  font-size: 10px;
  color: ${(props) => (props.$isValid ? "green" : "red")};
  margin-right: 10px;
  font-weight: 500;
`;

const ConfirmationText = styled.span`
  font-family: "Nanum Gothic";
  font-weight: 500;
  font-size: 10px;
  color: ${(props) =>
    props.$isValid === null ? "red" : props.$isValid ? "green" : "red"};
  margin-top: 5px;
  margin-left: -27px;
`;

const NowPasswordLabel = styled.label`
  font-family: NanumGothic;
  font-size: 16px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: -0.02em;
  text-align: left;
  margin-left: -27px;
`;

const Chagepw = ({
  currentPassword,
  password,
  passwordCheck,
  handleCurrentPasswordChange,
  handlePasswordChange,
  handlePasswordCheckChange,
  lengthRequirement,
  letterRequirement,
  numberRequirement,
  isPasswordMatch,
}) => (
  <>
    <NowPasswordLabel>현재 비밀번호</NowPasswordLabel>
    <PasswordInput
      label="비밀번호"
      placeholder="비밀번호를 입력하세요."
      type="password"
      onChange={handleCurrentPasswordChange} 
      value={currentPassword} 
    />
    <PasswordLabel>변경할 비밀번호</PasswordLabel>
    <PasswordInput
      label="비밀번호"
      placeholder="비밀번호를 입력하세요."
      type="password"
      onChange={handlePasswordChange}
      value={password}
    />

    <RequirementsContainer>
      <RequirementText $isValid={lengthRequirement}>
        8자 이상 {lengthRequirement ? "✓" : ""}
      </RequirementText>
      <RequirementText $isValid={letterRequirement}>
        영문 포함 {letterRequirement ? "✓" : ""}
      </RequirementText>
      <RequirementText $isValid={numberRequirement}>
        숫자 포함 {numberRequirement ? "✓" : ""}
      </RequirementText>
    </RequirementsContainer>

    <PasswordInput
      label="비밀번호 확인"
      placeholder="비밀번호를 입력하세요."
      type="password"
      onChange={handlePasswordCheckChange}
      value={passwordCheck}
    />

    <ConfirmationText $isValid={isPasswordMatch}>
      비밀번호 확인{" "}
      {isPasswordMatch !== null ? (isPasswordMatch ? "✓" : "") : ""}
    </ConfirmationText>
  </>
);
Chagepw.propTypes = {
  currentPassword: PropTypes.string.isRequired,
  handleCurrentPasswordChange: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  passwordCheck: PropTypes.string.isRequired,
  handlePasswordChange: PropTypes.func.isRequired,
  handlePasswordCheckChange: PropTypes.func.isRequired,
  lengthRequirement: PropTypes.bool.isRequired,
  letterRequirement: PropTypes.bool.isRequired,
  numberRequirement: PropTypes.bool.isRequired,
  isPasswordMatch: PropTypes.bool,
};


export default Chagepw;
