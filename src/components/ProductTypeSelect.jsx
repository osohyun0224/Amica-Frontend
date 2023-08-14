import styled from "styled-components";
import PropTypes from "prop-types";
import { useState } from "react";
import { useEffect } from "react";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  gap: 6px;
`;

const Type = styled.p`
  max-width: 120px;
  padding: 6px;
  border-radius: 5px;
  font-size: 11px;
  text-align: center;
  color: rgba(21, 21, 21, 0.5);
  background-color: rgba(21, 21, 21, 0.15);
  cursor: pointer;

  flex-grow: 1;

  &.select {
    box-shadow: 0px 0px 0px 0.75px rgba(242, 211, 53, 1) inset;
    color: rgba(242, 179, 102, 1);
    background-color: rgba(252, 236, 217, 1);
  }
`;

const ProductTypeSelect = ({ types = [], value, onSelect, ...props }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  function toggleItem(item) {
    if (selectedItems.includes(item)) {
      changeItem(selectedItems.filter((element) => element !== item));
    } else if (selectedItems.length < 5) {
      changeItem([item, ...selectedItems]);
    }
  }

  function changeItem(list) {
    setSelectedItems(list);
    onSelect(list);
  }

  useEffect(() => {
    if (value) {
      setSelectedItems(value);
    }
  }, [value]);

  return (
    <Container {...props}>
      {types.map((item) => (
        <Type
          key={item.id}
          className={selectedItems.includes(item.id) ? "select" : null}
          onClick={() => toggleItem(item.id)}
        >
          {item.title}
        </Type>
      ))}
    </Container>
  );
};

ProductTypeSelect.propTypes = {
  types: PropTypes.arrayOf(PropTypes.object),
  value: PropTypes.arrayOf(PropTypes.number),
  onSelect: PropTypes.func,
};

export default ProductTypeSelect;
