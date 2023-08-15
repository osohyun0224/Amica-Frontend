export const intialSignupState = {
  agreement: false,
  marketing: false,
  email: null,
  emailCheck: null,
  password: null,
  passwordCheck: null,
  name: null,
  nameCheck: null,
  phone: null,
  phoneCheck: null,
};

// check state
// null: 미입력
// true: 입력완료
// false: 잘못된 값

export function signupReducer(state, action) {
  switch (action.type) {
    case "setAgreement":
      return {
        ...state,
        agreement: action.payload,
      };
    case "setMarketing":
      return {
        ...state,
        marketing: action.payload,
      };
    case "setEmail":
      return {
        ...state,
        email: action.payload,
      };
    case "setEmailCheck":
      return {
        ...state,
        emailCheck: action.payload,
      };
    case "setPassword":
      return {
        ...state,
        password: action.payload,
      };
    case "setPasswordCheck":
      return {
        ...state,
        passwordCheck: action.payload,
      };
    case "setName":
      return {
        ...state,
        name: action.payload,
      };
    case "setNameCheck":
      return {
        ...state,
        nameCheck: action.payload,
      };
    case "setPhone":
      return {
        ...state,
        phone: action.payload,
      };
    case "setPhoneCheck":
      return {
        ...state,
        phoneCheck: action.payload,
      };
    default:
      console.error("[SignupReducer] Undefined action: " + action.type);
      return state;
  }
}
