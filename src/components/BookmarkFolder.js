import React from "react";
import "../style/bookmarkfolder.css";
import { IconButton, Typography } from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import FolderIcon from "@mui/icons-material/Folder";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export default function BookmarkFolder(props) {
  console.log(props.folder_name);
  return (
    <div className="container-outer">
      <div className="container-inner">
        <IconButton aria-label="moreVertical">
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
