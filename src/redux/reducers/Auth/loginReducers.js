import * as types from '../../../constants/index';
import initialState from '../../initialState';

export default function(state = initialState.loginReducers, action) {
  const isAuthUser = action.response;

  switch(action.type) {
    case types.LOGIN_USER_SUCCESS:
      return { ...state, isAuthUser,userdata:action.getuser};
    case types.LOGIN_USER_ERROR:
      return { ...state, isAuthUser: "error"};
    case types.LOGIN_USER_LOADING:
      return {...state, isAuthUser:"Loading"}
    default:
      return state;
  }
};