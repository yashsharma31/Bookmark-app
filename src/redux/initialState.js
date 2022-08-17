const initialState = {
    login_reducer: {
        isAuthUser: false
    },
    auth_reducers: {
        isAuthUser: false
    },
    bookmark_reducers: {
        bookmarks: [],
        error: "",
    },
    folder_reducers: {
        folders: [],
        error: "",
    },
    getme_reducer: {
        userData:[]
    }
}

export default initialState;
