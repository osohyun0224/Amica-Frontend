import { useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { searchProduct } from "../../librarys/store-api";
import { useState } from "react";
import { useEffect } from "react";

import ProductListItem from "../../components/ProductListItem.jsx";

const Container = styled.div`
  width: 100%;
  font-size: 24px;
`;

const Text = styled.p`
  margin: 32px 0;
  text-align: center;
`;

const SearchPage = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("query");

  const [list, setList] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await searchProduct(searchQuery);

      if (data) {
        setList(data);
      }
    })();
  }, [searchQuery]);

  return (
    <Container>
      <Text>&quot;{searchQuery}&quot;에 대한 검색 결과입니다.</Text>
      {list.map((item) => (
        <ProductListItem
          key={item.id}
          name={item.name}
          price={item.price}
          discount={item.discount}
          src={item.thumbnailImage}
          category={item.category}
          onClick={() => navigate("/productDetail/" + item.id)}
        />
      ))}
    </Container>
  );
};

export default SearchPage;
