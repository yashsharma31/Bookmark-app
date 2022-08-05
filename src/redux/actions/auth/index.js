import * as types from '../../../constants/index'

export const registerUserAction = (user) => {
    return {
      type: types.REGISTER_USER,
      user
    }
  };

export const loginUserAction = (user) => {
  return {
    type: types.LOGIN_USER,
    user
  }
};