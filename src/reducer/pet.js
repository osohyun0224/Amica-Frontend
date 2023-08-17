export const intialPetState = {
  petList: [],
  orderList: [],
  pet: null,
  reload: true,
};

export function petReducer(state, action) {
  switch (action.type) {
    case "loadPets":
      return {
        ...state,
        petList: action.payload,
        pet: action.payload[0],
        reload: false,
      };
    case "loadOrders":
      return {
        ...state,
        orderList: action.payload,
      };
    case "select":
      return {
        ...state,
        pet: action.payload,
      };
    case "reload":
      return {
        ...state,
        reload: true,
      };
    default:
      console.error("[PetReducer] Undefined action: " + action.type);
      return state;
  }
}
