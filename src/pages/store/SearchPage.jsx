import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  margin-top: 50%;
  text-align: center;
  font-size: 24px;
`;

const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("query");

  return (
    <Container>&quot;{searchQuery}&quot;에 대한 검색 결과입니다.</Container>
  );
};

export default SearchPage;
