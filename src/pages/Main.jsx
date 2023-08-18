import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import petList from "../librarys/pet-api.js";
import { ScrollContainer } from "react-indiana-drag-scroll";

//import ProductType from "../components/ProductType";
import CategoryList from "../components/main/Category.jsx";
import DeadlineProduct from "../components/main/DeadlineList";
import RecommemdProduct from "../components/main/RecommendList";

import Arrow from "../assets/images/rightArrow.png";
//import ProductExample from "../assets/images/productExample.jpeg";
import AddPet from "../assets/images/add.png";
import DownArrow from "../assets/images/downArrow.png";
import Who from "../assets/images/whoare.png";

import { getFeaturedProduct } from "../librarys/store-api";
import { useEffect } from "react";

// 배너 예시 이미지 나중에 배너 이미지 나오면 갈아끼울 예정
import Banner1 from "../assets/images/main-banner/Banner1.webp";
import Banner2 from "../assets/images/main-banner/Banner2.webp";
import Banner3 from "../assets/images/main-banner/Banner3.webp";

const PageContainer = styled.div`
  display: block;
  flex-direction: column;
  justify-content: center;
  background-color: #ffffff;
`;

const Image = styled.img`
  width: 100%;
  max-height: 200px;
  background: #eef1f4;
  margin-top: 10px;
  border: none;
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
  margin: 0 5px 0 7px;
`;

const PetRecommend = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 10vh;
  padding: 0 20px;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

const PetAddBtn = styled.img`
  width: ${(props) => (props.isDownArrow ? "16px" : "24px")};
  height: ${(props) => (props.isDownArrow ? "10px" : "24px")};
  cursor: pointer;
  margin: auto;
  margin-right: 0;
`;

const DetailMenu = styled.div`
  background-color: white;
  clear: both;
  margin: 25px 17px 0 17px;
  text-decoration: none;
`;

const DetailMenuTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 10px 15px 0;
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
  margin: 0 7px;
`;

const ProductSelect = styled(Link)`
  text-decoration: none;
`;

const BannerContainer = styled.div`
  position: relative;
  overflow: hidden;
  margin-top: -10px;
`;

const BannerButton = styled.button`
  position: absolute;
  top: 50%;
  ${(props) => (props.direction === "left" ? "left: 10px;" : "right: 10px;")}
  background: rgba(0,0,0,0);
  color: rgba(217, 74, 86, 1);
  font-weight: 800;
  font-size: 20px;
  border: none;
  cursor: pointer;
  z-index: 10;
`;

const PetDropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100vw;
  max-width: 500px;
  max-height: 200px;
  overflow-y: auto;
  background-color: white;
  border-radius: 5px;
  z-index: 100;
  padding: 8px 8px 8px 16px;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
`;

const PetItem = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 0;
  cursor: pointer;

  &:hover {
    background-color: #f6f6f6;
  }

  img {
    width: 40px;
    height: 40px;
    border-radius: 20px;
    margin-right: 12px;
  }
`;

const NotFoundText = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: #151515;
  line-height: 22px;
  letter-spacing: -0.02em;
  margin-left: 37%;
`;

