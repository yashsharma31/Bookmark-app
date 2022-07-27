import { authSagaConstants } from '../../../constants';
import { takeLatest } from 'redux-saga/effects';
import { registerSaga } from '../functions';
import { getmeWatcherFunction, LoginWatcherFunction, logoutWatcherFunction, signinWatcherFunction } from '../functions';
import * as types from '../../actions/auth';
export function* LoginWatcher() {
    yield takeLatest(authSagaConstants.LOGIN_SAGA, LoginWatcherFunction);
}
export function* logoutWatcher() {
    yield takeLatest(authSagaConstants.LOGOUT_SAGA, logoutWatcherFunction);
}
export function* signinWatcher() {
    yield takeLatest(authSagaConstants.SIGNIN_SAGA, signinWatcherFunction);
}
export function* getmeWatcher() {
    yield takeLatest(authSagaConstants.GETME_SAGA, getmeWatcherFunction);
}
export default function* watchUserAuthentication() {
    yield takeLatest(types.REGISTER_USER, registerSaga);
  }