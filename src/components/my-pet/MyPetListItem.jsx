import PropTypes from "prop-types";
import { useContext } from "react";
import { styled } from "styled-components";
import { StateContext } from "../../librarys/context";

const Container = styled.button`
  width: 70px;
  margin: 0 4px;
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
  border: 2px solid ${(props) => (props.selected ? "#D94A56" : "transparent")};
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

const MyPetListItem = ({ id, src, name, onClick }) => {
  const { pet } = useContext(StateContext);
  return (
    <Container onClick={onClick}>
      <Image src={src} selected={pet?.id === id} />
      <Text>{name}</Text>
    </Container>
  );
};

MyPetListItem.propTypes = {
  id: PropTypes.number,
  src: PropTypes.string,
  name: PropTypes.string,
  onClick: PropTypes.func,
};

export default MyPetListItem;
