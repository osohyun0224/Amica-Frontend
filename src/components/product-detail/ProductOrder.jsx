import { useState, useEffect, useReducer, useRef } from "react";
import { styled } from "styled-components";
import { Link, useParams } from "react-router-dom";

import Button from "../Button";
import DropDown from "./Dropdown";
import OrderInfo from "./OrderInfo";
import { cartReducer, initalState } from "../../reducer/cart.js";

import MoreBtn from "../../assets/images/rightArrow.png";
import cancel from "../../assets/images/x.png";
import plus from "../../assets/images/plus.png";
import minus from "../../assets/images/minus.png";

import { getProduct } from "../../librarys/store-api";

const ProductOrderContainer = styled.div`
    max-width: 500px;
    width: 100%;
    height: auto;
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
    overflow: auto;
    transition: height 0.3s ease-in-out;
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
    padding: 0 5px;
    margin: 20px 0;
`;

const SelectOptionTitle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

const SelectOptionName = styled.div`
    margin-top: 5px;
    font-size: 15px;
    font-weight: 400;
    letter-spacing: -0.02em;
    color: #667080;
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

const SelectOptionPrice = styled.p`
    font-size: 15px;
    font-weight: 400;
    letter-spacing: -0.02em;
    color: #667080;
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
    margin-top: -8px;
    background-color: #FFFFFF;
    border: 1px solid rgba(0, 0, 0, 0.25);
    border-radius: 6px;
    list-style-type: none;
    left: 15px;
    right: 15px;
    position: absolute;
`;

const Line = styled.div`
    width: 100%;
    height: 1px;
    display: flex;
    position: absolute;
    left: 0;
    bottom: 120px;
    background-color: rgba(102, 112, 128, 0.3);
`;

const TotalAmountContainer = styled.div`
    width: 94%;
    display: flex;
    flex-direction: row;
    position: absolute;
    bottom: 82px;
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

const PurchaseBtn = styled(Link)`
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
    text-decoration: none;
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
    const [data, setData] = useState({});
    const [viewProduct, setViewProduct] = useState(false);  // dropdownItem 클릭
    const [isOpenID, setIsOpenID] = useState(0);
    const containerRef = useRef(null);

    const { id } = useParams();

    const [state, dispatch] = useReducer(cartReducer, initalState);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            const response = await getProduct(id);
            setData(response);
        };
        fetchData();
    }, [id]);

    const onClickOrderList = (value) => {
        dispatch({
            type: "addOrderProduct",
            payload: value,
        })
    };

    const ContainerHeight = () => {
        const headerHeight = 225; 
        const orderListHeight = 105; 

        return headerHeight + orderListHeight + state.orderList.length * 33;
    };
    
    return (
        <ProductOrderContainer style={{ height: `${ContainerHeight()}px` }}>
            <ProductOrderItem>
                상품
                 <DropDownContainer>
                    <DropDownOption onClick={() => setViewProduct(!viewProduct)}>
                        Option
                        <More 
                            className={(viewProduct) ? "clicked" : ""}
                            src={MoreBtn} 
                        />
                    </DropDownOption>
                    <Line style={{ top: "100px"}}/>
                    {(viewProduct) && (
                        <> 
                            <OrderList>
                                <DropDown 
                                    className={(viewProduct ? "clicked" : "")}
                                    orderList={state.orderList}
                                    setOrderList={onClickOrderList}
                                    productOption={data.options}
                                />
                            </OrderList>
                        </>
                    )}
                    {state.orderList.map(item => (
                        <SelectOption>
                            <SelectOptionTitle>
                                <SelectOptionName> {item.name} </SelectOptionName>
                                <BtnImg 
                                    src={cancel}
                                    style={{ width: "20px", height: "20px" }}
                                    onClick={() => dispatch({
                                        type: "onRemove",
                                        payload: item,
                                    })}
                                />
                            </SelectOptionTitle>
                            <SelectOptionTitle style={{ marginTop: "10px" }}>
                                <SelectOptionDetail>
                                     <BtnImg 
                                        src={minus} 
                                        onClick={() => dispatch({ 
                                            type: "minusQuantity", 
                                            payload: item,
                                        })}
                                    />
                                    <SelectOptionNumber> {item.quantity} </SelectOptionNumber>
                                    <BtnImg 
                                        src={plus} 
                                        onClick={() => dispatch({ 
                                            type: "plusQuantity", 
                                            payload: item,
                                        })}
                                    />
                                </SelectOptionDetail>
                                <SelectOptionPrice> {(item.price).toLocaleString()}원 </SelectOptionPrice>
                            </SelectOptionTitle>
                        </SelectOption>
                    ))}
                    <Line/>
                    <TotalAmountContainer>
                        <TATitle> 총 상품 금액 ({state.totalQuantity}개) </TATitle>
                        <TotalAmount> {(state.totalAmount).toLocaleString()}원 </TotalAmount>
                    </TotalAmountContainer>
                </DropDownContainer>
            </ProductOrderItem> 
            <PurchaseBtn 
                to={(state.orderList.length !== 0) ? 
                    `/productDetail/orderInfo?pid=${id}&oid=${state.orderList.map(item => item.id).join(",")}&qty=${state.orderList.map(item => item.quantity).join(",")}` : ""
                }> 
                    구매하기 
                </PurchaseBtn>
        </ProductOrderContainer>
    )
}
export default ProductOrder;