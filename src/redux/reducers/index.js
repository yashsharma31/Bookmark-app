import authReducers from "./Auth/authReducers";
import loginReducers from "./Auth/loginReducers";
import bookmarkReducers from "./Bookmarks/index";
import logoutReducers from "./Auth/logoutReducers";
import { combineReducers } from "redux";
import folderReducer from "./Folders";
import getMeReducers from "./Auth/getMeReducers";
import * as types from "../../constants";

const appReducer = combineReducers({
  authReducers: authReducers,
  loginReducers: loginReducers,
  logoutReducers: logoutReducers,
  bookmarkReducers: bookmarkReducers,
  folderReducers: folderReducer,
  getMeReducers: getMeReducers,
});

const rootReducer = (state, action) => {
  if (action.type === types.LOGOUT_USER_SUCCESS) {
    return appReducer(undefined, action);
  }

  return appReducer(state, action);
};
export default rootReducer;
