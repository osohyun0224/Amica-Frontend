import styled from 'styled-components';
import PropTypes from 'prop-types';



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
`;

const ModalWrapper = styled.div`
  width: 321px;
  height: 469px;
  position: relative;
  border-radius: 5px;
  background: #FFFFFF;
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

const ImageBox = styled.div`
  width: 118px;
  height: 118px;
  position: absolute;
  top: 222px;
  left: 135px;
  padding: 2px 6px 2px 6px;
  border-radius: 5px;
  border: 1px solid #F2D335;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;


const MyPetInputModal = ({ show, onClose }) => {
  if (!show) return null;
  

  return (
    <ModalOverlay onClick={onClose}>
      <ModalWrapper onClick={e => e.stopPropagation()}>
        <ModalHeader>추가하기</ModalHeader>
        <ImageBox>
          <input type="file" accept="image/*" />
        </ImageBox>
      </ModalWrapper>
    </ModalOverlay>
  );
};


MyPetInputModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default MyPetInputModal;
