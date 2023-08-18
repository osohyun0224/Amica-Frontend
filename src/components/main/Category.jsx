import PropTypes from "prop-types";
import { styled } from "styled-components";

import ScrollBar from "simplebar-react";
import { categorys } from "../../librarys/data";

import { ScrollContainer } from "react-indiana-drag-scroll";

const Container = styled(ScrollContainer)`
  padding: 8px 24px;
  display: flex;
  justify-content: space-between;
  gap: 12px;
`;

const Item = styled.button`
  padding: 4px 12px;
  border: none;
  border-radius: 8px;
  font-size: 11px;
  background: none;
  color: #667080;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  transition:
    background 0.2s,
    box-shadow 0.2s;

  &.select {
    background-color: rgba(217, 74, 86, 1);
    color: white;
  }

  &:hover {
    box-shadow: 0px 0px 6px #0000002f;
  }
`;

const Image = styled.img`
  width: 40px;
  height: 40px;
  object-fit: contain;
`;

const Text = styled.p``;

const Category = ({ value, onSelect }) => {
  return (
    <Container>
      {categorys.map((item) => (
        <Item
          key={item.id}
          className={item.id === value ? "select" : null}
          onClick={() => onSelect(item.id)}
        >
          <Image src={item.image} />
          <Text>{item.title}</Text>
        </Item>
      ))}
    </Container>
  );
};

Category.propTypes = {
  value: PropTypes.number,
  onSelect: PropTypes.func,
};

Category.defaultProps = {
  value: null,
  onSelect: () => {},
};

export default Category;
