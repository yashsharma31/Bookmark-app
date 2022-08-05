import * as types from '../../../../constants';
import { all, takeLatest, fork } from 'redux-saga/effects';
import { changeDetailsBookmarkWatcherFunction, CreateBookmarkWatcherFunction, DeleteBookmarkWatcherFunction, GetBookmarkWatcherFunction, patchBookmarkWatcherFunction, ToggleFavBookmarkWatcherFunction } from '../functions';
function* CreateBookmarkWatcher() {
    yield takeLatest(types.CREATE_BOOKMARK, CreateBookmarkWatcherFunction);
}
function* DeleteBookmarkWatcher() {
    yield takeLatest(types.DELETE_BOOKMARK, DeleteBookmarkWatcherFunction);
}
function* GetBookmarkWatcher() {
    yield takeLatest(types.READ_BOOKMARK, GetBookmarkWatcherFunction);
}
function* PatchBookmarkWatcher() {
    yield takeLatest(types.PATCH_BOOKMARK, patchBookmarkWatcherFunction);
}
function* ToggleFavBookmarkWatcher() {
    yield takeLatest(types.TOGGLE_BOOKMARK, ToggleFavBookmarkWatcherFunction);
}
function* changeDetailsBookmarkWatcher() {
    yield takeLatest(types.CHANGE_DETAILS_BOOKMARK, changeDetailsBookmarkWatcherFunction);
}
export default function* bookmarkSagas() {
    yield all([fork(CreateBookmarkWatcher),
        fork(DeleteBookmarkWatcher), fork(GetBookmarkWatcher), fork(PatchBookmarkWatcher),
        fork(ToggleFavBookmarkWatcher), fork(changeDetailsBookmarkWatcher)]);
}