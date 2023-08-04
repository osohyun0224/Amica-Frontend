import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { ScrollContainer } from "react-indiana-drag-scroll";
import "react-indiana-drag-scroll/dist/style.css";

import CategoryList from "../components/main-category/CategoryList";
import DeadlineProduct from "../components/main-category/DeadlineList";
import RecommemdProduct from "../components/main-category/RecommendList";

import arrow from '../assets/images/rightArrow.png';
import productExample from "../assets/images/productExample.jpeg";

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
    margin: 70px 0 0 17px;
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
    font-weight: bold;
    color: #151515;
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

const Category = [
    {
        id: 1,
        name: 'snack',
        text: "간식"
    },
    {
        id: 2,
        name: 'beauty',
        text: "미용"
    },
    {
        id: 3,
        name: 'accessories',
        text: "의류/악세사리"
    },
    {
        id: 4,
        name: 'nutritional',
        text: "영양제"
    },
    {
        id: 5,
        name: 'toys',
        text: "장난감"
    },
    {
        id: 6,
        name: 'toilet',
        text: "배변용품"
    },
    {
        id: 7,
        name: 'cat',
        text: "고양이"
    },
    {
        id: 8,
        name: 'dog',
        text: "강아지"
    },
    {
        id: 9,
        name: 'fish',
        text: "관상어"
    },
];

const DeadLine = [
    {
        id: 11,
        name: "[가성비 좋은 모래] 벤토나이트 모래",
        percent: "35%",
        price: "56,000원",
        period: "공동구매 마감까지 10:27:21 남음"
    },
    {
        id: 12,
        name: "[가성비 좋은 모래] 벤토나이트 모래",
        percent: "35%",
        price: "56,000원",
        period: "공동구매 마감까지 10:27:21 남음"
    },
    {
        id: 13,
        name: "[가성비 좋은 모래] 벤토나이트 모래",
        percent: "35%",
        price: "56,000원",
        period: "공동구매 마감까지 10:27:21 남음"
    },
    {
        id: 14,
        name: "[가성비 좋은 모래] 벤토나이트 모래",
        percent: "35%",
        price: "56,000원",
        period: "공동구매 마감까지 10:27:21 남음"
    }
];

const Recommend = [
    {
        id: 21,
        name: "[안심하고 먹는 유기농] 전연령 사료 6kg",
        kind: "사료",
        price: "56,000원",
        date: "2023.05.09"
    },
    {
        id: 22,
        name: "[안심하고 먹는 유기농] 전연령 사료 6kg",
        kind: "사료",
        price: "56,000원",
        date: "2023.05.09"
    },
    {
        id: 23,
        name: "[안심하고 먹는 유기농] 전연령 사료 6kg",
        kind: "사료",
        price: "56,000원",
        date: "2023.05.09"
    },
];

const Main = () => {
    const [category, setCategory] = useState(Category);
    const petName = "달이";
    
    return (
        <PageContainer>
            <Image/>
            <CategoryList>
                {Category.map((cate, id) => 
                    <Menu key={cate.name}>
                        {cate.text}
                    </Menu>
                )}
            </CategoryList>
            <DetailMenu>
                <DetailMenuTitle>
                    <Title> 마감 임박! </Title>
                    <NextBtn src={arrow} alt="자세히보기"/>
                </DetailMenuTitle>
                <DeadLineList>
                    {DeadLine.map((items) => (
                        <ProductSelect to={`/ProductDetail/${items.id}`}>
                            <DeadlineProduct 
                                id={items.id}
                                src={productExample}
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
                    <Title> {petName} </Title>를 위해 준비했어요
                    <NextBtn src={arrow} alt="자세히보기"/>
                </DetailMenuTitle>
                <RecommendList>
                    {Recommend.map((items) => (
                    <ProductSelect to={`/ProductDetail/${items.id}`}>
                        <RecommemdProduct
                            id={items.id}
                            src={productExample}
                            name={items.name}
                            kind={items.kind}
                            price={items.price}
                            date={items.date}
                        />
                    </ProductSelect>
                    ))}
                </RecommendList>
            </DetailMenu>
            <MoreBtn> 더보기 </MoreBtn>
        </PageContainer>
    );
}

export default Main;