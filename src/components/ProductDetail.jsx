import { useState } from "react";
import styled from "styled-components";
import Button from "../components/Button";

import MoreBtn from "../assets/images/rightArrow.png";

const PageContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: #FFFFFF;
`;

const Image = styled.img`
    width: 100%;
    height: 400px;
    margin-top: 60px;
    background-color: #EEF1F4;
`;

const ProductInfoContainer = styled.div`
    width: 100%;
    padding: 25px 25px 0 25px;
`;

const ProductName = styled.p`
    font-size: 17.29px;
    font-weight: 400;
    line-height: 34.57px;
`;

const PerPrice = styled.div`
    display: flex;
    flex-direction: row;
`;

const Percent = styled.p`
    font-size: 22px;
    font-weight: 700;
    color: #D94A56;
    line-height: 34.57px;
`;

const Price = styled.p`
    font-size: 22px;
    font-weight: 700;
    color: #151515;
    line-height: 34.57px;
    margin-left: 13px;
`;

const GroupPurchaseContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 15px 0 20px 0;
`;

const GPRate = styled.div`
    width: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: -10px;
`;

const GPTitle = styled.p`
    font-size: 12px;
    font-weight: 400;
    line-height: 35px;
    letter-spacing: -0.02em;
`;

const GPTime = styled.p`
    font-size: 12px;
    font-weight: 400;
    color: #D94A56;
    line-height: 22px;
    letter-spacing: -0.02em;
`;

const PurchaseBtn = styled(Button)`
    width: 100%;
    height: 48px;
    color: #FFFFFF;
    font-size: 16px;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: -0.02em;
    text-align: center;
    background-color: #D94A56;
    border: none;
    box-shadow: none;
    margin-top: 5px;
`;

const SelectionContainer = styled.div`
    width: 100%;
    margin-top: 30px;
`;

const SelectionButton = styled.div`
    width: 50%;
    height: 48px;
    border: none;
    border-bottom: 1px solid rgba(102, 112, 128, 0.3);
    text-align: center;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    float: left;
    
    &:hover {
    background-color: #efefef;
    }

    &.select {
        color: #D94A56;
        border-bottom: 2px solid #D94A56;
        font-weight: 600;
    }
`;

const PromotionalImage = styled(Image)`
    height: 876px;
    margin: 0;
`;

const Notice = styled.div`
    width: 100%;
    height: auto;
    padding: 20px;
    margin-top: 50px;
`;

const SellerInfo = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 8px;
`;

const SellerDetailInfo = styled.div`
    font-size: 16px;
    font-weight: 400;
    color: #667080;
    line-height: 22px;
    letter-spacing: -0.02em;
    display: flex;
    flex-direction: column;
`;

const SellerInfoTitle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 30px 20px;
    border: 1px solid #EEF1F4;
`;

const SellerInfoContent = styled.div`
    display: flex;
    flex-direction: column;
    padding: 15px 0 20px 20px;
`;

const SellerPhone = styled(SellerDetailInfo)`
    font-weight: 600;
    border: none;
    padding: 0;
    border-bottom: 1px solid #667080;
`;

const More = styled.img`
    width: 9px;
    height: 16px;
    transform: rotate(90deg);
    cursor: pointer;

    &.clicked {
        transform: rotate(270deg);
    }
`;

const SellerInfoList = [
    {
        id: 1,
        name: '문의사항',
        // content: "0000-0000"
    },
    {
        id: 2,
        name: '상품필수정보',
        content: "어쩌고 저쩌고"
    },
    {
        id: 3,
        name: '교환 및 반품 정보',
        content: "알아서 하세요"
    },
    {
        id: 4,
        name: '배송정보',
        content: "1년 내 배송됨"
    },
    {
        id: 5,
        name: '판매자 정보',
        // content: [
        //     { sellerNameTitle: "사업자명", sellerName: "곽두팔" },
        //     { sellerNumTitle: "사업자 등록번호", sellerNum: "000-00-00000" },
        //     { sellerAddressTitle: "사업자 주소", sellerAddressTitle: "강원특별자치도 어쩌고 저쩌고 빌딩 7층" },
        // ]
    },
];

const ProductDetail = () => {
    const [selected, setSelected] = useState(false);
    const [openMenu, setOpenMenu] = useState("");

    const onClickMenu = (value) => {
        setOpenMenu((value === openmenu) ? "" : value);
    }

    return (
        <PageContainer>
            <Image alt="상품 이미지"/>
            <ProductInfoContainer>
                <ProductName> [가성비 좋은 모래] 벤토나이트 모래 </ProductName>
                <PerPrice>
                    <Percent> 35% </Percent>
                    <Price> 56,000원</Price>
                </PerPrice>
                <GroupPurchaseContainer>
                    <GPRate> 
                        <GPTitle> 공동구매 달성률 </GPTitle>
                        <GPTime>
                            공동구매 마감까지 10:27:21 남음
                        </GPTime>
                    </GPRate>
                    <GPRate>
                        <Percent> 702% </Percent>
                        <GPTitle> 867명이 참가했어요 </GPTitle>
                    </GPRate>
                </GroupPurchaseContainer>
                <PurchaseBtn> 구매하기 </PurchaseBtn>
            </ProductInfoContainer>

            <SelectionContainer>
                <SelectionButton
                    className={`${selected === false ? "select" : ""}`}
                    onClick={() => setSelected(false)}
                > 정보 
                </SelectionButton>
                <SelectionButton 
                    className={`${selected === true ? "select" : ""}`}
                    onClick={() => setSelected(true)}
                > 공지사항 
                </SelectionButton>
                    {selected ? 
                        <Notice>
                            공지사항 예시입니다
                            <br/>
                            [내용] 우왕
                        </Notice> : <PromotionalImage/>
                    }
            </SelectionContainer>
            <SellerInfo>
                    <SellerDetailInfo> 
                    {SellerInfoList.map(info => (
                        <SellerInfoTitle>
                            {info.name} 
                            {(info.id === 1) ? (
                                <SellerPhone> 0000-0000 </SellerPhone>
                            ) : (
                                <More 
                                    className={`${openMenu === info ? "clicked" : ""}`}
                                    src={MoreBtn}
                                    onClick={() => onClickMenu(info)}
                                />
                            )}
                        </SellerInfoTitle>
                    ))}
                    </SellerDetailInfo>
            </SellerInfo>
        </PageContainer>
    )
}

export default  ProductDetail;