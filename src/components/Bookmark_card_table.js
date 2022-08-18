import { IconButton, Radio, Typography } from "@mui/material";
import React from "react";
import "../style/bookmarkcard_table.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CopyAllIcon from "@mui/icons-material/CopyAll";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import placeholderimg from "../assets/placeholderimg.jpg";

function Bookmark_card_table(props) {
  const MAX_LENGTH = 60;
  //console.log(props.bookmark_name)
  const checkForImage = (imgg) => {
    if (imgg == "") {
      return true;
    } else {
      return false;
    }
  };
  return (
    <div className="bt-outside-container">
      <div className="bt-image2-container">
        <Radio
          value="a"
          name="radio-buttons"
          inputProps={{ "aria-label": "A" }}
        />
      </div>

      <div className="bt-image-container">
        {checkForImage(props.bookmark_img) ? (
          <img src={placeholderimg}></img>
        ) : (
          <img src={props.bookmark_img}></img>
        )}
      </div>
      <div className="bt-middle-text-card">
        <Typography variant="h6">{props.bookmark_name}</Typography>
        <Typography className="bt-bookmark-card-bottom-text">{`${props.bookmark_des.substring(
          0,
          MAX_LENGTH
        )}...`}</Typography>
      </div>
      <div className="bt-folder-location">
        <Typography>Title Lorem Ipsum</Typography>
      </div>
      <div className="bt-icon-buttons">
        <IconButton aria-label="bt-moreVertical">
          <FavoriteBorderIcon />
        </IconButton>
        <IconButton aria-label="bt-moreVertical">
          <CopyAllIcon />
        </IconButton>

        <IconButton aria-label="bt-moreVertical">
          <BorderColorIcon />
        </IconButton>
        <IconButton aria-label="bt-moreVertical">
          <DeleteOutlineIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Bookmark_card_table;
