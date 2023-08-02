import PropTypes from "prop-types";
import { styled } from "styled-components";
import { useMemo } from "react";

const Container = styled.button`
  padding-right: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
`;

const Image = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: #cfcfcf;
`;

const Text = styled.p`
  margin-top: 4px;
  font-size: 14px;
`;

const MyPetListItem = ({ src, name, onClick }) => {
  console.log(1);
  return (
    <Container onClick={onClick}>
      <Image src={src} />
      <Text>{name}</Text>
    </Container>
  );
};

MyPetListItem.propTypes = {
  src: PropTypes.string,
  name: PropTypes.string,
  onClick: PropTypes.func,
};

export default MyPetListItem;
