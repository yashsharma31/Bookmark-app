import {
  CircularProgress,
  FormControlLabel,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import {
  MyTypography,
  MaterialUISwitch,
  MyTypographyInner,
  MyTextfield,
  MyButton,
  My2ndButton,
  MyAddButton,
  Profiletypo_name,
  Profiletypo_email,
  LeftSideButtons,
} from "./Individual_comp/C_BookmarkPage";
import "../style/bookmarkpage.css";
import quicklinkvr from "../assets/quicklink.png";
import bookmarklogo from "../assets/bookmarklogo.png";
import profile_img from "../assets/profile_img.png";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import LogoutIcon from "@mui/icons-material/Logout";
import Bookmark_card from "./Bookmark_card";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Bookmark_card_table from "./Bookmark_card_table";
import { useSelector } from "react-redux/es/exports";
import { useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import * as authAction from "../redux/actions/Auth";
import { useGetBookmark } from "../redux/hooks/BookmarkHooks";
import * as bookmarkAction from "../redux/actions/Bookmarks";
import * as folderaction from "../redux/actions/Folders";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import BookmarkFolder from "./BookmarkFolder";

function BookmarkPage() {
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.getMeReducers.userData);
  const baseBookmarks = useSelector(
    (state) => state.bookmarkReducers.bookmarks
  );
  const bookmarksLoadingState = useSelector(
    (state) => state.bookmarkReducers.status
  );
  const currentFolderName = useSelector(
    (state) => state.bookmarkReducers.folderName
  );
  const currentFolderId = useSelector(
    (state) => state.bookmarkReducers.foldersId
  );
  const folders = useSelector((state) => state.folderReducers.folders);
  const rootIds = useSelector((state) => state.folderReducers.rootIds);
  const loadingCreateBookmark = useSelector(
    (state) => state.bookmarkReducers.createBookmark
  );

  useEffect(() => {
    dispatch(bookmarkAction.readBookmark());
    dispatch(authAction.getMeAction());
    dispatch(folderaction.readFolder());
    console.log("folder", folders);
    console.log("rootids", rootIds);
  }, []);

  const [getBookmark] = useGetBookmark();
  useEffect(() => {
    getBookmark();
    console.log("gg");
  }, [loadingCreateBookmark == "Done"]);

  const switchHandler = (event) => {
    setChecked(event.target.checked);
  };

  const onHandleurlsubmit = (event) => {
    event.preventDefault();
    let url = event.target.url.value;

    const data = {
      url,
      folderId: currentFolderId,
    };
    console.log(data);
    dispatch(bookmarkAction.createBookmark(data));
    //event.target.url = ""
  };
  const handleLogout = () => {
    dispatch(authAction.logoutAction());
  };

  return (
    <>
      <div className="outer-container">
        <div className="left-side-container">
          <div className="left-side-container-inside">
            <img className="bookmarklogo-outer" src={bookmarklogo}></img>
          </div>
          <div className="left-side-container-inside">
            <Typography variant="h6">Bookmark</Typography>
          </div>
          <div className="search_bar_left">
            <IconButton sx={{ p: "10px" }} aria-label="menu">
              <SearchIcon />
            </IconButton>
            <input
              className="search-bar-input-left"
              type="text"
              placeholder="Search..."
            />
          </div>
          <div className="folder-container">
            <div>
              {rootIds.length === 0 ? (
                <div className="loading_bookmarks">
                  <CircularProgress />
                </div>
              ) : (
                rootIds.map((id) => {
                  return <BookmarkFolder key={id} folder={folders[id]} />;
                })
              )}
            </div>
          </div>
          <div className="favourite_button">
            <LeftSideButtons fullWidth startIcon={<FavoriteIcon />}>
              Favourites
            </LeftSideButtons>
          </div>
          <div className="logout_button">
            <LeftSideButtons
              fullWidth
              startIcon={<LogoutIcon />}
              onClick={handleLogout}
            >
              Logout
            </LeftSideButtons>
          </div>
        </div>
        <div className="right-side-container">
          <div className="login-user-details">
            <div>
              <img src={profile_img}></img>
            </div>
            <div>
              <Profiletypo_name>
                {userData == "Loading" ? <CircularProgress /> : userData.name}
              </Profiletypo_name>
              <Profiletypo_email>{userData.email}</Profiletypo_email>
            </div>
            <div>
              <IconButton aria-label="bt-moreVertical">
                <KeyboardArrowUpIcon />
              </IconButton>
            </div>
          </div>
          <div className="quick-link-box">
            <div className="left-quick-link-box">
              <MyTypography variant="h1">Add Quick Link</MyTypography>
              <form onSubmit={onHandleurlsubmit}>
                <div className="url-box">
                  <MyTypographyInner variant="h6">URL</MyTypographyInner>
                  <MyTextfield
                    className="inputRounded"
                    label="URL"
                    fullWidth
                    id="url"
                    autoComplete="url"
                  />
                </div>
                <div className="folder-box">
                  <MyTypographyInner variant="h6">FOLDER</MyTypographyInner>
                  <div className="folder-buttons">
                    <My2ndButton type="submit" variant="Filled" size="large">
                      {currentFolderName}
                    </My2ndButton>
                    <MyButton
                      loading={loadingCreateBookmark == "Creating"}
                      type="submit"
                      variant="contained"
                      size="large"
                    >
                      Save
                    </MyButton>
                  </div>
                </div>
              </form>
            </div>
            <div className="right-quick-link-box-image">
              <img src={quicklinkvr}></img>
            </div>
          </div>
          <div className="search-side-middle">
            <div className="search-bar-right">
              <div className="search_bar">
                <IconButton aria-label="menu">
                  <SearchIcon />
                </IconButton>
                <input
                  className="search-bar-input"
                  type="text"
                  placeholder="Search..."
                />
              </div>
            </div>
            <div></div>
            <MyAddButton variant="outlined" startIcon={<AddIcon />}>
              Add link
            </MyAddButton>
            <FormControlLabel
              control={
                <MaterialUISwitch checked={checked} onChange={switchHandler} />
              }
            />
          </div>
          {bookmarksLoadingState == "Loading" ? (
            <div className="loading_bookmarks">
              <CircularProgress />
            </div>
          ) : (
            <>
              {baseBookmarks.length == 0 ? (
                <div className="loading_bookmarks">
                  <Typography>No Bookmarks</Typography>
                </div>
              ) : (
                <div
                  className={
                    !checked
                      ? "bookmark-cards-bottom"
                      : "bookmark-cards-bottom-tiled"
                  }
                >
                  {!checked
                    ? baseBookmarks.map((ele) => (
                        <Bookmark_card
                          key={ele.id}
                          bookmark_name={ele.name}
                          bookmark_des={ele.description}
                          bookmark_img={ele.imageUrl}
                        />
                      ))
                    : baseBookmarks.map((ele) => (
                        <Bookmark_card_table
                          key={ele.id}
                          bookmark_name={ele.name}
                          bookmark_des={ele.description}
                          bookmark_img={ele.imageUrl}
                        />
                      ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default BookmarkPage;
