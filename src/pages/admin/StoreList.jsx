import styled from "styled-components";
import ProductListItem from "../../components/ProductListItem.jsx";
import ProductExample from "../../assets/images/RecentImage.png";
import HeaderTitle from "../../components/HeaderTitle.jsx";

import SimpleBar from "simplebar-react";

import { getProductList } from "../../librarys/store-api.js";
import { useEffect, useState } from "react";
import { categorys } from "../../librarys/data.js";
import { useNavigate, useSearchParams } from "react-router-dom";

const Container = styled(SimpleBar)`
  display: flex;
  flex-direction: column;
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

function StoreList() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const to = searchParams.get("to");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getProductList();
      setProducts(data);
    })();
  }, []);

  return (
    <Container>
      <HeaderTitle url="/admin/store" title="공동구매 선택" />

      {products.map((item) => (
        <ProductListItem
          key={item.id}
          src={item.thumbnailImage}
          name={item.name}
          category={item.category}
          price={item.price}
          onClick={() => navigate(`/admin/store/${to}/${item.id}`)}
        />
      ))}
    </Container>
  );
}

export default StoreList;
