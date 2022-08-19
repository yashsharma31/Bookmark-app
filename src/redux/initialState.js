const initialState = {
  loginReducers: {
    isAuthUser: false,
  },
  authReducer: {
    isAuthUser: false,
  },
  bookmarkReducers: {
    bookmarks: [],
    error: "",
  },
  folderReducers: {
    folders: [],
    error: "",
  },
  getMeReducers: {
    userData: [],
  },
  logoutReducers: {
    status: ""
  },
};

export default initialState;
