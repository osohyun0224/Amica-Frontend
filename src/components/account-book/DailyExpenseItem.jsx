import PropTypes from "prop-types";
import { styled } from "styled-components";

const Container = styled.div`
  width: 100%;
  margin: 4px 0;
  padding: 6px 4px;
  border-radius: 6px;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  color: rgba(21, 21, 21, 1);
  font-size: 15px;

  &.enabled {
    cursor: pointer;

    transition: background-color 0.2s;

    &:hover {
      background-color: #dfdfdf;
    }
  }
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

const DailyExpenseItem = ({
  color = "#dfdfdf",
  id,
  name,
  price,
  order,
  enabled,
  onClick,
  ...props
}) => {
  return (
    <Container
      className={enabled ? "enabled" : null}
      onClick={enabled ? () => onClick(id, order) : null}
      {...props}
    >
      <Icon
        style={{
          backgroundColor: color,
          display: color === null ? "none" : "block",
        }}
      />
      <Text>
        {name}
        {order ? " *" : ""}
      </Text>
      <Price>{price.toLocaleString()}원</Price>
    </Container>
  );
};

DailyExpenseItem.propTypes = {
  color: PropTypes.string,
  id: PropTypes.number,
  name: PropTypes.string,
  price: PropTypes.number,
  order: PropTypes.number,
  enabled: PropTypes.bool,
  onClick: PropTypes.func,
};

export default DailyExpenseItem;
