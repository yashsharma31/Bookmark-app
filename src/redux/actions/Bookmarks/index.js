import * as types from '../../../constants/index'

export const createbookmark = (bookmark) => {
    return {
      type: types.CREATE_BOOKMARK,
      payload:bookmark
    }
  };

export const readbookmark = (bookmark) => {
  return {
    type: types.READ_BOOKMARK,
    payload:bookmark
  }
};
export const deletebookmark = (bookmark) => {
    return {
      type: types.DELETE_BOOKMARK,
      payload:bookmark
    }
  };

export const patchbookmark = (bookmark) => {
  return {
    type: types.PATCH_BOOKMARK,
    payload:bookmark
  }
};
export const togglebookmark = (bookmark) => {
    return {
      type: types.TOGGLE_BOOKMARK,
      payload:bookmark
    }
  };

export const changedetails = (bookmark) => {
  return {
    type: types.CHANGE_DETAILS_BOOKMARK,
    payload:bookmark
  }
};