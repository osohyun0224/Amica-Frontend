import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
  max-height: 28px;
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

const ProductType = ({ type, ...props }) => {
  return (
    <Container {...props}>
      {type.map((item, index) => (
        <Type key={index}>{item}</Type>
      ))}
    </Container>
  );
};

ProductType.propTypes = {
  type: PropTypes.arrayOf(PropTypes.string),
};

export default ProductType;
