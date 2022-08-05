import { fork, all } from 'redux-saga/effects';
import watchUserAuthentication from './Auth/watchers/watchers';
import bookmarkSagas from './Bookmarks/watchers';
import folderSagas from './Folders/watchers';

export function* startForman() {
  yield all[fork(watchUserAuthentication),fork(bookmarkSagas),fork(folderSagas)];
}