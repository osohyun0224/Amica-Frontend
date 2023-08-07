import styled from "styled-components";
import PropTypes from "prop-types";
import InputForm from "../../components/InputForm.jsx";
import SmallInputForm from "../SmallInputForm.jsx";
import DropdownSpecies from "./DropdownSpecies.jsx";
import MoreBtn from "../../assets/images/rightArrow.png";
import { useState } from "react";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
  box-shadow: 0px 2px 4px 0px #00000040;
  z-index: 99;
`;

const ModalWrapper = styled.div`
  width: 321px;
  height: 469px;
  position: relative;
  border-radius: 5px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ModalHeader = styled.div`
  font-family: Nanum Gothic;
  font-size: 20px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: -0.02em;
  text-align: center;
  margin-top: 20px;
`;

const ImageBox = styled.label`
  width: 118px;
  height: 118px;
  padding: 2px 6px 2px 6px;
  border-radius: 5px;
  border: 1px solid #f2d335;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background: #ffffff;
  cursor: pointer;
  margin-top: 30px;
`;

const ImageInput = styled.input`
  display: none;
`;

const ImageText = styled.p`
  font-family: Nanum Gothic;
  font-size: 13px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.02em;
  text-align: center;
  margin: 0;
  color: #f2d335;
`;

const NameHeader = styled.div`
  font-family: NanumGothic;
  font-size: 14px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: -0.02em;
  text-align: left;
  margin-top: 20px;
  margin-left: -250px;
`;

const LabelHeader = styled.div`
  font-family: NanumGothic;
  font-size: 14px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: -0.02em;
  text-align: left;
  margin-top: 20px;
  margin-left: -0px;
`;

const InputField = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 5px;
`;

const InputRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
  margin-top: -10px;
  flex-direction: row;
  align-items: stretch;
  &:last-child ${InputField} {
    margin-right: 5px;
  }
`;

const ConfirmButton = styled.div`
  width: 100%;
  height: 60px;
  padding: 12px 16px 12px 24px;
  border-radius: 0px 0px 5px 5px;
  gap: 10px;
  background: #d94a56;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const ConfirmText = styled.p`
  font-family: Nanum Gothic;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: -0.02em;
  text-align: left;
  margin: 0;
  color: #ffffff;
`;

const DropDownContainer = styled.div`
  width: 135px;
  max-width: 100%; 
  height: 40px;
  background-color: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  margin-top: 3px;
  position: relative;
  font-size: 12px;
`;

const DropdownWrapper = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%; 
  z-index: 2;
  background-color: #ffffff; 
  overflow-y: auto; 
  max-height: 150px; 
`;

const DropDownOption = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 17px 0 12px;

  font-size: 12px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: -0.02em;
  text-align: left;
`;

const More = styled.img`
  width: 9px;
  height: 16px;
  transform: rotate(90deg);
  cursor: pointer;
  margin-left:10px;

  &.clicked {
    transform: rotate(270deg);
  }
`;

const MyPetInputModal = ({ show, onClose }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("선택하기");

  if (!show) return null;

  const handleDropdownClick = () => {
    setDropdownOpen(!dropdownOpen); // setViewProduct 대신 setDropdownOpen 사용
  };
  
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setDropdownOpen(false); // setViewProduct 대신 setDropdownOpen 사용
  };


  return (
    <ModalOverlay onClick={onClose}>
      <ModalWrapper onClick={(e) => e.stopPropagation()}>
        <ModalHeader>추가하기</ModalHeader>
        <ImageBox htmlFor="fileInput">
          <ImageInput type="file" accept="image/*" id="fileInput" />
          <ImageText>
            이미지를 <br /> 추가해주세요
          </ImageText>
        </ImageBox>
        <NameHeader>이름 *</NameHeader>
        <InputForm placeholder="이름" />
        <InputRow>
      <InputField>
        <LabelHeader>종 *</LabelHeader>
        <DropDownContainer onClick={handleDropdownClick}>
        <DropDownOption>
          {selectedOption}
          <More className={dropdownOpen ? "clicked" : ""} src={MoreBtn} />
        </DropDownOption>
        {dropdownOpen && (
          <DropdownWrapper>
            <DropdownSpecies onSelect={handleOptionSelect} />
          </DropdownWrapper>
        )}
      </DropDownContainer>
      </InputField>
      <InputField>
        <LabelHeader>품종 </LabelHeader>
        <SmallInputForm placeholder="품종" />
      </InputField>
    </InputRow>
        <InputRow>
          <InputField>
            <LabelHeader>나이 </LabelHeader>
            <SmallInputForm placeholder="나이" />
          </InputField>
          <InputField>
            <LabelHeader>성별 *</LabelHeader>
            <SmallInputForm placeholder="성별" />
          </InputField>
        </InputRow>
        <ConfirmButton onClick={onClose}>
          <ConfirmText>확인</ConfirmText>
        </ConfirmButton>
      </ModalWrapper>
    </ModalOverlay>
  );
};

MyPetInputModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default MyPetInputModal;
