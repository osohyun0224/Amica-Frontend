import { styled } from "styled-components";
import ProductType from "../../components/ProductType";

const Page = styled.div`
    width: 195px;
    height: 195px;
    border-radius: 10px;
    display: flex;
    position: relative;
    flex-direction: column;
    margin: 0 5px 10px 5px;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
    cursor: pointer;
`;

const Image = styled.img`
    width: 100%;
    height: 120px;
    border-radius: 7px 7px 0 0;
    position: relative;
`;

const Detail = styled.div`
    width: 195px;
    height: 80px;
    border-radius: 0 0 10px 10px;
    /* margin-bottom: 60px; */
    margin-top: -44px;
    padding: 8px 0 0 8px;
    line-height: 22px;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 17.71%);
    display: block;
`;

const Title = styled.p`
    width: 178px;
    height: 16px;
    font-size: 12px;
    font-weight: 400;
    color: #151515;
    margin-bottom: 4px;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const InfoContainer = styled.div`
    display: flex; 
    flex-direction: row;
`;

const Info = styled.p`
    font-size: 14px;
    font-weight: 700;
`;

const Period = styled.p`
    font-size: 9px;
    font-weight: 400;
    color: rgba(21, 21, 21, 0.25);
`;

const DetailProductList = ({ src, name, percent, price, period }) => {
    return (
        <Page>
            <Image src={src} alt="상품이미지"/>
            <InfoContainer>
                <ProductType type="사료"/>
                <ProductType type="강아지"/>
            </InfoContainer>
            <Detail>
                <Title> {name} </Title>
                    <InfoContainer> 
                        <Info style={{ color: "#D94A56" }}> {`${percent}%`} </Info>
                        <Info style={{ marginLeft: "7px" }}> {`${price}원`} </Info>
                    </InfoContainer>
                <Period> {period} </Period>
            </Detail>
        </Page>
    )
}

export default DetailProductList;