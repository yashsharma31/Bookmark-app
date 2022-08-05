import * as types from '../../../constants';
import initialState from '../../initialState';

const folder_reducer = (state = initialState.folders, action) => {
    switch (action.type) {
        case types.CREATE_FOLDER_SUCCESS:
            console.log("user redux creating success");
            return { error: "", folders: Object.assign({}, action.payload) };
        case types.CREATE_FOLDER_ERROR:
            console.log("user redux creating fail");
            return Object.assign(Object.assign({}, state), { error: "failed to create folder" });
        case types.DELETE_FOLDER_SUCCESS:
            console.log("user redux delete success");
            return { error: "", folders: Object.assign({}, action.payload) };
        case types.DELETE_FOLDER_ERROR:
            console.log("user redux delete fail");
            return Object.assign(Object.assign({}, state), { error: "failed to delete folder" });
        case types.READ_FOLDER_SUCCESS:
            console.log("user redux.READ  success");
            return { error: "", folders: Object.assign({}, action.payload) };
        case types.READ_FOLDER_ERROR:
            console.log("user redux .READ fail");
            return Object.assign(Object.assign({}, state), { error: "failed to read folders" });
        case types.UPDATE_FOLDER_SUCCESS:
            console.log("user redux.UPDATE  success");
            return { error: "", folders: Object.assign({}, action.payload) };
        case types.UPDATE_FOLDER_ERROR:
            console.log("user redux .UPDATE fail");
            return Object.assign(Object.assign({}, state), { error: "failed to update folders" });
        default:
            return state;
    }
};
export default folder_reducer;