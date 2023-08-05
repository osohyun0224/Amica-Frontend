import { styled } from "styled-components";
import ProductType from "../../components/ProductType";

const Page = styled.div`
    /* width: 470px; */
    height: 125px;
    display: flex;
    flex-direction: row;
    border-top: 1px solid #EEF1F4;
    border-bottom: 1px solid #EEF1F4;
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

const RecommendList= ({ src, name, kind, price }) => {
    return (
        <Page>
            <Image src={src} alt="상품이미지"/>
            <Detail>
                <Title> {name} </Title>
                <ProductType 
                    type={kind} 
                    style={{ marginLeft: 0, bottom: 0}}/>
                <Price> {`${price}원`} </Price>
            </Detail>
        </Page>
    )
}

export default RecommendList;