import PropTypes from "prop-types";
import { styled } from "styled-components";

import Modal from "../Modal.jsx";

import { hide, selectProps } from "../../redux/modalSlice.js";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { categorys } from "../../librarys/data.js";
import { useEffect } from "react";

const Container = styled.div`
  margin: 16px 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Title = styled.p`
  margin: 0 16px;
  margin-bottom: 24px;
  font-weight: 600;
  font-size: 20px;
  text-align: center;
`;

const Text = styled.p`
  margin: 0 16px;
  font-weight: 600;
  font-size: 16px;
`;

const ProductList = styled.div`
  width: 100%;
  min-height: 280px;
  display: flex;
  flex-direction: column;
`;

const Product = styled.div`
  padding: 12px 16px;
  border-top: 1.5px dashed rgba(102, 112, 128, 0.3);
  border-bottom: 1.5px dashed rgba(102, 112, 128, 0.3);

  display: flex;
  align-items: center;
  gap: 12px;
`;

const ProductTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  color: rgba(102, 112, 128, 1);

  gap: 8px;
`;

const ProductImage = styled.img``;

const ProductTitle = styled.p`
  font-size: 12px;
`;

const ProductInfo = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 15px;
`;

const ProductQuantity = styled.p``;

const ProductPrice = styled.p`
  text-align: right;
`;

const TotalContainer = styled.div`
  margin: 0 16px;
  display: flex;
  justify-content: space-between;
`;

const TotalQuantity = styled.p`
  font-weight: 500;
  font-size: 13px;
  color: rgba(102, 112, 128, 1);
`;

const TotalPrice = styled.p`
  text-align: right;
  color: rgba(21, 21, 21, 1);
  font-weight: 800;
  font-size: 22px;
`;

const CoverButton = styled.button`
  width: 100%;
  padding: 18px 0;
  border: none;
  font-size: 16px;
  color: #ffffff;
  background-color: rgba(217, 74, 86, 1);

  transition: background-color 0.2s;

  &:hover {
    background-color: rgba(217, 74, 86, 0.85);
  }

  cursor: pointer;
`;

const id = "view_expense";

const ViewExpenseModal = ({}) => {
  const dispatch = useDispatch();
  const [orderId, setOrderId] = useState("");
  const [list, setList] = useState([]);
  const modalProps = useSelector(selectProps(id));

  const totalPrice = list.reduce((result, item) => result + item.price, 0);

  useEffect(() => {
    if (modalProps !== undefined) {
      setOrderId(modalProps.orderId);
      setList(modalProps.list);
    }
  }, [modalProps]);

  return (
    <Modal id={id}>
      <Container>
        <Title>주문 번호 #{orderId}</Title>
        <Text>주문내역</Text>
        <ProductList>
          {list.map((item) => (
            <Product key={`${orderId}-${item.id}`}>
              <ProductImage src="https://placehold.co/64" />
              <ProductTextContainer>
                <ProductTitle>{item.name}</ProductTitle>
                <ProductInfo>
                  <ProductQuantity>{item.quantity}개</ProductQuantity>
                  <ProductPrice>{item.price.toLocaleString()}원</ProductPrice>
                </ProductInfo>
              </ProductTextContainer>
            </Product>
          ))}
        </ProductList>
        <TotalContainer>
          <TotalQuantity>총 상품 {list.length}개</TotalQuantity>
          <TotalPrice>{totalPrice.toLocaleString()}원</TotalPrice>
        </TotalContainer>
      </Container>
      <CoverButton onClick={() => dispatch(hide(id))}>확인</CoverButton>
    </Modal>
  );
};

ViewExpenseModal.propTypes = {};

export default ViewExpenseModal;
