import auth_reducers from './Auth/auth_reducers'
import login_reducer from './Auth/login_reducer';
import bookmark_reducer from './Bookmarks/index'
import { combineReducers } from "redux";
import { Navigate } from 'react-router-dom';
import {removeDataFromLocalStorage} from "../../services/LocalStorage"
import folder_reducer from './Folders';
import getme_reducer from './Auth/getme_reducer'
import * as types from "../../constants"

const appReducer = combineReducers({
  auth_reducers,login_reducer,bookmark_reducer,folder_reducer,getme_reducer
})

const rootReducer = (state, action) => {
  if (action.type === types.LOGOUT_USER) {
    console.log("deleting auth")
    
    removeDataFromLocalStorage()
    
    return <Navigate to="/"/>,appReducer(undefined, action)
  }

  return appReducer(state, action)
}
export default rootReducer;