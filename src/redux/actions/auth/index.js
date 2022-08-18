import * as types from "../../../constants/index";

export const registerUserAction = (user) => {
  return {
    type: types.REGISTER_USER,
    user,
  };
};

export const loginUserAction = (user) => {
  return {
    type: types.LOGIN_USER,
    user,
  };
};
export const loginUserLoadingAction = () => {
  return {
    type: types.LOGIN_USER_LOADING,
  };
};
export const getMeAction = () => {
  return {
    type: types.GETME_USER_LOADING,
  };
};
export const logoutAction = () => {
  return {
    type: types.LOGOUT_USER,
  };
};
