import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { ScrollContainer } from "react-indiana-drag-scroll";
import "react-indiana-drag-scroll/dist/style.css";

//import ProductType from "../components/ProductType";
import CategoryList from "../components/main/CategoryList";
import DeadlineProduct from "../components/main/DeadlineList";
import RecommemdProduct from "../components/main/RecommendList";

import Arrow from "../assets/images/rightArrow.png";
//import ProductExample from "../assets/images/productExample.jpeg";
import AddPet from "../assets/images/add.png";

import { getFeaturedProduct } from "../librarys/store-api";
import { useEffect } from "react";

import Snack from "../assets/images/category/간식.svg";
import Beauty from "../assets/images/category/미용.svg";
import Daily from "../assets/images/category/생활용품.svg";
import Clothes from "../assets/images/category/의류.svg";
import Toy from "../assets/images/category/장난감.svg";
import Medicine from "../assets/images/category/의약품.svg";

const PageContainer = styled.div`
  display: block;
  flex-direction: column;
  justify-content: center;
  background-color: #ffffff;
`;

const Image = styled.img`
  width: 100%;
  height: 18vh;
  background: #eef1f4;
  margin-top: 10px;
  border: none;
`;

const PetRecommend = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 10vh;
  padding-left: 20px;
  align-items: center;
`;

const PetImage = styled.img`
  width: 44px;
  height: 44px;
  background-color: #d9d9d9;
  border: 1px solid #d9d9d9;
  border-radius: 32px;
`;

const PetName = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: #151515;
  line-height: 22px;
  letter-spacing: -0.02em;
  margin-left: 10px;
`;

const MovePetPage = styled(Link)`
  margin: auto;
  margin-right: 0;
`;

const PetAddBtn = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 20px;
  cursor: pointer;
`;

const Menu = styled.div`
  width: 60px;
  height: 60px;
  font-size: 11px;
  color: #667080;
  background-image: ${(props) => `url(${props.image})`};
  background-size: 50%;
  background-repeat: no-repeat;
  background-position: 15px top;
  background-color: #ffffff;
  margin: 15px 15px 0 0;
  padding-bottom: 8px;
  justify-content: center;
  align-items: end;
  display: flex;
  float: left;
  cursor: pointer;
  border: ${(props) => (props.selected ? "2px solid #667080" : "none")};
`;

const DetailMenu = styled.div`
  background-color: white;
  clear: both;
  margin: 30px 0 0 17px;
  text-decoration: none;
`;

const DetailMenuTitle = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 25px 20px 0;
`;

const NextBtn = styled.img`
  width: 10px;
  height: 15px;
  margin: auto;
  margin-right: 0px;
  cursor: pointer;
`;

const DeadLineList = styled(ScrollContainer)`
  display: flex;
  flex-direction: row;
`;

const RecommendList = styled(ScrollContainer)`
  display: flex;
  flex-direction: column;
`;
const ProductItem = styled(ScrollContainer)`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 16px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: -0.02em;
  margin-left: 5px;
`;

const MoreBtn = styled.button`
  width: 100%;
  height: 80px;
  border: none;
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
  text-align: center;
  margin-top: 10px;
  background-color: white;
  cursor: pointer;
`;

const ProductSelect = styled(Link)`
  text-decoration: none;
`;

const Categories = [
  { id: 1001, name: "snack", text: "간식", image: Snack },
  { id: 1006, name: "daliy", text: "생활용품", image: Daily },
  { id: 1003, name: "clothes", text: "의류", image: Clothes },
  { id: 1004, name: "medicine", text: "의약품", image: Medicine },
  { id: 1002, name: "beauty", text: "미용", image: Beauty },
  { id: 1005, name: "toy", text: "장난감", image: Toy },
];

