import { useState } from "react";
import { styled } from "styled-components";

import Button from "../Button";
import DropDown from "../product-detail/Dropdown";

import MoreBtn from "../../assets/images/rightArrow.png";

const ProductOrderContainer = styled.div`
    max-width: 500px;
    width: 100%;
    height: 323px;
    background-color: #FFFFFF;
    position: fixed;
    border-radius: 5px 5px 0 0;
    box-shadow: 0px -2px 8px 0px rgba(0, 0, 0, 0.25);
    display: ${(props) => (props ? "block" : "none")};
    text-align: left;
    justify-content: center;
    align-items: center;
    margin-left: -25px;
    bottom: 0;
    z-index: 3;
`;

const ProductOrderItem = styled.div`
    padding: 20px 15px;
    gap: 4px;
`;

const DropDownContainer = styled.ul`
    width: 100%;
    height: 47px;
    background-color: #FFFFFF;
    border: 1px solid rgba(0, 0, 0, 0.25);
    border-radius: 6px;
    margin-top: 7px;
`;

const DropDownOption = styled.div`
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 17px 0 12px;

    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: -0.02em;
    text-align: left;
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

const OrderList = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 10px;
`;

const Line = styled.hr`
    width: 100%;
    background-color: rgba(0, 0, 0, 0.25);
`;

const TotalAmountContainer = styled.div`
    width: 100%;
`;

const TATitle = styled.div`

`;

const TotalAmount = styled.div`

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

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  display: ${(props) => (props.show ? "block" : "none")};
`;

const ProductOrder = (props) => {
    const [openOrder, setOpenOrder] = useState(false);      // 구매하기 버튼 클릭
    const [viewProduct, setViewProduct] = useState(false);  // dropdownItem 클릭
    const [orderList, setOrderList] = useState([]);
    
    const item = 0;
    const Amount = 0;
    const list = [];

    const onClickOrderList = (value) => {
        setOrderList([...orderList, value]);
    };

    return (
       <ProductOrderContainer>
            <ProductOrderItem>
                상품
                 <DropDownContainer onClick={() => setViewProduct(!viewProduct)}>
                    <DropDownOption>
                        Option
                        <More 
                            className={(viewProduct) ? "clicked" : ""}
                            src={MoreBtn} 
                        />
                    </DropDownOption>

                    { viewProduct ? (
                        <DropDown 
                            orderList={orderList}
                            setOrderList={onClickOrderList} 
                        />
                    ) : (
                        <OrderList>
                            <Line/>
                            {orderList.map((item) => (
                                <div> {item} </div>
                            ))}
                            <TotalAmountContainer>
                                <TATitle> 총 상품 금액 ({item}개) </TATitle>
                                <TotalAmount> {Amount}원 </TotalAmount>
                            </TotalAmountContainer>
                        </OrderList>
                    )}
                </DropDownContainer>
            </ProductOrderItem>
            <PurchaseBtn> 구매하기 </PurchaseBtn>
        </ProductOrderContainer>
    )
}
export default ProductOrder;