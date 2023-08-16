import styled from "styled-components";
import PropTypes from "prop-types";

import { useContext } from "react";
import { StateContext } from "../../librarys/context.js";

import Pagination from "../Pagination.jsx";
import ProductListItem from "../ProductListItem.jsx";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

const Text = styled.p`
  width: 100%;
  margin: 8px 0;
  font-size: 18px;
  font-weight: 600;
`;

const Item = styled(ProductListItem)`
  padding: 12px 0;
`;

const MyPetOrderList = () => {
  const navigate = useNavigate();
  const { orderList } = useContext(StateContext);

  return (
    <Container>
      <Text>최근 구매한 제품</Text>
      {orderList.map((item) => (
        <Item
          key={item.id}
          src={item.product.thumbnailImage}
          name={item.product.name}
          category={item.product.category}
          price={item.price}
          onClick={() => navigate("/productDetail/" + item.product.id)}
        />
      ))}
      {/* <Pagination /> TODO....*/}
    </Container>
  );
};

MyPetOrderList.propTypes = {};

export default MyPetOrderList;
