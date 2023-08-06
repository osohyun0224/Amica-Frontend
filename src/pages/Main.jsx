import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { ScrollContainer } from "react-indiana-drag-scroll";
import "react-indiana-drag-scroll/dist/style.css";

import ProductType from "../components/main/ProductType";
import CategoryList from "../components/main/CategoryList";
import DeadlineProduct from "../components/main/DeadlineList";
import RecommemdProduct from "../components/main/RecommendList";

import Arrow from '../assets/images/rightArrow.png';
import ProductExample from "../assets/images/productExample.jpeg";
import AddPet from "../assets/images/add.png";

const PageContainer = styled.div`
    display: block;
    flex-direction: column;
    justify-content: center;
    background-color: #FFFFFF;
`;

const Image = styled.img`
    width: 100%;
    height: 18vh;
    background: #EEF1F4;
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
    background-color: #D9D9D9;
    border: 1px solid #D9D9D9;
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

const PetAddBtn = styled.img`
    width: 24px;
    height: 24px;
    margin: auto;
    margin-right: 20px;
    cursor: pointer;
`;

const Menu = styled.div`
    width: 60px;
    height: 60px;
    font-size: 11px;
    color: #667080;
    background-color: #FFFFFF;
    margin: 15px 15px 0 0;
    padding-bottom: 8px;
    justify-content: center;
    align-items: end;
    display: flex;
    float: left;
    cursor: pointer;
`;

const DetailMenu = styled.div`
    background-color: white;
    clear: both;
    margin: 30px 0 0 17px;
    text-decoration : none;
`;

const DetailMenuTitle = styled.div`
    display: flex;
    flex-direction: row;
    margin: 0 25px 20px 0;
`

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
    text-decoration : none; 
`;

const Categories = [
    { id: 0, name: 'snack', text: "간식", },
    { id: 1, name: 'beauty', text: "미용", },
    { id: 2, name: 'accessories', text: "의류/악세사리", },
    { id: 3, name: 'nutritional', text: "영양제", },
    { id: 4, name: 'toys', text: "장난감", },
    { id: 5, name: 'toilet', text: "배변용품", },
    { id: 6, name: 'cat', text: "고양이", },
    { id: 7, name: 'dog', text: "강아지", },
    { id: 8, name: 'fish', text: "관상어", },
];

const DeadLine = [
    {
        id: 11,
        name: "[안심하고 먹는 유기농] 전연령 사료 6kg",
        percent: "35",
        price: "56,000",
        period: "공동구매 마감까지 10:27:21 남음"
    },
    {
        id: 12,
        name: "[가성비 좋은 모래] 벤토나이트 모래",
        percent: "36",
        price: "57,000",
        period: "공동구매 마감까지 10:27:21 남음"
    },
    {
        id: 13,
        name: "[가성비 좋은 모래] 벤토나이트 모래",
        percent: "37",
        price: "58,000",
        period: "공동구매 마감까지 10:27:21 남음"
    },
    {
        id: 14,
        name: "[가성비 좋은 모래] 벤토나이트 모래",
        percent: "38",
        price: "59,000",
        period: "공동구매 마감까지 10:27:21 남음"
    }
];

const Recommend = [
    {
        id: 21,
        name: "[안심하고 먹는 유기농] 전연령 사료 6kg",
        kind: "사료",
        price: "56,000",
        date: "2023.05.09"
    },
    {
        id: 22,
        name: "[안심하고 먹는 유기농] 전연령 사료 6kg",
        kind: "사료",
        price: "57,000",
        date: "2023.05.09"
    },
    {
        id: 23,
        name: "[안심하고 먹는 유기농] 전연령 사료 6kg",
        kind: "사료",
        price: "58,000",
        date: "2023.05.09"
    },
];

const Main = () => {
    const [categoryId, setCategoryId] = useState();

    return (
        <PageContainer>
            <Image/>
            <PetRecommend>
                <PetImage/>
                <PetName> 누굴 위해 준비하니? </PetName>
                <PetAddBtn src={AddPet}/>
            </PetRecommend>
            <CategoryList>
                {Categories.map((cate) => 
                    <Menu key={cate.name}>
                        {cate.text}
                    </Menu>
                )}
            </CategoryList>
            <DetailMenu>
                <DetailMenuTitle>
                    <Title> 마감 임박! </Title>
                </DetailMenuTitle>
                <DeadLineList>
                    {DeadLine.map((items) => (
                        <ProductSelect 
                            to={`/productDetail/${items.id}`}
                            state={{
                                src: `${ProductExample}`,
                                name: `${items.name}`,
                                percent: `${items.percent}`,
                                price: `${items.price}`,
                                period: `${items.period}`
                            }}
                        >
                            <DeadlineProduct 
                                id={items.id}
                                src={ProductExample}
                                name={items.name}
                                percent={items.percent}
                                price={items.price}
                                period={items.period}
                            />
                        </ProductSelect>
                    ))}
                </DeadLineList>
            </DetailMenu>
            <DetailMenu>
                <DetailMenuTitle>
                    <Title> 최근 등록된 상품 </Title>
                    <NextBtn src={Arrow} alt="자세히보기"/>
                </DetailMenuTitle>
                <RecommendList>
                    {Recommend.map((items) => (
                        <ProductSelect 
                            to={`/productDetail/${items.id}`}
                            state={{
                                src: `${ProductExample}`,
                                name: `${items.name}`,
                                percent: `${items.percent}`,
                                price: `${items.price}`,
                                period: `${items.period}`
                             }}
                        >
                            <RecommemdProduct
                                id={items.id}
                                src={ProductExample}
                                name={items.name}
                                kind={items.kind}
                                price={items.price}
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
                    {DeadLine.map((items) => (
                        <ProductSelect 
                            to={`/productDetail/${items.id}`}
                            state={{
                                src: `${ProductExample}`,
                                name: `${items.name}`,
                                percent: `${items.percent}`,
                                price: `${items.price}`,
                                period: `${items.period}`
                            }}
                        >    
                            <DeadlineProduct 
                                id={items.id}
                                src={ProductExample}
                                name={items.name}
                                percent={items.percent}
                                price={items.price}
                                period={items.period}
                            />
                        </ProductSelect>
                    ))}
                </DeadLineList>
            </DetailMenu>
            <MoreBtn> 더보기 </MoreBtn>
        </PageContainer>
    );
}

export default Main;