import * as types from "../../../../constants";
import { call, put } from "redux-saga/effects";
import {
  createFolder,
  DeleteFolder,
  getbaseBookmark,
  getbaseFolder,
  getBookmark,
  getFolder,
  renameFolder,
} from "../../../../services";
import { type } from "@testing-library/user-event/dist/type";
export function* CreateFolderWatcherFunction(action) {
  try {
    console.log(action);
    const response = yield call(createFolder, {
      name: action.payload.name,
      parentId: action.payload.parentId,
    });
    console.log(response);
    yield put({ type: types.CREATE_FOLDER_SUCCESS });
  } catch (e) {
    yield put({ type: types.CREATE_FOLDER_ERROR });
  }
}
export function* DeleteFolderWatcherFunction(action) {
  try {
    console.log(action);
    const response = yield call(DeleteFolder, {
      folderId: action.payload.folderId,
    });
    console.log(response);
    yield put({ type: types.DELETE_FOLDER_SUCCESS });
  } catch (e) {
    yield put({ type: types.DELETE_FOLDER_ERROR });
  }
}
export function* GetFolderWatcherFunction(action) {
  try {
    var responseFolder;
    const rootIds = [];
    const folders = {};
    responseFolder = yield call(getbaseFolder);
    responseFolder.forEach((element) => {
      const id = element.id;
      rootIds.push(id);
      folders[id] = element;
    });
    //responseBookmark = yield call(getbaseBookmark)
    yield put({
      type: types.READ_FOLDER_SUCCESS,
      payload: { folders, rootIds },
    });
  } catch (e) {
    yield put({ type: types.READ_FOLDER_ERROR });
  }
}
export function* GetChildrenWatcherFunction(action) {
  try {
    var response = yield call(getFolder, { folderId: action.payload });
    const childFolders = {};
    const childFolderIds = [];
    response.children.forEach((element) => {
      const id = element.id;
      childFolderIds.push(id);
      childFolders[id] = element;
    });
    yield put({
      type: types.READ_CURRENT_FOLDER_SUCCESS,
      payload: { parentId: action.payload, childFolders, childFolderIds },
    });
  } catch (error) {
    console.log(error)
    yield put({ type: types.READ_CURRENT_FOLDER_ERROR, payload: error });
  }
}
export function* RenameFolderWatcherFunction(action) {
  try {
    console.log(action);
    const response = yield call(renameFolder, {
      folderId: action.payload.folderId,
      name: action.payload.name,
    });
    console.log(response);
    yield put({ type: types.UPDATE_FOLDER_SUCCESS });
  } catch (e) {
    yield put({ type: types.UPDATE_FOLDER_ERROR });
  }
}
