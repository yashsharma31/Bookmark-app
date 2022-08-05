import * as types from '../../../constants/index'

export const createfolder = (folder) => {
    return {
      type: types.CREATE_FOLDER,
      folder
    }
  };

export const readfolder = () => {
  return {
    type: types.READ_FOLDER
  }
};
export const deletefolder = (folder) => {
    return {
      type: types.DELETE_FOLDER,
      folder
    }
  };
export const updatefolder = (folder) => {
    return {
      type: types.UPDATE_FOLDER,
      folder
    }
  };