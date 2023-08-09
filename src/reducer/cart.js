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
                itemList.quantity += action.payload.quantity;
            }
            else {
                const addList = {
                    id: action.payload.id,
                    productName: action.payload.productName,
                    price: action.payload.price,
                    quantity: 1,
                }

                return {
                    ...state,
                    orderList: [...state.orderList, addList],
                    totalQuantity: state.totalQuantity + 1,
                    totalAmount: state.totalAmount + action.payload.price,
                }
            }
        } 

        case "plusQuantity": {
            const plusItem = state.orderList.find((item) => item.id === action.payload.id);
            
            if (plusItem) {
                const plusQuantity = 1;
                const plusPrice = plusItem.price / plusItem.quantity;
        
                plusItem.quantity += plusQuantity;
                plusItem.price += plusPrice;
        
                return {
                    ...state, 
                    orderList: [...state.orderList],
                    totalQuantity: state.totalQuantity + plusQuantity,
                    totalAmount: state.totalAmount + plusPrice,
                };
            }
        }

        case "miunsQuantity": {
            const miunsItem = state.orderList.find((item) => item.id === action.payload.id);
            
            if (miunsItem && miunsItem.quantity > 1) {
                const miunsQuantity = 1;
                const miunsPrice = miunsItem.price / miunsItem.quantity;

                miunsItem.quantity -= miunsQuantity;
                miunsItem.price -= miunsPrice;

                return {
                    ...state,
                    orderList: [...state.orderList],
                    totalQuantity: state.totalQuantity - miunsQuantity,
                    totalAmount: state.totalAmount - miunsPrice,
                };

            } else if (miunsItem) {
                miunsItem.quantity = 1;
                miunsItem.price = action.payload.price;

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
                const removePrice = itemList.price * removeQuantity;

                return {
                    ...state,
                    orderList: state.orderList.filter(item => item.id !== action.payload.id),
                    totalQuantity: state.totalQuantity - removeQuantity,
                    totalAmount: state.totalAmount - removePrice,
                }
            }
        }
        default:
            return state;
    }
}
