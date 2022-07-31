import * as types from '../actions/auth/index';
import initialState from '../initialState';

export default function(state = initialState, action) {
  const isAuthUser = action.response;

  switch(action.type) {
    case types.LOGIN_USER_SUCCESS:
      return { ...state, isAuthUser };
    case types.LOGIN_USER_ERROR:
      return { ...state, isAuthUser };
    default:
      return state;
  }
};