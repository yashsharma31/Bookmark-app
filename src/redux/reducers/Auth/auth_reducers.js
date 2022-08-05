import * as types from '../../../constants/index';
import initialState from '../../initialState';

function auth_reducers(state=initialState.auth_reducers, action){
    let isAuthUser = action.response;
    switch(action.type) {
      case types.REGISTER_USER_SUCCESS:
        return { ...state, isAuthUser};
      case types.REGISTER_USER_ERROR:
        return { ...state, isAuthUser };
      default:
        return state;
    }
  }

  export default auth_reducers;