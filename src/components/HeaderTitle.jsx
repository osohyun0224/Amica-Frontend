import styled from "styled-components";
import PropTypes from "prop-types";

import BackButton from "../assets/images/getback.png";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  padding: 24px 12px;
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  width: 36px;
  height: 36px;
  object-fit: contain;
  cursor: pointer;
`;

const Title = styled.p`
  margin-right: 36px;
  flex-grow: 1;
  text-align: center;
  font-size: 20px;
  font-weight: 700;
`;

const HeaderTitle = ({ url, title }) => {
  const navigate = useNavigate();
  return (
    <Container>
      <Image onClick={() => navigate(url)} src={BackButton} />
      <Title>{title}</Title>
    </Container>
  );
};

HeaderTitle.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
};

HeaderTitle.defaultProps = {
  url: "/main",
  title: "",
};

export default HeaderTitle;
