import React from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router";
import { useSelector } from "react-redux";

const AuthRoute = props => {
  const isAuthUser = useSelector((state)=> state.login_reducer.isAuthUser);
  console.log("isAuthUser",isAuthUser)
  const {type} = props;
  console.log(type)
  if (type === "guest" && isAuthUser)return <Redirect to="/bookmarkpage" />;
  else if (type === "private" && isAuthUser) return <Redirect to="/" />;

  return <Route {...props} />;
};

const mapStateToProps = ({ isAuthUser }) => ({
  isAuthUser
});

export default connect(mapStateToProps)(AuthRoute);