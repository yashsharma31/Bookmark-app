export var authConstants;
(function (authConstants) {
    authConstants["LOGIN_REDUX"] = "login_redux";
    authConstants["LOGOUT_REDUX"] = "logout_redux";
    authConstants["SIGNIN_REDUX"] = "signin_redux";
    authConstants["GETME_REDUX"] = "getme_redux";
})(authConstants || (authConstants = {}));
export var authSagaConstants;
(function (authSagaConstants) {
    authSagaConstants["LOGIN_SAGA"] = "login_saga";
    authSagaConstants["LOGOUT_SAGA"] = "logout_saga";
    authSagaConstants["SIGNIN_SAGA"] = "signin_saga";
    authSagaConstants["GETME_SAGA"] = "getme_saga";
})(authSagaConstants || (authSagaConstants = {}));