import { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

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

const Keywords = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
  margin-left: 10px;
`;

const Keyword = styled.div`
  font-family: Nanum Gothic;
  font-size: 12px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: -0.02em;
  text-align: center;
  width: fit-content;
  height: 26px;
  padding: 2px 6px;
  border-radius: 5px;
  background: ${(props) =>
    props.selected
      ? "linear-gradient(0deg, #F2D335, #F2D335), linear-gradient(0deg, rgba(242, 211, 53, 0.15), rgba(242, 211, 53, 0.15))"
      : "#15151526"};
  border: ${(props) => (props.selected ? "1px solid #F2D335" : "none")};
  cursor: pointer;
  color: black;
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
  const [selectedKeywords, setSelectedKeywords] = useState([]);
  const keywordsList = [
    "뚱냥이",
    "코리안 숏헤어",
    "잇몸이 약함",
    "구토 자주함",
    "골골송 많이 함",
    "장난감 좋아함",
    "식탐이 많음",
    "온순함",
  ];

  const toggleKeywordSelection = (keyword) => {
    if (selectedKeywords.includes(keyword)) {
      setSelectedKeywords(selectedKeywords.filter((kw) => kw !== keyword));
    } else {
      if (selectedKeywords.length < 5) {
        setSelectedKeywords([...selectedKeywords, keyword]);
      }
    }
  };

  const handleClose = () => {
    setKeywords((prevKeywords) => ({
      ...prevKeywords,
      [selectedPetId]: selectedKeywords,
    }));
    onClose();
  };

  if (!show) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalWrapper onClick={(e) => e.stopPropagation()}>
        <ModalContent>
          <ModalHeader>메모</ModalHeader>
          <ModalSubtext>최대 5키워드까지 가능합니다.</ModalSubtext>
          <Keywords>
            {keywordsList.map((keyword, index) => (
              <Keyword
                key={index}
                selected={selectedKeywords.includes(keyword)}
                onClick={() => toggleKeywordSelection(keyword)}
              >
                {keyword}
              </Keyword>
            ))}
          </Keywords>
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
  selectedPetId: PropTypes.number,
};

export default KeywordInputModal;
