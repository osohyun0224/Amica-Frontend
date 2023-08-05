import { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import DeleteImage from "../../assets/images/x-circle.png";
import InputForm from "../InputForm.jsx";

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
  justify-content: space-between;
  align-items: center;
`;

const ModalContent = styled.div`
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

const ModalSubtext = styled.p`
  font-family: Nanum Gothic;
  font-size: 10px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.02em;
  text-align: left;
  color: #d94a56;
`;

const KeywordContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
`;

const StyledDeleteButton = styled.img`
  margin-right: 5px;
`;

const AddButton = styled.div`
  width: 274px;
  height: 27px;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  border: 1px solid #d94a56;
  background: #ffffff;
  cursor: pointer;
`;

const AddButtonText = styled.span`
  font-family: Nanum Gothic;
  font-size: 16px;
  color: #d94a56;
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

const KeywordInputModal = ({ show, onClose, setKeywords, selectedPetId }) => {
  const [keywords, setLocalKeywords] = useState([]);

  const handleInputChange = (event, index) => {
    setLocalKeywords((prevState) =>
      prevState.map((item, i) => (i === index ? event.target.value : item))
    );
  };

  const handleAddKeyword = () => {
    if (keywords.length < 5) {
      setLocalKeywords((prevState) => [...prevState, ""]);
    }
  };

  const handleDeleteKeyword = (index) => {
    setLocalKeywords((prevState) => prevState.filter((_, i) => i !== index));
  };

  const handleClose = () => {
    setKeywords((prevKeywords) => ({
      ...prevKeywords,
      [selectedPetId]: keywords,
    }));
    onClose();
  };

  if (!show) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalWrapper onClick={(e) => e.stopPropagation()}>
        <ModalContent>
          <ModalHeader>메모</ModalHeader>
          <ModalSubtext>
            최대 5키워드, 한 키워드 당 8자까지 가능합니다.
          </ModalSubtext>
          {keywords.map((keyword, index) => (
            <KeywordContainer key={index}>
              <StyledDeleteButton
                src={DeleteImage}
                onClick={() => handleDeleteKeyword(index)}
              />
              <InputForm
                value={keyword}
                onChange={(e) => handleInputChange(e, index)}
              />
            </KeywordContainer>
          ))}
          <AddButton onClick={handleAddKeyword}>
            <AddButtonText>추가하기</AddButtonText>
          </AddButton>
        </ModalContent>
        <ConfirmButton onClick={handleClose}>
          <ConfirmText>확인</ConfirmText>
        </ConfirmButton>
      </ModalWrapper>
    </ModalOverlay>
  );
};

KeywordInputModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  setKeywords: PropTypes.func.isRequired,
  selectedPetId: PropTypes.string.isRequired,
};

export default KeywordInputModal;
