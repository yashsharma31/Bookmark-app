import auth_reducers from './auth_reducers'
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  auth_reducers,
});
export default rootReducer;