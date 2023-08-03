import styled from "styled-components";
import PropTypes from 'prop-types';

const TermsAgreeTitle = styled.h3`
  font-family: NanumGothic;
  font-size: 13px;
  font-weight: 800;
  line-height: 30px;
  letter-spacing: -0.02em;
  text-align: left;
  margin-top: 10px;
  margin-left: -30px;
`;

const CheckboxContainer = styled.div`
  display: block;
  position: relative;
  padding-left: 0px;
  cursor: pointer;
  user-select: none;
  padding-bottom: 0px;
  margin-top: 0px;
  margin-left: -27px;
`;

const CheckboxItem = styled.div`
  border-bottom: ${(props) =>
    props.border === true ? "1px solid black" : "none"};
  padding-bottom: 3px;
  margin-top: 5px;
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
  font-size: 10px;
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

const TermsAgreement = ({
  agree,
  agreeTerms,
  agreePrivacy,
  agreeMarketing,
  toggleCheckbox,
  toggleCheckboxTerms,
  toggleCheckboxPrivacy,
  toggleCheckboxMarketing,
}) => (
  <>
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
            [선택] 혜택 및 마케팅 정보 수신 동의
          </CheckboxLabel>
        </CheckboxItem>
      </CheckboxContainer>
  </>
);

TermsAgreement.propTypes = {
  agree: PropTypes.bool.isRequired,
  toggleCheckbox: PropTypes.func.isRequired,
  agreeTerms: PropTypes.bool.isRequired,
  toggleCheckboxTerms: PropTypes.func.isRequired,
  agreePrivacy: PropTypes.bool.isRequired,
  toggleCheckboxPrivacy: PropTypes.func.isRequired,
  agreeMarketing: PropTypes.bool.isRequired,
  toggleCheckboxMarketing: PropTypes.func.isRequired,
};

export default TermsAgreement;