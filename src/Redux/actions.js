import {
  login_success,
  login_failure,
  logout,
  loading_toggle,
  add_Products,
} from "./actionTypes";

export const loginUser = (token) => ({
  type: login_success,
  payload: token,
});

export const logoutUser = () => ({
  type: logout,
});

export const loadingToggle = () => ({
  type: loading_toggle,
});

export const loginFailuer = () => ({
  type: login_failure,
});

export const addProducts = (payload) => ({
  type: add_Products,
  payload,
});
