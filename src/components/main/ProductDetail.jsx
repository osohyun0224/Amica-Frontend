import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Button from "../Button";
import MoreBtn from "../../assets/images/rightArrow.png";

const PageContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: #FFFFFF;
    color: #667080;
`;

const Image = styled.img`
    width: 100%;
    height: 390px;
    margin-top: 60px;
    background-color: #EEF1F4;
`;

const ProductInfoContainer = styled.div`
    width: 100%;
    padding: 18px 25px 0 25px;
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
    margin-left: 11px;
`;

const GroupPurchaseContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px 0 20px 0;
`;

const GPSubContainer = styled.div`
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

const OrderBtn = styled(Button)`
    width: 100%;
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

const ProductOrder = styled.div`
    max-width: 500px;
    width: 100%;
    height: 323px;
    background-color: #FFFFFF;
    position: fixed;
    border-radius: 5px 5px 0 0;
    box-shadow: 0px -2px 8px 0px rgba(0, 0, 0, 0.25);
    display: ${(props) => (props.show ? "block" : "none")};
    text-align: left;
    justify-content: center;
    align-items: center;
    margin-left: -25px;
    bottom: 0;
    z-index: 2;
`;

const ProductOrderItem = styled.div`
    padding: 20px 15px;
    gap: 4px;
`;

const PurchaseBtn = styled(Button)`
    display: flex;
    position: absolute;
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

    color: #FFFFFF;
    font-size: 16px;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: -0.02em;
`;

const DropDownItem = styled.div`
    width: 360px;
    height: 47px;
    margin-top: 7px;
    background-color: #FFFFFF;
    border: 1px solid rgba(0, 0, 0, 0.25);
    border-radius: 6px;

    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: -0.02em;
    text-align: left;
    padding: 12px;
`;

const OrderList = styled.div`
    width: 100%;
`;

const SelectionContainer = styled.div`
    margin-top: 20px;
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
    const [openOrder, setOpenOrder] = useState(false);
    const [openMenu, setOpenMenu] = useState("");
    const location = useLocation();
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const onClickOrder = () => {
        setOpenOrder(prev => !prev);
    };

    const onClickMenu = (value) => {
        setOpenMenu((value === openmenu) ? "" : value);
    };

    return (
        <PageContainer 
            onClick={() => openOrder ? setOpenOrder(false) : null}
        >
            <Image src={location.state.src} alt="상품 이미지"/>
            <ProductInfoContainer>
                <ProductName> {location.state.name} </ProductName>
                <PerPrice>
                    <Percent> {`${location.state.percent}%`} </Percent>
                    <Price> {`${location.state.price}원`} </Price>
                </PerPrice>
                <GroupPurchaseContainer>
                    <GPSubContainer> 
                        <GPTitle> 공동구매 달성률 </GPTitle>
                        <GPTime> {location.state.period} </GPTime>
                    </GPSubContainer>
                    <GPSubContainer>
                        <Percent> 702% </Percent>
                        <GPTitle> 867명이 참가했어요 </GPTitle>
                    </GPSubContainer>
                </GroupPurchaseContainer>
                <OrderBtn onClick={onClickOrder}> 구매하기 </OrderBtn>
                <ProductOrder show={openOrder}>
                    <ProductOrderItem>
                        상품
                        <DropDownItem>
                            DropDownItem
                        </DropDownItem>
                        <OrderList>
                        </OrderList>
                    </ProductOrderItem>
                    <PurchaseBtn> 구매하기 </PurchaseBtn>
                </ProductOrder>
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