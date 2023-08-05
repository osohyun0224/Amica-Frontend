import PropTypes from "prop-types";
import { styled } from "styled-components";

const Container = styled.button`
  width: 70px;
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

const ImageWrapper = styled.div`
  width: 69px;
  height: 69px;
  border-radius: 50%;
  margin-top:10px;
  margin-left:10px;
  border: ${props => props.selected ? '2.6px solid #D94A56' : 'none'};
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

const MyPetListItem = ({ id, selectedId, src, name, onClick }) => {
  return (
    <Container onClick={onClick}>
      <ImageWrapper selected={id === selectedId}>
        <Image src={src} />
      </ImageWrapper>
      <Text>{name}</Text>
    </Container>
  );
};

MyPetListItem.propTypes = {
  id: PropTypes.number,
  selectedId: PropTypes.number,
  src: PropTypes.string,
  name: PropTypes.string,
  onClick: PropTypes.func,
};

export default MyPetListItem;
