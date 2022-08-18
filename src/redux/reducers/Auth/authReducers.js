import * as types from '../../../constants/index';
import initialState from '../../initialState';

function authReducers(state=initialState.authReducer, action){
    let isAuthUser = action.response;
    switch(action.type) {
      case types.REGISTER_USER_LOADING:
        return {...state, isAuthUser:"Loading"}
      case types.REGISTER_USER_SUCCESS:
        return { ...state, isAuthUser};
      case types.REGISTER_USER_ERROR:
        return { ...state, isAuthUser };
      default:
        return state;
    }
  }

  export default authReducers;