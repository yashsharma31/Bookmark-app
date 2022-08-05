import * as types from '../constants/index'

const initialState={
    login_reducer:{
        isAuthUser:false
    },
    auth_reducers:{
        isAuthUser:false
    },
    bookmarks: {
        bookmarks:{},
        error: "",
    },
    folders: {
        folders:{},
        error: "",
    },
}
export default initialState;