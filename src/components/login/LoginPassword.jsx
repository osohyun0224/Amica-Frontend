import styled from "styled-components";
import PropTypes from 'prop-types';

const PasswordLabel = styled.label`
  font-family: "Nanum Gothic";
  font-size: 16px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: -0.02em;
  text-align: left;
  color: #151515;
  margin-top: 20px;
  margin-left: -27px;
`;

const PasswordInput = styled.input`
  font-family: "Nanum Gothic";
  width: 329px;
  height: 30px;
  top: 340px;
  left: 23px;
  font-size: 14px;
  border-radius: 5px;
  border: 1px solid
    ${(props) => (props.invalidEmail ? "#D94A56" : "transparent")};
  margin-left: -27px;

  @media (min-width: 768px) {
    width: 329px;
  }
`;


const PasswordInputForm = ({
  password,
  handlePasswordChange,
}) => (
  <>
  <PasswordLabel>비밀번호</PasswordLabel>
      <PasswordInput
        label="비밀번호"
        placeholder="비밀번호를 입력하세요."
        type="password"
        onChange={handlePasswordChange}
        value={password}
      />

  </>
);
PasswordInputForm.propTypes = {
  password: PropTypes.string.isRequired,
  handlePasswordChange: PropTypes.func.isRequired
};

export default PasswordInputForm;

