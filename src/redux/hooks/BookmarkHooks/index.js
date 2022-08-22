import { useCallback } from "react";
import { useDispatch } from "react-redux";
import * as bookmarkAction from "../../actions/Bookmarks";
export const useGetBookmark = () => {
    const dispatch = useDispatch();
    const getBookmark = useCallback(() => dispatch(bookmarkAction.readBookmark()), [dispatch]);
    return [getBookmark];
};