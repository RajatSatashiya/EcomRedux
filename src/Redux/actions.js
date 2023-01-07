import {
  login_success,
  login_failure,
  logout,
  loading_toggle,
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
