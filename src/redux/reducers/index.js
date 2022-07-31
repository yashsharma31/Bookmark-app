import auth_reducers from './auth_reducers'
import login_reducer from './login_reducer';
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  auth_reducers,login_reducer
});
export default rootReducer;