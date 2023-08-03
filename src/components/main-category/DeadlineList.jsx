import { styled } from "styled-components";

const Page = styled.div`
    width: 195px;
    height: 195px;
    border: 3px solid #667080;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    margin-right: 3px;
    cursor: pointer;
`;

const Image = styled.img`
    width: 100%;
    height: 60%;
    border-radius: 7px 7px 0 0;
`;

const Detail = styled.div`
    background-color: #EEF1F400;
    margin: 10px 8px;
`;

const Title = styled.p`
    font-size: 11px;
    color: ##151515;
`;

const Info = styled.p`
    flex-direction: row;
    font-size: 16px;
    font-weight: bold;
    margin: 5px 0;
`;

const Period = styled.p`
    font-size: 9px;
`;

const DetailProductList = ({ src, name, percent, price, period, onClick }) => {
    return (
        <Page>
            <Image src={src} alt="상품이미지"/>
            <Detail>
                <Title> {name} </Title>
                <Info> {percent} {price} </Info>
                <Period> {period} </Period>
            </Detail>
        </Page>
    )
}

export default DetailProductList;