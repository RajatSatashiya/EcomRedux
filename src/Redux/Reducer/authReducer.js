//import action types
import { login_success, login_failure, logout } from "../actionTypes";

//initial state
const initialState = {
  isAuth: false,
  token: "",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case login_success:
      return {
        ...state,
        isAuth: true,
        token: action.payload,
      };

    case logout:
      return {
        ...state,
        isAuth: false,
        token: "",
      };
    default:
      return state;
  }
};

export default authReducer;
