import * as types from '../../../constants';
import initialState from '../../initialState';

const bookmark_reducer = (state = initialState.bookmark_reducers, action) => {
    //console.log(action)
    switch (action.type) {
        case types.CREATE_BOOKMARK_SUCCESS:
            console.log("user redux creating success");
            console.log("creating success",action.payload);
            return { error: "", bookmarks: Object.assign({}, action.response.data) };
        case types.CREATE_BOOKMARK_ERROR:
            console.log("user redux creating fail");
            return Object.assign(Object.assign({}, state), { error: "failed to create bookmark" });
        case types.DELETE_BOOKMARK_SUCCESS:
            console.log("user redux delete success");
            return { error: "", bookmarks: Object.assign({}, action.payload) };
        case types.DELETE_BOOKMARK_ERROR:
            console.log("user redux delete fail");
            return Object.assign(Object.assign({}, state), { error: "failed to delete bookmark" });
        case types.READ_BOOKMARK_LOADING:
            return{ error: "", bookmarks: "Loading" }
        case types.READ_BOOKMARK_SUCCESS:
            console.log("response:",action)
            console.log("user redux.READ  success");
            return { error: "", bookmarks: action.response };
        case types.READ_BOOKMARK_ERROR:
            console.log("user redux .READ fail");
            return Object.assign(Object.assign({}, state), { error: "failed to read bookmarks" });
        case types.PATCH_BOOKMARK_SUCCESS:
            console.log("user redux.PATCH  success");
            return { error: "", bookmarks: Object.assign({}, action.payload) };
        case types.PATCH_BOOKMARK_ERROR:
            console.log("user redux .PATCH fail");
            return Object.assign(Object.assign({}, state), { error: "failed to.PATCH bookmarks" });
        case types.TOGGLE_BOOKMARK_SUCCESS:
            console.log("user redux.TOGGLE  success");
            return { error: "", bookmarks: Object.assign({}, action.payload) };
        case types.TOGGLE_BOOKMARK_ERROR:
            console.log("user redux .TOGGLE fail");
            return Object.assign(Object.assign({}, state), { error: "failed to.TOGGLE bookmarks" });
        case types.CHANGE_DETAILS_BOOKMARK_SUCCESS:
            console.log("user redux.CHANGE_DETAILS  success");
            return { error: "", bookmarks: Object.assign({}, action.payload) };
        case types.CHANGE_DETAILS_BOOKMARK_ERROR:
            console.log("user redux .CHANGE_DETAILS fail");
            return Object.assign(Object.assign({}, state), { error: "failed to.CHANGE_DETAILS bookmarks" });
        default:
            return state;
    }
};
export default bookmark_reducer;