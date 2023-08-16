import styled from "styled-components";
import PropTypes from "prop-types";

import keywordImage from "../assets/images/add.svg";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  gap: 6px;
`;

const Type = styled.p`
  padding: 6px;
  border-radius: 5px;
  font-size: 11px;
  text-align: center;
  color: rgba(242, 179, 102, 1);
  background-color: rgba(252, 236, 217, 1);
`;

const AddButton = styled.img`
  width: 24px;
  height: 24px;
  border: 2px solid black;
  border-radius: 6px;
  filter: invert(97%) sepia(48%) saturate(7479%) hue-rotate(329deg)
    brightness(103%) contrast(90%);
  object-fit: contain;
  cursor: pointer;
`;

const ProductType = ({ type, showAdd, onClick, onAddClick, ...props }) => {
  return (
    <Container {...props}>
      {type?.map((item, index) => (
        <Type key={index} onClick={() => onClick(item)}>
          {item}
        </Type>
      ))}
      {showAdd ? (
        <AddButton src={keywordImage} alt="키워드 추가" onClick={onAddClick} />
      ) : null}
    </Container>
  );
};

ProductType.propTypes = {
  type: PropTypes.arrayOf(PropTypes.string),
  showAdd: PropTypes.bool,
  onClick: PropTypes.func,
  onAddClick: PropTypes.func,
};

ProductType.defaultProps = {
  type: [],
  showAdd: false,
};

export default ProductType;
