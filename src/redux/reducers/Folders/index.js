import * as types from "../../../constants";
import initialState from "../../initialState";

const folderReducers = (state = initialState.folderReducers, action) => {
  switch (action.type) {
    case types.CREATE_FOLDER_SUCCESS:
      console.log("user redux creating success");
      return { error: "", folders: Object.assign({}, action.payload) };
    case types.CREATE_FOLDER_ERROR:
      console.log("user redux creating fail");
      return Object.assign(Object.assign({}, state), {
        error: "failed to create folder",
      });
    case types.DELETE_FOLDER_SUCCESS:
      console.log("user redux delete success");
      return { error: "", folders: Object.assign({}, action.payload) };
    case types.DELETE_FOLDER_ERROR:
      console.log("user redux delete fail");
      return Object.assign(Object.assign({}, state), {
        error: "failed to delete folder",
      });
    case types.READ_FOLDER:
      return {
        ...state,
        isLoading: true,
      };
    case types.READ_FOLDER_SUCCESS:
      //console.log("user redux.READ  success",action);
      return {
        ...state,
        error: "",
        ...action.payload,
        isLoading: false,
      };
    case types.READ_FOLDER_ERROR:
      console.log("user redux .READ fail");
      return {
        ...state,
        error: "failed to read folders",
        isLoading: false,
      };
    case types.READ_CURRENT_FOLDER:
      return {
        ...state,
        isLoadingChildren: action.payload,
        parentId: action.payload,
      };
    case types.READ_CURRENT_FOLDER_SUCCESS:
      //console.log("user redux.READ  success",action);
      const UpdatedFolders = {
        ...state.folders,
        ...action.payload.childFolders,
      };
      UpdatedFolders[action.payload.parentId] = {
        ...UpdatedFolders[action.payload.parentId],
        childrenIds: action.payload.childFolderIds,
      };
      return { ...state, isLoadingChildren: false, folders: UpdatedFolders };
    case types.READ_CURRENT_FOLDER_ERROR:
      console.log("user redux .READ fail");
      return { ...state, error: "failed to read folder children", isLoadingChildren: false };
      
    case types.UPDATE_FOLDER_SUCCESS:
      console.log("user redux.UPDATE  success");
      return { error: "", folders: Object.assign({}, action.payload) };
    case types.UPDATE_FOLDER_ERROR:
      console.log("user redux .UPDATE fail");
      return Object.assign(Object.assign({}, state), {
        error: "failed to update folders",
      });
    default:
      return state;
  }
};
export default folderReducers;