const Main = () => {
  const [productList, setProductList] = useState([]);
  const [deadlineItems, setDeadlineItems] = useState([]);
  const [recentItems, setRecentItems] = useState([]);
  const [popularItems, setPopularItems] = useState([]);
  const [categoryId, setCategoryId] = useState();
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [selectedPet, setSelectedPet] = useState(null);
  const [setIsDropdownOpen] = useState(false);
  // 사용자 펫 선택 시 카테고리 + 태그 필터링화 되는 상태 => 마감 임박
  const [filteredDeadlineItems, setFilteredDeadlineItems] = useState([]);
  // 사용자 펫 선택 시 카테고리 + 태그 필터링화 되는 상태 => 인기 만점
  const [filteredPopularItems, setFilteredPopularItems] = useState([]);

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
      const data = await getFeaturedProduct(categoryId);
      setDeadlineItems(data.deadlineItems);
      setRecentItems(data.recentItems);
      setPopularItems(data.popularItems);
    })();
  }, [categoryId]);

  useEffect(() => {
    if (categoryId !== undefined) {
      (async () => {
        const products = await getFeaturedProduct(categoryId);
        setProductList(Array.isArray(products) ? products : []);
      })();
    } else {
      // 카테고리가 선택되지 않았다면 전체 상품 목록을 불러오도록 해놓은 함수임
      (async () => {
        const products = await getFeaturedProduct();
        setProductList(Array.isArray(products) ? products : []);
      })();
    }
  }, [categoryId]);

  useEffect(() => {
    // 선택된 펫에 따라 "마감임박" 물품 목록 필터링화
    if (selectedPet) {
      const matchingItems = deadlineItems.filter((item) =>
        selectedPet.tags.some((tag) => item.tag.includes(tag)),
      );
      setFilteredDeadlineItems(matchingItems);
    } else {
      setFilteredDeadlineItems(deadlineItems);
    }
  }, [selectedPet, deadlineItems]);

  useEffect(() => {
    // 선택된 펫에 따라 "인기 만점" 물품 목록 필터링화
    if (selectedPet) {
      const matchingItems = popularItems.filter((item) =>
        selectedPet.tags.some((tag) => item.tag.includes(tag)),
      );
      setFilteredPopularItems(matchingItems);
    } else {
      setFilteredPopularItems(popularItems);
    }
  }, [selectedPet, popularItems]);

  // 카테고리 선택시 로깅찍어보는 것
  const handleCategoryClick = (id) => {
    setCategoryId(id);
  };

  // 배너 구현 함수
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
  const bannerImages = [Banner1, Banner2, Banner3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBannerIndex(
        (prevIndex) => (prevIndex + 1) % bannerImages.length,
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [bannerImages.length]);

  const handleBannerButtonClick = (direction) => {
    if (direction === "left") {
      setCurrentBannerIndex((prevIndex) =>
        prevIndex === 0 ? bannerImages.length - 1 : prevIndex - 1,
      );
    } else {
      setCurrentBannerIndex(
        (prevIndex) => (prevIndex + 1) % bannerImages.length,
      );
    }
  };

  return (
    <PageContainer>
      <BannerContainer>
        <Image src={bannerImages[currentBannerIndex]} alt="Banner Image" />
        <BannerButton
          direction="left"
          onClick={() => handleBannerButtonClick("left")}
        >
          {"<"}
        </BannerButton>
        <BannerButton
          direction="right"
          onClick={() => handleBannerButtonClick("right")}
        >
          {">"}
        </BannerButton>
      </BannerContainer>
      <PetRecommend>
        <PetImage
          src={selectedPet ? selectedPet.image : Who}
          alt={selectedPet ? selectedPet.name : "Pet Image"}
        />
        {selectedPet ? (
          <>
            <PetName> {selectedPet.name} </PetName>
            위해 준비했어요
          </>
        ) : (
          <PetName> 누굴 위해 준비하니? </PetName>
        )}
        <PetAddBtn
          isDownArrow={isDropdownVisible || selectedPet}
          src={isDropdownVisible || selectedPet ? DownArrow : AddPet}
          onClick={() => setDropdownVisible(!isDropdownVisible)}
        />
        {isDropdownVisible && (
          <PetDropdown>
            {petList.map((pet) => (
              <PetItem
                key={pet.id}
                onClick={() => {
                  console.log(pet.name);
                  setSelectedPet(pet);
                  setDropdownVisible(false);
                  setIsDropdownOpen(false);
                }}
              >
                <img src={pet.image} alt={pet.name} />
                {pet.name}
              </PetItem>
            ))}
          </PetDropdown>
        )}
      </PetRecommend>
      <CategoryList value={categoryId} onSelect={handleCategoryClick} />
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
          {filteredDeadlineItems.length > 0 ? (
            filteredDeadlineItems.map((item) => (
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
            ))
          ) : (
            <NotFoundText>상품이 없어요</NotFoundText>
          )}
        </DeadLineList>
      </DetailMenu>
      <DetailMenu>
        <DetailMenuTitle>
          {selectedPet ? (
            <>
              <Title> {selectedPet.name} </Title>
              위해 준비했어요
            </>
          ) : (
            <Title> 최근 등록된 상품 </Title>
          )}
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
          <Title> 요즘 집사들 필수 아이템! 인기 만점 </Title>
        </DetailMenuTitle>
        <DeadLineList>
        {filteredPopularItems.length > 0 ? (
            filteredPopularItems.map((item) => (
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
            ))
            ) : (
              <NotFoundText>상품이 없어요</NotFoundText>
            )}
          </DeadLineList>
        </DetailMenu>
    </PageContainer>
  );
};

export default Main;
