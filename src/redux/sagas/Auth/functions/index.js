import { put, call } from "redux-saga/effects";
import {
  registerUserService,
  loginUserService,
  getmeService,
} from "../../../../services/AuthRequests/index";
import * as types from "../../../../constants/index";
export function* registerSaga(payload) {
  try {
    yield put({ type: types.REGISTER_USER_LOADING });
    const response = yield call(registerUserService, payload);
    yield put({ type: types.REGISTER_USER_SUCCESS, response });
  } catch (error) {
    yield put({ type: types.REGISTER_USER_ERROR, error });
  }
}
export function* loginSaga(payload) {
  try {
    const response = yield call(loginUserService, payload);
    yield put({ type: types.LOGIN_USER_SUCCESS, response });
  } catch (error) {
    yield put({ type: types.LOGIN_USER_ERROR, error });
  }
}
export function* getmeServiceSaga() {
  try {
    const response = yield call(getmeService);
    yield put({ type: types.GETME_USER_SUCCESS, response });
  } catch (error) {
    yield put({ type: types.GETME_USER_ERROR, error });
  }
}
