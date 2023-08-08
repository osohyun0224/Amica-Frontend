import { styled } from "styled-components";
import ProductType from "../ProductType";
import { useMemo } from "react";
import { categorys } from "../../librarys/data.js";

const Page = styled.div`
  /* width: 470px; */
  height: 125px;
  display: flex;
  flex-direction: row;
  border-top: 1px solid #eef1f4;
  border-bottom: 1px solid #eef1f4;
  margin-right: 10px;
  padding-top: 10px;
  cursor: pointer;
`;

const Image = styled.img`
  width: 105px;
  height: 105px;
  border-radius: 10px;
`;

const Detail = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 10px 30px 12px;
  color: rgba(21, 21, 21, 0.3);
`;

const Title = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  color: #151515;
`;

const Price = styled.p`
  font-size: 16px;
  font-weight: 700;
  line-height: 22px;
  color: #151515;
  margin: 20px 0 0 0;
`;

const RecommendList = ({ src, name, category, price, discount }) => {
  const categoryName = useMemo(() => {
    const result = categorys.find((item) => item.id === category);

    if (result) {
      return result.title;
    } else {
      return null;
    }
  }, [category]);

  return (
    <Page>
      <Image src={src} alt="상품이미지" />
      <Detail>
        <Title> {name} </Title>
        <ProductType type={categoryName} style={{ marginLeft: 0, bottom: 0 }} />
        <Price> {(discount || price).toLocaleString()}원 </Price>
      </Detail>
    </Page>
  );
};

export default RecommendList;
