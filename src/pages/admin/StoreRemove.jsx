import styled from "styled-components";
import HeaderTitle from "../../components/HeaderTitle.jsx";

import SimpleBar from "simplebar-react";

import { getProduct, getProductList } from "../../librarys/store-api.js";
import { useEffect, useState } from "react";
import { categorys } from "../../librarys/data.js";
import { useNavigate, useParams } from "react-router-dom";
import ProductListItem from "../../components/ProductListItem.jsx";
import Button from "../../components/account-book/Button.jsx";

const Container = styled(SimpleBar)`
  width: 100%;
  height: 100%;
  overflow: auto;

  &.freeze > .simplebar-track {
    display: none;
  }

  & > .simplebar-track.simplebar-horizontal {
    height: 7px;
  }

  & > .simplebar-track.simplebar-vertical {
    width: 7px;
  }

  & .simplebar-mask {
    z-index: auto;
  }
`;

const ProductList = styled.div`
  margin: 32px 0;
`;

const Form = styled.div`
  margin: 0 24px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.p`
  text-align: center;
  font-weight: 600;
  font-size: 20px;
`;

const Text = styled.p`
  margin-top: 8px;
  margin-bottom: 64px;
  text-align: center;
  font-weight: 500;
  font-size: 16px;
`;

function StoreRemove() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    (async () => {
      const data = await getProduct(id);
      setProduct(data);
    })();
  }, [id]);

  return (
    <Container>
      <HeaderTitle url="/admin/store" title="공동구매 삭제" />
      <ProductList>
        {product ? (
          <ProductListItem
            src={product.thumbnailImage}
            name={product.name}
            category={product.category}
            price={product.price}
          />
        ) : null}
      </ProductList>

      <Form>
        <Title>본 상품을 삭제하려고 합니다. 계속하시겠습니까?</Title>
        <Text>한번 삭제한 상품은 복원할 수 없습니다.</Text>
        <Button>삭제합니다.</Button>
      </Form>
    </Container>
  );
}

export default StoreRemove;
