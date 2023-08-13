export const initalState = {
    orderList: [],
    totalQuantity: 0,
    totalAmount: 0,
};

export function cartReducer(state, action) {
    switch (action.type) {
        case "addOrderProduct": {
            const itemList = state.orderList.find((item) => item.id === action.payload.id);
            
            if (itemList) {
                const plusQuantity = 1;
                const plusPricePerUnit = itemList.price / itemList.quantity;
        
                return {
                    ...state,
                    orderList: state.orderList.map(item => {
                        if (item.id === action.payload.id) {
                            return {
                                ...item,
                                quantity: item.quantity + plusQuantity,
                                price: item.price + plusPricePerUnit,
                            };
                        }
                        return item;
                    }),
                    totalQuantity: state.totalQuantity + plusQuantity,
                    totalAmount: state.totalAmount + plusPricePerUnit,
                }
            }

            else {
                const addList = {
                    id: action.payload.id,
                    name: action.payload.name,
                    price: action.payload.price,
                    quantity: 1,
                }

                if (action.payload.discount != 0) {
                    addList.price = action.payload.discount;
                }
                return {
                    ...state,
                    orderList: [...state.orderList, addList],
                    totalQuantity: state.totalQuantity + 1,
                    totalAmount: state.totalAmount + addList.price,
                }
            }
        } 

        case "plusQuantity": {
            const plusItem = state.orderList.find((item) => item.id === action.payload.id);
            
            if (plusItem) {
                const plusQuantity = 1;
                const plusPricePerUnit = plusItem.price / plusItem.quantity;
        
                return {
                    ...state,
                    orderList: state.orderList.map(item => {
                        if (item.id === action.payload.id) {
                            return {
                                ...item,
                                quantity: item.quantity + plusQuantity,
                                price: item.price + plusPricePerUnit,
                            };
                        }
                        return item;
                    }),
                    totalQuantity: state.totalQuantity + plusQuantity,
                    totalAmount: state.totalAmount + plusPricePerUnit,
                };
            }
        }

        case "minusQuantity": {
            const minusItem = state.orderList.find((item) => item.id === action.payload.id);
            if (minusItem && minusItem.quantity > 1) {
                const minusQuantity = 1;
                const minusPricePerUnit = minusItem.price / minusItem.quantity;
        
                return {
                    ...state,
                    orderList: state.orderList.map(item => {
                        if (item.id === action.payload.id) {
                            return {
                                ...item,
                                quantity: item.quantity - minusQuantity,
                                price: item.price - minusPricePerUnit,
                            };
                        }
                        return item;
                    }),
                    totalQuantity: state.totalQuantity - minusQuantity,
                    totalAmount: state.totalAmount - minusPricePerUnit,
                };
            } else if (minusItem) {
                minusItem.quantity = 1;
                minusItem.price = action.payload.price;
        
                return {
                    ...state,
                    orderList: [...state.orderList],
                    totalQuantity: state.totalQuantity,
                    totalAmount: state.totalAmount,
                };
            }
        }

        case "onRemove": {
            const itemList = state.orderList.find((item) => item.id === action.payload.id);

            if (itemList) {
                const removeQuantity = itemList.quantity;

                return {
                    ...state,
                    orderList: state.orderList.filter(item => item.id !== action.payload.id),
                    totalQuantity: state.totalQuantity - removeQuantity,
                    totalAmount: state.totalAmount - itemList.price,
                }
            }
        }
        default:
            return state;
    }
}
