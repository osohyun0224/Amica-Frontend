import PropTypes from "prop-types";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import RightArrowImage from "../assets/images/Page-right.png";

const Container = styled.div`
  padding: 18px 24px;
  border-top: 2px solid #eef1f4;
  display: flex;
  align-items: center;
  color: rgba(102, 112, 128, 1);

  cursor: pointer;

  transition: background-color 0.2s;

  &:last-child {
    border-bottom: 2px solid #eef1f4;
  }

  &:hover {
    background-color: rgba(248, 248, 248, 1);
  }
`;

const Text = styled.p`
  flex-grow: 1;
  font-size: 16px;
`;

const Image = styled.img`
  width: 36px;
  height: 32px;
  object-fit: contain;
`;

const MenuItem = ({ title, to, ...props }) => {
  const navigate = useNavigate();
  return (
    <Container {...props} onClick={() => navigate(to)}>
      <Text>{title}</Text>
      <Image src={RightArrowImage} alt="Go" />
    </Container>
  );
};

MenuItem.propTypes = {
  title: PropTypes.string,
  to: PropTypes.string,
};

MenuItem.defaultProps = {
  title: "",
  to: "/main",
};

export default MenuItem;
