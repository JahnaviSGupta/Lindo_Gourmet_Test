import { createStore } from "redux";

const initialState = {
  rowsData: [
    // Order: Images, Product, Color, Size, Prize, Total
    ["1.jpg", "Black Teas", "#E4BC87", "Small", "120"],
    ["2.jpg", "Green Teas", "#E4BC87", "Small", "38"],
    ["3.jpg", "White Teas", "#E4BC87", "Medium", "28"],
    ["4.jpg", "Oolong Teas", "#E4BC87", "Small", "20"],
    ["5.jpg", "Tisanes-caffeine free", "#E4BC87", "Big", "150"],
    ["6.jpg", "Red Teas", "#E4BC87", "Small", "25"],
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "REMOVE_ROW":
      return {
        ...state,
        rowsData: state.rowsData.filter(
          (rowData) => rowData !== action.payload
        ),
      };
    case "ADD_ROW":
      return {
        ...state,
        rowsData: [...state.rowsData, action.payload],
      };
    case "ADD_ROWS":
      return {
        ...state,
        rowsData: [...state.rowsData, ...action.payload],
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
