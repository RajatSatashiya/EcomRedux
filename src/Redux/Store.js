import { legacy_createStore as createStore, combineReducers } from "redux";
import authReducer from "./Reducer/authReducer";
import productReducer from "./Reducer/productReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  product: productReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
