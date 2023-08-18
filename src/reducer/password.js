export const intialPasswordState = {
  currentPassword: null,
  currentPasswordCheck: null,
  password: null,
  passwordCheck: null,
};

// check state
// null: 미입력
// true: 입력완료
// false: 잘못된 값

export function passwordReducer(state, action) {
  switch (action.type) {
    case "setCurrentPassword":
      return {
        ...state,
        currentPassword: action.payload,
      };
    case "setPassword":
      return {
        ...state,
        password: action.payload,
      };
    case "setCurrentPasswordCheck":
      return {
        ...state,
        currentPasswordCheck: action.payload,
      };
    case "setPasswordCheck":
      return {
        ...state,
        passwordCheck: action.payload,
      };
    default:
      console.error("[PasswordReducer] Undefined action: " + action.type);
      return state;
  }
}
