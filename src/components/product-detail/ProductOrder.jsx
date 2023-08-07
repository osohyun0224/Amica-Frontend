import { useState, useEffect } from "react";
import { styled } from "styled-components";

import Button from "../Button";
import DropDown from "./Dropdown";
// import SelectOption from "./SelectOption";

import MoreBtn from "../../assets/images/rightArrow.png";
import cancel from "../../assets/images/x.png";
import plus from "../../assets/images/plus.png";
import minus from "../../assets/images/minus.png";

const ProductOrderContainer = styled.div`
    max-width: 500px;
    width: 100%;
    max-height: 500px;
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
    margin-bottom: 8px;

    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: -0.02em;
    text-align: left;
`;

const SelectOption = styled.div`
    display: flex;
    flex-direction: column;
    color: #667080;
    padding: 0 5px 10px 5px;
`;

const SelectOptionTitle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

const SelectOptionName = styled.div`
    margin-top: 5px;
`;

const SelectOptionDetail = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const SelectOptionNumber = styled.div`
    display: flex;
    margin: 0 20px;
`;

const BtnImg = styled.img`
    width: 13px;
    height: 13px;
    cursor: pointer;
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
    height: 100px;
    overflow-y: scroll;
`;

const Line = styled.hr`
    width: 100%;
    height: 1px;
    background-color: rgba(0, 0, 0, 0.25);
`;

const TotalAmountContainer = styled.div`
    width: 100%;
    display: flex;
    position: relative;
    flex-direction: row;
    justify-content: space-between; 
`;

const TATitle = styled.div`
    font-size: 13px;
    font-weight: 500;
    line-height: 35px;
    letter-spacing: -0.02em;
    color: #667080;
`;

const TotalAmount = styled.div`
    font-size: 22px;
    font-weight: 800;
    line-height: 35px;
    letter-spacing: -0.02em;
    color: #151515;
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

const ProductOptions = [
    { id: 1, productName: "모래 6kg", price: 57000 },
    { id: 2, productName: "모래 7kg (+1000)", price: 58000 },
    { id: 3, productName: "모래 8kg (+2000)", price: 59000 },
    { id: 4, productName: "모래 9kg (+3000)", price: 60000 },
    { id: 5, productName: "모래 10kg (+4000)", price: 61000 },
    { id: 6, productName: "모래 11kg (+5000)", price: 62000 },
    { id: 7, productName: "모래 12kg (+6000)", price: 63000 },
];

const ProductOrder = (props) => {
    const [openOrder, setOpenOrder] = useState(false);      // 구매하기 버튼 클릭
    const [viewProduct, setViewProduct] = useState(false);  // dropdownItem 클릭
    const [orderList, setOrderList] = useState([]);

    const [number, setNumber] = useState(1);
    const [amount, setAmount] = useState(0);
    const [totalNum, setTotalNum] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0);

    const totalAmountComma = totalAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    const onClickOrderList = (value) => setOrderList([...orderList, value]);
    const onClickOrderPrice = (value) => setAmount(value);

    const onOrderPlus = () => {
        setNumber(number + 1);
        setTotalNum(totalNum + 1);
    };

    const onOrderMiuns = () => {
        (number !== 0) ? (
            setNumber(number - 1),
            setTotalNum(totalNum - 1)
         ) : setNumber(0);
    };

    const onRemove = (id) => {
        const list = orderList.filter(product => {
            product.id !== id;
        })
        return setOrderList(list);
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
                            setAmount={onClickOrderPrice} 
                            productOption={ProductOptions}
                        />
                    ) : (
                        <>
                            <Line/>
                            <OrderList>
                                {orderList.map((item) => (
                                    <SelectOption key={item.id}>
                                        <SelectOptionTitle>
                                            <SelectOptionName> {item} </SelectOptionName>
                                            <BtnImg 
                                                src={cancel}
                                                style={{ width: "20px", height: "20px" }}
                                                onClick={() => onRemove(item.id)}
                                            />
                                        </SelectOptionTitle>
                                        <SelectOptionTitle style={{ marginTop: "10px" }}>
                                            <SelectOptionDetail>
                                                <BtnImg src={minus} onClick={onOrderMiuns}/>
                                                <SelectOptionNumber> {number} </SelectOptionNumber>
                                                <BtnImg src={plus} onClick={onOrderPlus}/>
                                            </SelectOptionDetail>
                                            {amount}원
                                        </SelectOptionTitle>
                                    </SelectOption>
                                ))}
                            </OrderList>
                            <Line/>
                            <TotalAmountContainer>
                                <TATitle> 총 상품 금액 ({totalNum}개) </TATitle>
                                <TotalAmount> {totalAmountComma}원 </TotalAmount>
                            </TotalAmountContainer>
                        </>
                    )}
                </DropDownContainer>
            </ProductOrderItem>
            <PurchaseBtn> 구매하기 </PurchaseBtn>
        </ProductOrderContainer>
    )
}
export default ProductOrder;