import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import petList from "../librarys/pet-api.js";
import { ScrollContainer } from "react-indiana-drag-scroll";

//import ProductType from "../components/ProductType";
import CategoryList from "../components/main/CategoryList";
import DeadlineProduct from "../components/main/DeadlineList";
import RecommemdProduct from "../components/main/RecommendList";

import Arrow from "../assets/images/rightArrow.png";
//import ProductExample from "../assets/images/productExample.jpeg";
import AddPet from "../assets/images/add.png";
import DownArrow from "../assets/images/downArrow.png";

import { getFeaturedProduct } from "../librarys/store-api";
import { useEffect } from "react";

//카테고리 아이콘
import Snack from "../assets/images/category/간식.svg";
import Beauty from "../assets/images/category/미용.svg";
import Daily from "../assets/images/category/생활용품.svg";
import Clothes from "../assets/images/category/의류.svg";
import Toy from "../assets/images/category/장난감.svg";
import Medicine from "../assets/images/category/의약품.svg";

// 배너 예시 이미지 나중에 배너 이미지 나오면 갈아끼울 예정
import Banner1 from "../assets/images/main-banner/Banner1.jpg";
import Banner2 from "../assets/images/main-banner/Banner2.jpg";
import Banner3 from "../assets/images/main-banner/Banner3.jpg";

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
  width: ${props => props.isDownArrow ? "16px" : "24px"};
  height: ${props => props.isDownArrow ? "10px" : "24px"};
  cursor: pointer;
  margin: auto;
  margin-right: 0;
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
  margin: 25px 17px 0 17px;
  text-decoration: none;
`;

const DetailMenuTitle = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 25px 15px 0;
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

const ProductSelect = styled(Link)`
  text-decoration: none;
`;

const BannerContainer = styled.div`
  position: relative;
  overflow: hidden;
`;

const BannerButton = styled.button`
  position: absolute;
  top: 50%;
  ${(props) => (props.direction === "left" ? "left: 10px;" : "right: 10px;")}
  background: rgba(0,0,0,0);
  color: white;
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
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [selectedPet, setSelectedPet] = useState(null); 
  const [ setIsDropdownOpen] = useState(false);

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

  // 카테고리 ID와 상품 목록의 현재 상태를 찍어볼려고 한 콘솔창
  useEffect(() => {
    console.log("Current category ID:", categoryId);
    console.log("Recent items:", recentItems);
    console.log("Filtered recent items:", recentFilteredProducts);
  }, [categoryId, recentItems, recentFilteredProducts]);

  // 카테고리 선택시 로깅찍어보는 것
  const handleCategoryClick = (id) => {
    console.log("Category clicked:", id);
    setCategoryId(id);
  };
  ///
  useEffect(() => {
    console.log("First recent item:", recentItems[0]);
  }, [recentItems]);

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
  <PetImage src={selectedPet ? selectedPet.image : undefined} alt={selectedPet ? selectedPet.name : "Pet Image"} />
  <PetName>
    {selectedPet ? `${selectedPet.name} 위해 준비했어요` : "누굴 위해 준비하니?"}
  </PetName>
  <PetAddBtn 
    isDownArrow={isDropdownVisible || selectedPet}
    src={isDropdownVisible || selectedPet ? DownArrow : AddPet} 
    onClick={() => setDropdownVisible(!isDropdownVisible)} 
  />
  {isDropdownVisible && (
    <PetDropdown>
      {petList.map((pet) => (
        <PetItem key={pet.id} onClick={() => {
          console.log(pet.name);
          setSelectedPet(pet);
          setDropdownVisible(false);
          setIsDropdownOpen(false);
        }}>
          <img src={pet.image} alt={pet.name} />
          {pet.name}
        </PetItem>
      ))}
    </PetDropdown>
  )}
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
          <Title> {selectedPet ? `${selectedPet.name} 위해 준비했어요` : "최근 등록된 상품"} </Title>
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
    </PageContainer>
  );
};

export default Main;
