import PropTypes from "prop-types";
import { styled } from "styled-components";

const Container = styled.button`
  width: 64px;
  padding-right: 12px;
  box-sizing: content-box;
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
  width: 100%;
  margin-top: 4px;
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const MyPetListItem = ({ src, name, onClick }) => {
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
