import { useState, useCallback } from "react";
import styled from "styled-components";

const PageComponent = styled.div`
    display: block;
    flex-direction: column;
    justify-content: center;
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
    background-color: #EEF1F4;
    margin: 15px 15px 0 0;
    padding-bottom: 8px;
    justify-content: center;
    align-items: end;
    display: flex;
    float: left;
`;

// 카테고리 배열 생성
const Category = [
    {
        name: 'snack',
        text: "간식"
    },
    {
        name: 'beauty',
        text: "미용"
    },
    {
        name: 'accessories',
        text: "악세사리"
    },
    {
        name: 'nutritional',
        text: "영양제"
    },
    {
        name: 'toys',
        text: "장난감"
    },
    {
        name: 'toilet',
        text: "배변용품"
    }
]

const Main = () => {
    const [category, setCategory] = useState('home');
    const onSelect = useCallback(
        Menu => setCategory(Menu), []
    );

    return (
        <PageComponent>
            <Image/>
            {Category.map((cate) => 
                <Menu
                    key={cate.name}
                    onClick={() => onSelect(cate.name)}
                >
                    {cate.text}
                </Menu>
            )}
        </PageComponent>
    );
}

export default Main;
