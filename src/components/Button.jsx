import styled from "styled-components";
import PropTypes from "prop-types";

const StyledButton = styled.button`
  width: 304px;
  height: 48px;
  border-radius: 6px;
  box-shadow: 0px 4px 4px 0px #00000040;
  cursor: pointer;
`;

const Button = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

Button.propTypes = {
  children: PropTypes.node,
};

export default Button;
