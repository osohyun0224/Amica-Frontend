export const intialExpenseState = {
  calenderlist: [],
  expenseList: [],
  selectedYear: null,
  selectedMonth: null,
  selectedDate: null,
};

export function expenseReducer(state, action) {
  switch (action.type) {
    case "loadCalenders": {
      return {
        ...state,
        calenderlist: [...action.payload],
        selectedYear: null,
        selectedMonth: null,
        selectedDate: null,
      };
    }
    case "loadExpenses": {
      return {
        ...state,
        expenseList: [...action.payload.list],
        selectedYear: action.payload.year,
        selectedMonth: action.payload.month,
        selectedDate: null,
      };
    }
    case "selectCalender": {
      if (
        action.payload.year === state.selectedYear &&
        action.payload.month === state.selectedMonth
      ) {
        return state;
      } else {
        return {
          ...state,
          expenseList: [],
          selectedYear: action.payload.year,
          selectedMonth: action.payload.month,
          selectedDate: null,
        };
      }
    }
    case "selectDate":
      return {
        ...state,
        selectedDate: action.payload,
      };
    case "clearDate":
      return {
        ...state,
        selectedDate: null,
      };
    default:
      console.error("[ExpenseReducer] Undefined action: " + action.type);
      return state;
  }
}
