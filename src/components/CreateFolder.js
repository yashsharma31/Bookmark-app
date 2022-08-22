import { Button, TextField, Typography } from "@mui/material";
import React from "react";
import "../style/createfolder.css";
import CloseIcon from '@mui/icons-material/Close';

export default function CreateFolder() {
  return (
    <div className="outer-folder-container">
        <div className="inner-folder-container">
            <CloseIcon/>
            <Typography variant="h5">Save Bookmark</Typography>
            <TextField
            placeholder="Bookmark Name"
            >

            </TextField>
            <Button
            variant="contained"
            >
                Save
            </Button>
        </div>
    </div>
  )
}
