import React from "react";
import { connect } from "react-redux";
import { Navigate, Outlet, Route ,useLocation} from "react-router-dom";
import { useSelector } from "react-redux";

const AuthRoute = ({
  Element,
  type
}) => {
  const isAuthUser = useSelector((state)=> state.login_reducer.isAuthUser);
  console.log("isAuthUser",isAuthUser)
  if (type === "guest" && isAuthUser)return <Navigate to="/bookmarkpage"  />; 
  else if (type === "private" && !isAuthUser) return <Navigate to="/" />;
  console.log(Element)
  return <Element/>;
};

const mapStateToProps = ({ isAuthUser }) => ({
  isAuthUser
});

export default connect(mapStateToProps)(AuthRoute);

