import auth_reducers from './Auth/auth_reducers'
import login_reducer from './Auth/login_reducer';
import bookmark_reducer from './Bookmarks/index'
import { combineReducers } from "redux";
import folder_reducer from './Folders';

const rootReducer = combineReducers({
  auth_reducers,login_reducer,bookmark_reducer,folder_reducer
});
export default rootReducer;