import PropTypes from "prop-types";
import { styled } from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 20px;
  margin: 10px 0;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  color: rgba(102, 112, 128, 1);
  font-size: 15px;
`;

const Icon = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 5px;
`;

const Text = styled.p`
  flex-grow: 1;
`;

const Price = styled.p`
  text-align: right;
`;

const ExpenseItem = ({ className, color = "#dfdfdf", name, price }) => {
  return (
    <Container className={className}>
      <Icon
        style={{
          backgroundColor: color,
          display: color === null ? "none" : "block",
        }}
      />
      <Text>{name}</Text>
      <Price>{price.toLocaleString()}원</Price>
    </Container>
  );
};

ExpenseItem.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
};

export default ExpenseItem;
