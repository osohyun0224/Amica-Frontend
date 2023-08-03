import styled from "styled-components";
import PropTypes from 'prop-types';

const EmailLabel = styled.label`
  font-family: "Nanum Gothic";
  font-size: 13px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: -0.02em;
  text-align: left;
  color: #151515;
  margin-top: 0px;
  margin-left: -27px;
`;

const EmailInputField = styled.input`
  width: 329px;
  height: 30px;
  top: 340px;
  left: 23px;
  font-family: "Nanum Gothic";
  font-size: 10px;
  border-radius: 5px;
  border: 1px solid
    ${(props) => (props.invalidEmail ? "#D94A56" : "transparent")};
  margin-left: -27px;

  @media (min-width: 768px) {
    width: 329px;
  }
`;

const InvalidEmailMessage = styled.p`
  font-family: "Nanum Gothic";
  color: #d94a56;
  margin-top: 5px;
  font-size: 10px;
`;

const EmailInput = ({ email, invalidEmail, handleEmailChange }) => (
  <>
    <EmailLabel>이메일</EmailLabel>
    <EmailInputField
      placeholder="이메일 주소를 입력하세요."
      type="email"
      onChange={handleEmailChange}
      value={email}
      invalidEmail={invalidEmail}
    />
    {invalidEmail && <InvalidEmailMessage>이메일 형식을 다시 확인해주세요</InvalidEmailMessage>}
  </>
);
EmailInput.propTypes = {
  email: PropTypes.string.isRequired,
  invalidEmail: PropTypes.bool.isRequired,
  handleEmailChange: PropTypes.func.isRequired,
};
export default EmailInput;
