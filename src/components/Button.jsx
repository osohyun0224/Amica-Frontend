import styled from "styled-components";
import PropTypes from "prop-types";

const StyledButton = styled.button`
  width: 304px;
  height: 48px;
  border-radius: 6px;
  cursor: pointer;
`;

const Button = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

Button.propTypes = {
  children: PropTypes.node,
};

export default Button;
