import PropTypes from "prop-types";
import { IconButton } from "@mui/material";
import React from "react";
import "../style/createfolder.css";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import * as folderAction from "../redux/actions/Folders";
import {
  MyTypography,
  MyButton,
  MyTextfield,
} from "./Individual_comp/C_BookmarkFolder";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useDispatch } from "react-redux/es/exports";
import { Form } from "formik";

export default function AddFolder() {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleNewFolder = (event) => {
    event.preventDefault();
    const folderName = event.target.foldername.value
    console.log("Foldername",folderName)
    dispatch(folderAction.createFolder(folderName));
  };

  return (
      <div className="dialogbox-mui">
      <div className="inner-container-folders-empty">
        <IconButton onClick={handleClickOpen}>
          <AddCircleOutlineIcon color="primary" className="foldericon" />
        </IconButton>
        <MyTypography>Add Folder</MyTypography>
      </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Create Folder</DialogTitle>
        <div className="outer-folder-container">
          <div className="inner-folder-container">
            <form onSubmit={handleNewFolder}>
            <MyTextfield 
            className="inputRounded"
            label="Folder Name"
            fullWidth
            id="foldername"
            autoComplete="foldername"
            ></MyTextfield>
            <MyButton variant="contained" type= "submit">Save</MyButton>
            </form>
          </div>
        </div>
    </Dialog>
    </div>
  );
}
