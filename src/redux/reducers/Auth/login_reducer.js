import * as types from '../../../constants/index';
import initialState from '../../initialState';

export default function(state = initialState.login_reducer, action) {
  const isAuthUser = action.response;
  console.log(action)

  switch(action.type) {
    case types.LOGIN_USER_SUCCESS:
      return { ...state, isAuthUser , folders : action.folders};
    case types.LOGIN_USER_ERROR:
      return { ...state, isAuthUser };
    default:
      return state;
  }
};