//BookmarkPage
export const userData = (state) => state.getMeReducers.userData;
export const baseBookmarks = (state) => state.bookmarkReducers.bookmarks;
export const bookmarksLoadingState = (state) => state.bookmarkReducers.status;
export const currentFolderName = (state) => state.bookmarkReducers.folderName;
export const currentFolderId = (state) => state.bookmarkReducers.foldersId
export const folders = (state) => state.folderReducers.folders;
export const rootIds = (state) => state.folderReducers.rootIds;
export const loadingCreateBookmark = (state) => state.bookmarkReducers.createBookmark;
//BookmarkFolder
export const folderReducers = (state) => state.folderReducers;
//LoginPage
export const initStage = (state) => state.loginReducers.isAuthUser;