import { styled } from "styled-components";
import { Link } from "react-router-dom";

const Page = styled.div`
    width: 470px;
    height: 125px;
    display: flex;
    flex-direction: row;
    border-top: 1px solid #EEF1F4;
    margin-right: 10px;
    padding-top: 10px;
    cursor: pointer;
`;

const Image = styled.img`
    width: 105px;
    height: 105px;
    border: 3px solid #667080;
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

const Kind = styled.p`
    width: 35px;
    height: 26px;
    font-size: 12px;
    color: #F2B366;
    line-height: 22px;
    text-align: center;
    background-color: #FCECD9;
    gap: 10px;
    padding: 2px 6px;
    margin: 3px 0 9px 0;
    border-radius: 5px;
`;

const Price = styled.p`
    font-size: 14px;
    font-weight: 700;
    line-height: 22px;
    color: #151515;
    margin: 5px 0 0 0;
`;

const DateContainer = styled.div`
    display: flex;
    flexDirection: row;
    alignItems: center;
    font-size: 12px;
    font-weight: 400;
    line-height: 22px;
`;

const RecommendList= ({ src, name, kind, price, date }) => {
    return (
        <Page>
            <Image src={src} alt="상품이미지"/>
            <Detail>
                <Title> {name} </Title>
                <Kind> {kind} </Kind>
                <Price> {price} </Price>
                <DateContainer> 구매날짜: 
                    <> {date} </>
                </DateContainer>
            </Detail>
        </Page>
    )
}

export default RecommendList;