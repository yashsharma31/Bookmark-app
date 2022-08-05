import * as types from '../../../../constants';
import { call, put } from 'redux-saga/effects';
import { changeDetailsBookmark, createBookmark, DeleteBookmark, getBookmark, patchBookmark, toggleFavBookmark } from '../../../../services';
export function* CreateBookmarkWatcherFunction(action) {
    try {
        console.log('action=',action);
        console.log("parameters-name",action.payload.name)
        console.log("parameters-url",action.payload.url)
        const response = yield call(createBookmark, { name: action.payload.name, url: action.payload.url });
        console.log('response=',response);
        yield put({ type: types.CREATE_BOOKMARK_SUCCESS , payload:action.payload});
    }
    catch (e) {
        yield put({ type: types.CREATE_BOOKMARK_ERROR });
    }
}
export function* DeleteBookmarkWatcherFunction(action) {
    try {
        console.log(action);
        const response = yield call(DeleteBookmark, { bookmarkId: action.payload.bookmarkId });
        console.log(response);
        yield put({ type: types.DELETE_BOOKMARK_SUCCESS });
    }
    catch (e) {
        yield put({ type: types.DELETE_BOOKMARK_ERROR });
    }
}
export function* GetBookmarkWatcherFunction(action) {
    try {
        console.log(action);
        const response = yield call(getBookmark, { folderId: action.payload.folderId });
        console.log(response);
        yield put({ type: types.READ_BOOKMARK_SUCCESS });
    }
    catch (e) {
        yield put({ type: types.READ_BOOKMARK_ERROR });
    }
}
export function* patchBookmarkWatcherFunction(action) {
    try {
        console.log(action);
        const response = yield call(patchBookmark, { bookmarkId: action.payload.bookmarkId, folderId: action.payload.folderId });
        console.log(response);
        yield put({ type: types.PATCH_BOOKMARK_SUCCESS});
    }
    catch (e) {
        yield put({ type: types.PATCH_BOOKMARK_ERROR });
    }
}
export function* ToggleFavBookmarkWatcherFunction(action) {
    try {
        console.log(action);
        const response = yield call(toggleFavBookmark, { bookmarkId: action.payload.bookmarkId });
        console.log(response);
        yield put({ type: types.TOGGLE_BOOKMARK_SUCCESS });
    }
    catch (e) {
        yield put({ type: types.TOGGLE_BOOKMARK_ERROR });
    }
}
export function* changeDetailsBookmarkWatcherFunction(action) {
    try {
        console.log(action);
        const response = yield call(changeDetailsBookmark, { bookmarkId: action.payload.bookmarkId, name: action.payload.name, url: action.payload.url });
        console.log(response);
        yield put({ type: types.CHANGE_DETAILS_BOOKMARK_SUCCESS });
    }
    catch (e) {
        yield put({ type: types.CHANGE_DETAILS_BOOKMARK_ERROR });
    }
}