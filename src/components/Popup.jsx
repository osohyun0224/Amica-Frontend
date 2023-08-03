//언젠간 쓰겠죠.. 일단 남겨둡니다
import PropTypes from "prop-types";
import XButton from "../assets/images/x.png";
import styled from "styled-components";

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 2;
  display: ${(props) => (props.show ? 'block' : 'none')};
`;

const PopupBox = styled.div`
  position: absolute;
  bottom: 84px;
  width: 100%;
  height: 250px;
  background-color: white;
  z-index: 3;
  padding: 20px;
  box-sizing: border-box;
  margin-left: -50px;
  display: ${(props) => (props.show ? 'block' : 'none')};
`;

const XButtonImage = styled.img`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;

const Popup = ({ showPopup, handleClose, children }) => {
  return (
    <>
      <Overlay show={showPopup} onClick={handleClose} />
      <PopupBox show={showPopup}>
        <XButtonImage src={XButton} alt="Close" onClick={handleClose} /> 
        {children}
      </PopupBox>
    </>
  );
}

Popup.propTypes = {
  showPopup: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  children: PropTypes.node
};

export default Popup;
