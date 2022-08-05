import * as types from '../../../constants/index'

export const createbookmark = (bookmark) => {
    return {
      type: types.CREATE_BOOKMARK,
      bookmark
    }
  };

export const readbookmark = (bookmark) => {
  return {
    type: types.READ_BOOKMARK,
    bookmark
  }
};
export const deletebookmark = (bookmark) => {
    return {
      type: types.DELETE_BOOKMARK,
      bookmark
    }
  };

export const patchbookmark = (bookmark) => {
  return {
    type: types.PATCH_BOOKMARK,
    bookmark
  }
};
export const togglebookmark = (bookmark) => {
    return {
      type: types.TOGGLE_BOOKMARK,
      bookmark
    }
  };

export const changedetails = (bookmark) => {
  return {
    type: types.CHANGE_DETAILS_BOOKMARK,
    bookmark
  }
};