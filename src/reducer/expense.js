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
      const list = [...action.payload];
      const latest = list[list.length - 1];

      return {
        ...state,
        calenderlist: list,
        selectedYear: latest.year,
        selectedMonth: latest.month,
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
      return {
        ...state,
        expenseList: [],
        selectedYear: action.payload.year,
        selectedMonth: action.payload.month,
        selectedDate: null,
      };
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
