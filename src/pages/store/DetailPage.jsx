import { useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { getProductList, searchProduct } from "../../librarys/store-api";
import { useMemo, useState } from "react";
import { useEffect } from "react";

import Category from "../../components/main/Category.jsx";

import ProductListItem from "../../components/ProductListItem.jsx";
import dayjs from "dayjs";

const Container = styled.div`
  width: 100%;
  padding-bottom: 32px;
`;

const Title = styled.p`
  margin: 32px 0;
  text-align: center;
  font-size: 24px;
`;

const TextContainer = styled.div`
  margin: 12px 24px;
  margin-top: 32px;
  display: flex;
  gap: 4px;
  align-items: center;
`;

const Text = styled.p`
  font-size: 16px;
  font-weight: 700;
  flex-grow: 1;
`;

const Sort = styled.button`
  border: none;
  background: none;
  color: rgba(102, 112, 128, 0.5);
  font-size: 12px;
  font-weight: 400;
  cursor: pointer;

  &:hover {
    color: rgba(102, 112, 128, 0.8);
  }

  &.select {
    color: rgba(106, 200, 48, 1);
  }
`;

const sortList = [
  {
    id: "popular",
    name: "인기순",
    func: (a, b) => b.users - a.users,
  },
  {
    id: "recent",
    name: "최신순",
    func: (a, b) => b.id - a.id, // 높은 id = 최근 항목
  },
  {
    id: "low-price",
    name: "낮은 가격순",
    func: (a, b) => a.price - b.price,
  },
  {
    id: "high-price",
    name: "높은 가격순",
    func: (a, b) => b.price - a.price,
  },
  {
    id: "deadline",
    name: "마감 임박순",
    func: (a, b) => dayjs(a.endDate) - dayjs(b.endDate),
  },
];

const FilterPage = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("search");
  const filterQuery = searchParams.get("filter");
  const sortQuery = searchParams.get("sort");
  const [category, setCategory] = useState(null);
  const [sort, setSort] = useState(null);
  const [search, setSearch] = useState(null);
  const [products, setProducts] = useState([]);

  const productList = useMemo(
    () =>
      products
        .filter(
          (item) =>
            (item.name.includes(search) || search === null) &&
            (item.category === category || category === null),
        )
        .sort(sortList.find((item) => item.id === sort)?.func || ((a, b) => 0)),
    [products, category, sort, search],
  );

  useEffect(() => {
    if (searchQuery) {
      setSearch(searchQuery);
    }
  }, [searchQuery]);

  useEffect(() => {
    if (sortQuery) {
      setCategory(Number(sortQuery));
    }
  }, [sortQuery]);

  useEffect(() => {
    if (filterQuery) {
      setCategory(Number(filterQuery));
    }
  }, [filterQuery]);

  useEffect(() => {
    (async () => {
      const data = await getProductList();

      if (data) {
        setProducts(data);
      }
    })();
  }, []);

  function selectCategory(id) {
    setCategory(category === id ? null : id);
  }

  function selectSort(id) {
    setSort(sort === id ? null : id);
  }

  return (
    <Container>
      {search ? <Title>{search}의 검색 결과입니다.</Title> : null}

      <Category value={category} onSelect={selectCategory} />
      <TextContainer>
        <Text>마감 임박!</Text>
        {sortList.map((item) => (
          <Sort
            key={item.id}
            className={item.id === sort ? "select" : null}
            onClick={() => selectSort(item.id)}
          >
            {item.name}
          </Sort>
        ))}
      </TextContainer>

      {productList.map((item) => (
        <ProductListItem
          key={item.id}
          src={item.thumbnailImage}
          name={item.name}
          category={item.category}
          price={item.price}
          onClick={() => navigate(`/productDetail/${item.id}`)}
        />
      ))}
    </Container>
  );
};

export default FilterPage;
