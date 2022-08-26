import { takeLatest } from "redux-saga/effects";
import { registerSaga, loginSaga, getmeServiceSaga,logoutServiceSaga } from "../functions/index";
import * as types from "../../../../constants/index";
export default function* watchUserAuthentication() {
  yield takeLatest(types.REGISTER_USER, registerSaga);
  yield takeLatest(types.LOGIN_USER_LOADING, loginSaga);
  yield takeLatest(types.GETME_USER_LOADING, getmeServiceSaga);
  yield takeLatest(types.LOGOUT_USER, logoutServiceSaga);
}
