//import action types
import { loading_toggle } from "../actionTypes";

//initial state
const initialState = {
  loading: false,
  error: false,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
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
