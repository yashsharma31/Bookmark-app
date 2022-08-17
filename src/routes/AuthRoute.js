import React from "react";
import { connect } from "react-redux";
import { Navigate, Outlet, Route ,useLocation} from "react-router-dom";
import { useSelector } from "react-redux";
import { getDataFromLocalStorage } from "../services/LocalStorage";

const AuthRoute = ({
  Element,
  type
}) => {
  const token = getDataFromLocalStorage({ key: '@authToken' });
  //console.log("here is token",token)
  const isAuthUser = useSelector((state)=> state.login_reducer.isAuthUser);
  //console.log("isAuthUser",isAuthUser)
  if (type === "guest" && token!= null)return <Navigate to="/bookmarkpage"  />; 
  else if (type === "private" && token==null) return <Navigate to="/" />;
  //console.log(Element)
  return <Element/>;
};

const mapStateToProps = ({ isAuthUser }) => ({
  isAuthUser
});

export default connect(mapStateToProps)(AuthRoute);

