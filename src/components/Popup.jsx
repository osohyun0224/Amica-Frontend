import PropTypes from "prop-types";
import styled from "styled-components";
import XButton from "../assets/images/x.png";

const Overlay = styled.div`
  display: ${props => props.show ? 'block' : 'none'};
  position: absolute;  
  top: 0;
  left: 0;
  width: 100%; 
  height: 100%; 
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 2;
`;

const PopupBox = styled.div`
  display: ${props => props.show ? 'block' : 'none'};
  position: absolute;  
  bottom: 84px;
  width: 100%; 
  height: 250px; 
  margin-left: -50px;
  background-color: white;
  z-index: 3;
  padding: 20px;
  box-sizing: border-box; 
`;

const XButtonImage = styled.img`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;
const Popup = ({ showPopup, setShowPopup, children }) => {
  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <Overlay show={showPopup} onClick={closePopup} />
      <PopupBox show={showPopup}>
        <XButtonImage src={XButton} alt="Close" onClick={closePopup} /> 
        {children}
      </PopupBox>
    </>
  );
}

Popup.propTypes = {
  showPopup: PropTypes.bool.isRequired,
  setShowPopup: PropTypes.func.isRequired,
  children: PropTypes.node
};

export default Popup;