import { Navigate } from "react-router";
import * as types from "../../../constants/index";
import initialState from "../../initialState";

export default function (state = initialState.logoutReducers, action) {
  const status = action.response;
  switch (action.type) {
    case types.LOGOUT_USER:
      return { ...state, status: "Loading" };
    case types.LOGOUT_USER_SUCCESS:
      <Navigate to="/"/>
      return { ...state, status: status };
    case types.LOGOUT_USER_ERROR:
      return { ...state, status: status };
    default:
      return state;
  }
}
