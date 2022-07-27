import { authConstants } from '../../../constants';
import { put, call } from 'redux-saga/effects';
import { registerUserService } from '../../../services/AuthRequests/index';
import * as types from '../../actions/auth/index'
export function* LoginWatcherFunction() {
    yield put({ type: authConstants.LOGIN_REDUX });
}
export function* logoutWatcherFunction() {
    yield put({ type: authConstants.LOGOUT_REDUX });
}
export function* signinWatcherFunction() {
    yield put({ type: authConstants.SIGNIN_REDUX });
}
export function* getmeWatcherFunction() {
    yield put({ type: authConstants.GETME_REDUX });
}
export function* registerSaga(payload) {
    try {
      const response = yield call(registerUserService, payload);
      yield [
        put({ type: types.REGISTER_USER_SUCCESS, response })
      ];
    } catch(error) {
      yield put({ type: types.REGISTER_USER_ERROR, error });
    }
  }