const Main = () => {
  const [productList, setProductList] = useState([]);
  const [deadlineItems, setDeadlineItems] = useState([]);
  const [recentItems, setRecentItems] = useState([]);
  const [popularItems, setPopularItems] = useState([]);
  const [categoryId, setCategoryId] = useState();

  const filteredProducts =
    categoryId !== undefined
      ? productList.filter((product) => product.category === categoryId)
      : productList;

  const recentFilteredProducts =
    categoryId !== undefined
      ? recentItems.filter((product) => product.category === categoryId)
      : recentItems;

  useEffect(() => {
    (async () => {
      const data = await getFeaturedProduct();
      setDeadlineItems(data.deadlineItems);
      setRecentItems(data.recentItems);
      setPopularItems(data.popularItems);
    })();
  }, []);

  useEffect(() => {
    if (categoryId !== undefined) {
      (async () => {
        const products = await getFeaturedProduct(categoryId);
        setProductList(Array.isArray(products) ? products : []);
      })();
    }
  }, [categoryId]);

  ///
  // 카테고리 ID와 상품 목록의 현재 상태를 로깅
  useEffect(() => {
    console.log("Current category ID:", categoryId);
    console.log("Recent items:", recentItems);
    console.log("Filtered recent items:", recentFilteredProducts);
  }, [categoryId, recentItems, recentFilteredProducts]);

  // 카테고리 선택시 로깅
  const handleCategoryClick = (id) => {
    console.log("Category clicked:", id);
    setCategoryId(id);
  };
  ///
  useEffect(() => {
    console.log("First recent item:", recentItems[0]);
  }, [recentItems]);

  return (
    <PageContainer>
      <Image />
      <PetRecommend>
        <PetImage />
        <PetName> 누굴 위해 준비하니? </PetName>
        <MovePetPage to={"/my-pet"}>
          <PetAddBtn src={AddPet} />
        </MovePetPage>
      </PetRecommend>
      <CategoryList>
        {Categories.map((cate) => (
          <Menu
            key={cate.id}
            onClick={() => handleCategoryClick(cate.id)}
            image={cate.image}
            selected={cate.id === categoryId}
          >
            {cate.text}
          </Menu>
        ))}
      </CategoryList>
      <productList>
        {filteredProducts.map((product, index) => (
          <ProductItem key={index} product={product} />
        ))}
      </productList>
      <DetailMenu>
        <DetailMenuTitle>
          <Title> 마감 임박! </Title>
        </DetailMenuTitle>
        <DeadLineList>
          {deadlineItems.map((item) => (
            <ProductSelect key={item.id} to={`/productDetail/${item.id}`}>
              <DeadlineProduct
                name={item.name}
                category={item.category}
                price={item.price}
                discount={item.discount}
                end={item.endDate}
                src={item.thumbnailImage}
                tag={item.tag}
              />
            </ProductSelect>
          ))}
        </DeadLineList>
      </DetailMenu>
      <DetailMenu>
        <DetailMenuTitle>
          <Title> 최근 등록된 상품 </Title>
          <NextBtn src={Arrow} alt="자세히보기" />
        </DetailMenuTitle>
        <RecommendList>
          {recentFilteredProducts.map((item) => (
            <ProductSelect key={item.id} to={`/productDetail/${item.id}`}>
              <RecommemdProduct
                name={item.name}
                category={item.category}
                price={item.price}
                discount={item.discount}
                src={item.thumbnailImage}
              />
            </ProductSelect>
          ))}
        </RecommendList>
      </DetailMenu>
      <DetailMenu>
        <DetailMenuTitle>
          <Title> 요즘 집사들 필수 아이템! 인기만점 </Title>
        </DetailMenuTitle>
        <DeadLineList>
          {popularItems.map((item) => (
            <ProductSelect key={item.id} to={`/productDetail/${item.id}`}>
              <DeadlineProduct
                name={item.name}
                category={item.category}
                price={item.price}
                discount={item.discount}
                end={item.endDate}
                src={item.thumbnailImage}
                tag={item.tag}
              />
            </ProductSelect>
          ))}
        </DeadLineList>
      </DetailMenu>
      <MoreBtn> 더보기 </MoreBtn>
    </PageContainer>
  );
};

export default Main;
