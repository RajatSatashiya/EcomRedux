//import action types
import { add_Products, loading_toggle } from "../actionTypes";

//initial state
const initialState = {
  products: [],
  loading: false,
  error: false,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case add_Products:
      //   console.log(action.payload);
      return {
        ...state,
        products: action.payload,
        loading: false,
      };
    case loading_toggle:
      return {
        ...state,
        loading: !state.loading,
      };
    default:
      return state;
  }
};

export default productReducer;
