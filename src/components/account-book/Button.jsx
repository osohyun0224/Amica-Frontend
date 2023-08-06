import PropTypes from "prop-types";

import { styled } from "styled-components";

const Btn = styled.button`
  width: 100%;
  margin-top: 12px;
  padding: 8px 0;
  border: none;
  border-radius: 6px;
  background-color: rgba(217, 74, 86, 1);
  color: #ffffff;
  font-size: 16px;
  cursor: pointer;

  &.outline {
    padding: 6px 0;
    background-color: #ffffff;
    border: 2px solid rgba(217, 74, 86, 1);
    color: rgba(217, 74, 86, 1);
  }
`;

const Button = ({ className, children, outline = false, onClick }) => {
  return (
    <Btn
      className={[className, outline ? "outline" : ""].join(" ")}
      onClick={onClick}
    >
      {children}
    </Btn>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  outline: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Button;
