import { takeLatest } from 'redux-saga/effects';
import { registerSaga,loginSaga } from '../functions';
import * as types from '../../../../constants/index';
export default function* watchUserAuthentication() {
    yield takeLatest(types.REGISTER_USER, registerSaga);
    yield takeLatest(types.LOGIN_USER, loginSaga);
  }