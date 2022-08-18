import * as types from "../../../constants/index";

export const createBookmark = (bookmark) => {
  return {
    type: types.CREATE_BOOKMARK,
    payload: bookmark,
  };
};

export const readBookmark = (bookmark) => {
  return {
    type: types.READ_BOOKMARK,
    payload: bookmark,
  };
};
export const deleteBookmark = (bookmark) => {
  return {
    type: types.DELETE_BOOKMARK,
    payload: bookmark,
  };
};

export const patchBookmark = (bookmark) => {
  return {
    type: types.PATCH_BOOKMARK,
    payload: bookmark,
  };
};
export const toggleBookmark = (bookmark) => {
  return {
    type: types.TOGGLE_BOOKMARK,
    payload: bookmark,
  };
};

export const changeDetails = (bookmark) => {
  return {
    type: types.CHANGE_DETAILS_BOOKMARK,
    payload: bookmark,
  };
};
