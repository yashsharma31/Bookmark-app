const initialState = {
  loginReducers: {
    isAuthUser: false,
  },
  authReducer: {
    isAuthUser: false,
  },
  bookmarkReducers: {
    bookmarks: [],
    createBookmark: "",
    error: "",
  },
  folderReducers: {
    folders: {},
    rootIds: [],
    error: "",
    isLoading: false,
    isOpen: {}
  },
  getMeReducers: {
    userData: [],
  },
  logoutReducers: {
    status: ""
  },
};

export default initialState;
