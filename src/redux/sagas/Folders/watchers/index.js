import * as types from "../../../../constants";

import { all, takeLatest, takeEvery, fork } from "redux-saga/effects";
import {
  CreateFolderWatcherFunction,
  DeleteFolderWatcherFunction,
  GetChildrenWatcherFunction,
  GetFolderWatcherFunction,
  RenameFolderWatcherFunction,
} from "../functions";

function* CreateFolderWatcher() {
  yield takeLatest(types.CREATE_FOLDER, CreateFolderWatcherFunction);
}
function* DeleteFolderWatcher() {
  yield takeLatest(types.DELETE_FOLDER, DeleteFolderWatcherFunction);
}
function* RenameFolderWatcher() {
  yield takeLatest(types.UPDATE_FOLDER, RenameFolderWatcherFunction);
}
function* GetFolderWatcher() {
  yield takeEvery(types.READ_FOLDER, GetFolderWatcherFunction);
}
function* GetChildrenWatcher() {
  yield takeEvery(types.READ_CURRENT_FOLDER, GetChildrenWatcherFunction);
}

export default function* folderSagas() {
  yield all([
    fork(CreateFolderWatcher),
    fork(DeleteFolderWatcher),
    fork(GetFolderWatcher),
    fork(RenameFolderWatcher),
    fork(GetChildrenWatcher),
  ]);
}
