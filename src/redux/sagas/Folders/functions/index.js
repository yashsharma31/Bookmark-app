import * as types from '../../../../constants';
import { call, put } from 'redux-saga/effects';
import { createFolder, DeleteFolder, getFolder, renameFolder } from '../../../../services';
export function* CreateFolderWatcherFunction(action) {
    try {
        console.log(action);
        const response = yield call(createFolder, { name: action.payload.name, parentId: action.payload.parentId });
        console.log(response);
        yield put({ type: types.CREATE_FOLDER_SUCCESS });
    }
    catch (e) {
        yield put({ type: types.CREATE_FOLDER_ERROR });
    }
}
export function* DeleteFolderWatcherFunction(action) {
    try {
        console.log(action);
        const response = yield call(DeleteFolder, { folderId: action.payload.folderId });
        console.log(response);
        yield put({ type: types.DELETE_FOLDER_SUCCESS });
    }
    catch (e) {
        yield put({ type: types.DELETE_FOLDER_ERROR });
    }
}
export function* GetFolderWatcherFunction(action) {
    try {
        console.log(action);
        const response = yield call(getFolder, { folderId: action.payload.folderId });
        console.log(response);
        yield put({ type: types.READ_FOLDER_SUCCESS });
    }
    catch (e) {
        yield put({ type: types.READ_FOLDER_ERROR });
    }
}
export function* RenameFolderWatcherFunction(action) {
    try {
        console.log(action);
        const response = yield call(renameFolder, { folderId: action.payload.folderId, name: action.payload.name });
        console.log(response);
        yield put({ type: types.UPDATE_FOLDER_SUCCESS });
    }
    catch (e) {
        yield put({ type: types.UPDATE_FOLDER_ERROR });
    }
}
