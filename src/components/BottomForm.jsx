import styled from "styled-components";
import { Link } from "react-router-dom";

const BottomBox = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 84px;
  background-color: #667080;
  color: white;
  text-align: center;
  position: absolute;
  bottom: 0;
  text-decoration: none;
  margin-left: -50px;
  opacity: ${(props) => (props.active ? "1" : "0.5")};
  pointer-events: ${(props) => (props.active ? "auto" : "none")};
`;


function BottomForm() {

  return(
    <BottomBox
        to="/compelete"
      >
        다음
      </BottomBox>
  )
  }

  export default BottomForm;