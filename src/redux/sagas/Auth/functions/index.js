import { put, call } from 'redux-saga/effects';
import { registerUserService,loginUserService } from '../../../../services/AuthRequests/index';
import { getbaseFolder } from '../../../../services/Folders/index'
import * as types from '../../../../constants/index'
export function* registerSaga(payload) {
    try {
      const response = yield call(registerUserService, payload);
      yield put({ type: types.REGISTER_USER_SUCCESS, response });
    } catch(error) {
      yield put({ type: types.REGISTER_USER_ERROR, error });
    }
  }
export function* loginSaga(payload) {
  try {
    const response = yield call(loginUserService, payload);
    const folders = yield call(getbaseFolder);
    console.log('login',response)
    yield put({ type: types.LOGIN_USER_SUCCESS, response ,folders});
  } catch(error) {
    console.log('login',error)
    yield put({ type: types.LOGIN_USER_ERROR, error })
  }
}