import styled from "styled-components";
import PropTypes from 'prop-types';

const UsernameLabel = styled.label`
  font-family: "Nanum Gothic";
  font-size: 16px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: -0.02em;
  text-align: left;
  color: #151515;
  margin-top: 10px;
  margin-left: -27px;
`;

const UsernameInputField = styled.input`
  width: 100%;
  max-width: 329px;
  height: 30px;
  font-size: 16px;
  border-radius: 5px;
  font-family: "Nanum Gothic";
  border: 1px solid transparent;
  margin-left: -27px;

  @media (min-width: 768px) {
    width: 329px;
  }
`;

const PhoneLabel = styled.label`
  font-family: "Nanum Gothic";
  font-size: 16px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: -0.02em;
  text-align: left;
  color: #151515;
  margin-top: 10px;
  margin-left: -27px;
`;

const PhoneInputField = styled.input`
  font-family: "Nanum Gothic";
  width: 100%;
  max-width: 329px;
  height: 30px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid transparent;
  margin-left: -27px;

  @media (min-width: 768px) {
    width: 329px;
  }
`;
const UserInfo = ({ username, userphone, handleUsernameChange, handleUserPhoneChange }) => (
  <>
    <UsernameLabel>사용자 이름</UsernameLabel>
    <UsernameInputField
      placeholder="  닉네임"
      type="text"
      onChange={handleUsernameChange}
      value={username}
    />
    <PhoneLabel>휴대폰 번호</PhoneLabel>
    <PhoneInputField
      placeholder="  휴대폰 번호"
      type="text"
      onChange={handleUserPhoneChange}
      value={userphone}
    />
  </>
);

UserInfo.propTypes = {
  username: PropTypes.string.isRequired,
  userphone: PropTypes.string.isRequired,
  handleUsernameChange: PropTypes.func.isRequired,
  handleUserPhoneChange: PropTypes.func.isRequired,
};

export default UserInfo;
