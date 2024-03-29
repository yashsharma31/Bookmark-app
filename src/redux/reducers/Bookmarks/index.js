import * as types from "../../../constants";
import initialState from "../../initialState";

const bookmarkReducers = (state = initialState.bookmarkReducers, action) => {
  switch (action.type) {
    case types.CREATE_BOOKMARK:
      return { ...state, createBookmark: "Creating" };
    case types.CREATE_BOOKMARK_SUCCESS:
      console.log("creating success", action.response);
      var allBookmarks = state.bookmarks;
      allBookmarks.push(action.response);
      return {
        ...state,
        error: "",
        createBookmark: "Done",
        bookmarks: allBookmarks,
      };
    case types.CREATE_BOOKMARK_ERROR:
      console.log("user redux creating fail");
      return { ...state, createBookmark: "Failed" };
    case types.DELETE_BOOKMARK_SUCCESS:
      console.log("user redux delete success");
      return { error: "", bookmarks: Object.assign({}, action.payload) };
    case types.DELETE_BOOKMARK_ERROR:
      console.log("user redux delete fail");
      return Object.assign(Object.assign({}, state), {
        error: "failed to delete bookmark",
      });
    case types.READ_BOOKMARK_LOADING:
      var currentFolderId, currentFolderName;
      console.log("REad_book", action.payload);
      if (typeof action.payload == "undefined") {
        currentFolderId = "Root";
        currentFolderName = "Root";
      } else {
        currentFolderId = action.payload.folderId;
        currentFolderName = action.payload.folderName;
      }
      return {
        ...state,
        error: "",
        status: "Loading",
        foldersId: currentFolderId,
        folderName: currentFolderName,
      };
    case types.READ_BOOKMARK_SUCCESS:
      console.log("response:", action);
      console.log("user redux.READ  success");
      return {
        ...state,
        error: "",
        status: "Sucess",
        bookmarks: action.response,
      };
    case types.READ_BOOKMARK_ERROR:
      console.log("user redux .READ fail");
      return Object.assign(Object.assign({}, state), {
        ...state,
        error: "failed to read bookmarks",
        status: "Failed",
      });
    case types.PATCH_BOOKMARK_SUCCESS:
      console.log("user redux.PATCH  success");
      return { error: "", bookmarks: Object.assign({}, action.payload) };
    case types.PATCH_BOOKMARK_ERROR:
      console.log("user redux .PATCH fail");
      return Object.assign(Object.assign({}, state), {
        error: "failed to.PATCH bookmarks",
      });
    case types.TOGGLE_BOOKMARK_SUCCESS:
      console.log("user redux.TOGGLE  success");
      return { error: "", bookmarks: Object.assign({}, action.payload) };
    case types.TOGGLE_BOOKMARK_ERROR:
      console.log("user redux .TOGGLE fail");
      return Object.assign(Object.assign({}, state), {
        error: "failed to.TOGGLE bookmarks",
      });
    case types.CHANGE_DETAILS_BOOKMARK_SUCCESS:
      console.log("user redux.CHANGE_DETAILS  success");
      return { error: "", bookmarks: Object.assign({}, action.payload) };
    case types.CHANGE_DETAILS_BOOKMARK_ERROR:
      console.log("user redux .CHANGE_DETAILS fail");
      return Object.assign(Object.assign({}, state), {
        error: "failed to.CHANGE_DETAILS bookmarks",
      });
    default:
      return state;
  }
};
export default bookmarkReducers;
