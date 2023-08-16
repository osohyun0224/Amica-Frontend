export const intialPetState = {
  petList: [],
  orderList: [],
  pet: null,
};

export function petReducer(state, action) {
  switch (action.type) {
    case "loadPets": {
      return {
        ...state,
        petList: action.payload,
        pet: action.payload[0],
      };
    }
    case "loadOrders": {
      return {
        ...state,
        orderList: action.payload,
      };
    }
    case "select": {
      return {
        ...state,
        pet: action.payload,
      };
    }
    default:
      console.error("[PetReducer] Undefined action: " + action.type);
      return state;
  }
}
