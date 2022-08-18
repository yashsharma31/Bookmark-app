import authReducers from "./Auth/authReducers";
import loginReducers from "./Auth/loginReducers";
import bookmarkReducers from "./Bookmarks/index";
import { combineReducers } from "redux";
import { removeDataFromLocalStorage } from "../../services/LocalStorage";
import folderReducer from "./Folders";
import getMeReducers from "./Auth/getMeReducers";
import * as types from "../../constants";

const appReducer = combineReducers({
  authReducers: authReducers,
  loginReducers: loginReducers,
  bookmarkReducers: bookmarkReducers,
  folderReducers: folderReducer,
  getMeReducers: getMeReducers,
});

const rootReducer = (state, action) => {
  if (action.type === types.LOGOUT_USER) {
    console.log("deleting auth");

    removeDataFromLocalStorage();

    return appReducer(undefined, action);
  }

  return appReducer(state, action);
};
export default rootReducer;
