import * as types from "../../../constants/index";

export const createFolder = (folder) => {
  return {
    type: types.CREATE_FOLDER,
    payload: folder,
  };
};

export const readFolder = () => {
  return {
    type: types.READ_FOLDER,
  };
};
export const readChildrenFolder = (folderid) => {
  return {
    type: types.READ_CURRENT_FOLDER,
    payload: folderid
  };
};
export const deleteFolder = (folder) => {
  return {
    type: types.DELETE_FOLDER,
    payload: folder,
  };
};
export const updateFolder = (folder) => {
  return {
    type: types.UPDATE_FOLDER,
    payload: folder,
  };
};
