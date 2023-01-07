import { login_success, login_failure, logout } from "./actionTypes";

export const loginUser = (token) => ({
  type: login_success,
  payload: token,
});

export const logoutUser = () => ({
  type: logout,
});
