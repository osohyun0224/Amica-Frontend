import styled from "styled-components";
import ProductType from "./NewProductType.jsx";
import PropTypes from "prop-types";

import { categorys, petTags } from "../librarys/data.js";
import { useEffect } from "react";
import { useState } from "react";

const Container = styled.div`
  width: 100%;
  padding: 12px 24px;
  display: flex;
  border-top: 1px solid rgba(238, 241, 244, 1);
  cursor: pointer;
  gap: 12px;

  overflow: hidden;

  &:last-of-type {
    border-bottom: 1px solid rgba(238, 241, 244, 1);
  }
`;

const Image = styled.img`
  width: 96px;
  height: 96px;
  border-radius: 10px;
`;

const Info = styled.div`
  display: flex;
  flex-grow: 1;
  flex-shrink: 1;
  flex-direction: column;
  gap: 6px;

  color: rgba(21, 21, 21, 1);
`;

const Title = styled.p`
  font-family: Nanum Gothic;
  font-size: 14px;
  font-weight: 400;
`;

const Price = styled.p`
  flex-grow: 1;
  display: flex;
  align-items: flex-end;
  font-size: 16px;
  font-weight: 700;
`;

const ProductListItem = ({ src, name, category, price, ...props }) => {
  const [type, setType] = useState("");

  useEffect(() => {
    const find = categorys.find((item) => item.id === category);
    setType(find ? find.title : category);
  }, [category]);

  return (
    <Container {...props}>
      <Image src={src} alt="상품이미지" />
      <Info>
        <Title>{name}</Title>
        <ProductType style={{ maxHeight: "28px" }} type={[type]} />
        <Price>{price?.toLocaleString() || "-"}원</Price>
      </Info>
    </Container>
  );
};

ProductListItem.propTypes = {
  src: PropTypes.string,
  name: PropTypes.string,
  category: PropTypes.string,
  price: PropTypes.number,
};

export default ProductListItem;
