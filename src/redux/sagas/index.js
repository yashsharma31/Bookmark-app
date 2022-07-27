import { fork } from 'redux-saga/effects';
import watchUserAuthentication from './watchers/watchers';

export function* startForman() {
  yield fork(watchUserAuthentication);
}