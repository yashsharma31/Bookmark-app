import React, { useState } from "react";
import "../style/bookmarkfolder.css";
import { IconButton, LinearProgress, Typography } from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import FolderIcon from "@mui/icons-material/Folder";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useDispatch } from "react-redux/es/exports";
import * as bookmarkAction from "../redux/actions/Bookmarks";
import * as folderAction from "../redux/actions/Folders";
import { useSelector } from "react-redux/es/exports";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import AddFolder from "./AddFolder";
import * as selectorFunction from "./useSelector";

export default function BookmarkFolder(props) {
  const childrenData = {
    createdAt: props.folder.createdAt,
    name: props.folder.name,
    id: props.folder.id,
    childrenIds: props.folder.childrenIds,
    bookmarkIds: props.folder.bookmarkIds,
  };
  const currentFolderId = useSelector(selectorFunction.currentFolderId);
  const childrenValues = useSelector(selectorFunction.folders);
  const dispatch = useDispatch();
  const handleCurrentFolder = (folderId) => {
    dispatch(folderAction.readChildrenFolder(folderId));
  };
  const { isLoadingChildren, isOpen } = useSelector(
    selectorFunction.folderReducers
  );
  const [rotate, setRotate] = useState(
    isOpen[childrenData.id] !== "undefined" && isOpen[childrenData.id]
  );
  const handleSelectedFolder = () => {
    const data = {
      folderId: childrenData.id,
      folderName: childrenData.name,
    };
    dispatch(bookmarkAction.readBookmark(data));
  };

  const toggleRotate = () => {
    setRotate(!rotate);
  };

  return (
    <div className="container-outer">
      <div
        className={
          currentFolderId == childrenData.id
            ? "container-inner-not"
            : "container-inner"
        }
      >
        <IconButton
          onClick={() => {
            if (!rotate) {
              isOpen[childrenData.id] = true;
              if (!childrenData.childrenIds)
                handleCurrentFolder(props.folder.id);
            } else {
              isOpen[childrenData.id] = false;
            }
            toggleRotate();
          }}
          disableRipple
          style={{ transform: rotate ? "rotate(90deg)" : undefined }}
          aria-label="moreVertical"
        >
          <ArrowRightIcon />
        </IconButton>
        <div className="clickable-folder" onClick={handleSelectedFolder}>
          {!isOpen[childrenData.id] ? (
            <FolderIcon color="primary" className="foldericon"></FolderIcon>
          ) : (
            <FolderOpenIcon
              color="primary"
              className="foldericon"
            ></FolderOpenIcon>
          )}
          <Typography>{props.folder.name}</Typography>
        </div>
        <IconButton aria-label="moreVertical">
          <MoreVertIcon />
        </IconButton>
      </div>
      {rotate && (
        <div>
          {isLoadingChildren === childrenData.id ? (
            <LinearProgress />
          ) : childrenData.childrenIds &&
            childrenData.childrenIds.length > 0 ? (
            childrenData.childrenIds.map((id) => {
              return (
                <div className="inner-container-folders">
                  <BookmarkFolder key={id} folder={childrenValues[id]} />
                </div>
              );
            })
          ) : (
            <div>
              <AddFolder />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
