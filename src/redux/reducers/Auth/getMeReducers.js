import * as types from '../../../constants/index';
import initialState from '../../initialState';

function authReducers(state=initialState.getMeReducers, action){
    let userData = action.response;
    switch(action.type) {
      case types.GETME_USER_LOADING:
        return {...state, userData:"Loading"}
      case types.GETME_USER_SUCCESS:
        return { ...state, userData};
      case types.GETME_USER_ERROR:
        return { ...state, userData };
      default:
        return state;
    }
  }

  export default authReducers;