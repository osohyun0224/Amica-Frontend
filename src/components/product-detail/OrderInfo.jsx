import { useState } from "react";
import styled from "styled-components";

import profileImg from "../../assets/images/RecentImage.png"

const Container = styled.div`
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: white;
`;

// 최상단
const TopTitle = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 20px;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: -0.02em;
    color: #151515;
`;

// 주문내역 Container
const BuyerInfo = styled.div`
    display: flex;
    flex-direction: column;
`;

const OrderDetailContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const SubTitle = styled.p`
    margin-left: 32px;
    font-size: 16px;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: -0.02em;
    color: #151515;
`;

const Line = styled.div` 
    width: 100%;
    margin: 10px 0;
    border: 1px dashed rgba(102, 112, 128, 0.3);
`;

const OrderProfileImg = styled.img`
    width: 50px;
    height: 50px;
    background-color: #EEF1F4;
`;

const ProductDetailInfo = styled.div`
    display: flex;
    flex-direction: row;
    padding: 0 25px;
    margin-bottom: -6px;
    justify-content: space-between;
`;

const ProductName = styled.p`
    margin: -7px 0 0 11px;
    font-size: 13px;
    font-weight: 400;
    line-height: 35px;
    letter-spacing: -0.02em;
    color: #667080;
`;

const ProductNumber = styled.p`
    margin: -7px 0 0 11px;
    font-size: 15px;
    font-weight: 400;
    line-height: 35px;
    letter-spacing: -0.02em;
    color: #667080;
`;

const OrderDetails = styled.div`
    min-width: 70%;
    display: flex;
    flex-direction: column;

`;

const OrderPrice = styled.p`
    display: flex;
    align-items: end;
    font-size: 15px;
    font-weight: 400;
    line-height: 35px;
    letter-spacing: -0.02em;
    color: #667080;
`;

// 구매자 정보 Container (받는 이, 전화번호 ...)
const BuyerInfoContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 27px 30px;
`;

const BuyerInfoTitle = styled(SubTitle)`
    margin: 0 0 5px 0;
`;

const BuyerInputForm = styled.input`
    width: 100%;
    height: 40px;
    border-radius: 5px;
    background: #F8F8F8;
    border: none;
    padding: 10px;
    margin-bottom: 20px;
`;

const PurchaseBtn = styled.button`
    position: absolute;
    max-width: 500px;
    width: 100%;
    height: 80px;
    gap: 10px;
    bottom: 0;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 0;
    box-shadow: none;
    background-color: #D94A56;
    cursor: pointer;

    color: #FFFFFF;
    font-size: 16px;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: -0.02em;
    text-decoration: none;
`;

const OrderInfo = () => {
    const OrderName = useState("제품명");
    const OrderNumber = useState(1);
    const OrderAmount = 56000;
    return (
        <Container>
            <TopTitle> 배송정보 </TopTitle>

            <BuyerInfo>
                <OrderDetailContainer>
                    <SubTitle> 주문내역 </SubTitle>
                    <Line/>
                    <ProductDetailInfo>
                        <OrderProfileImg src={profileImg} alt="상품 이미지"/>
                        <OrderDetails>
                            <ProductName> {OrderName} </ProductName>
                            <ProductNumber> {OrderNumber}개 </ProductNumber>
                        </OrderDetails>
                        <OrderPrice> {OrderAmount}원 </OrderPrice>
                    </ProductDetailInfo>
                    <Line/>
                </OrderDetailContainer>
                <BuyerInfoContainer>
                    <BuyerInfoTitle> 받는 이 </BuyerInfoTitle>
                    <BuyerInputForm placeholder={"이름"}/>
                    <BuyerInfoTitle> 전화번호 </BuyerInfoTitle>
                    <BuyerInputForm placeholder={"주소지"}/>
                    <BuyerInfoTitle> 주소지</BuyerInfoTitle>
                    <BuyerInputForm placeholder={"우편번호"}/>
                    <BuyerInputForm placeholder={"주소"}/>
                    <BuyerInputForm placeholder={"상세주소"}/>
                    <BuyerInfoTitle> 요청사항 </BuyerInfoTitle>
                    <BuyerInputForm placeholder={"배송 후 연락주세요."}/>
                </BuyerInfoContainer>
            </BuyerInfo>
            <PurchaseBtn> 결제하기 </PurchaseBtn>
        </Container>
    )
}

export default OrderInfo;