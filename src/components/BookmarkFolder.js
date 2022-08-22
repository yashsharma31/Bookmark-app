import React from "react";
import "../style/bookmarkfolder.css";
import { IconButton, Typography } from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import FolderIcon from "@mui/icons-material/Folder";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useDispatch } from "react-redux/es/exports";
import * as bookmarkAction from "../redux/actions/Bookmarks";

export default function BookmarkFolder(props) {
  //console.log(props);
  const dispatch = useDispatch();
  const handleCurrentFolder = (folderId) => {
    dispatch(bookmarkAction.readBookmark(folderId));
  };

  return (
    <div className="container-outer">
      <div className="container-inner">
        <IconButton
          onClick = {() => handleCurrentFolder(props.folderId)}
          aria-label="moreVertical"
        >
          <ArrowRightIcon />
        </IconButton>
        <FolderIcon color="primary" className="foldericon"></FolderIcon>
        <Typography>{props.folder_name}</Typography>
        <IconButton aria-label="moreVertical">
          <MoreVertIcon />
        </IconButton>
      </div>
    </div>
  );
}
