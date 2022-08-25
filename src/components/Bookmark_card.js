import { IconButton, Typography } from "@mui/material";
import React from "react";
import "../style/bookmarkcard.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import placeholderimg from "../assets/placeholderimg.jpg";

function Bookmark_card(props) {
  const MAX_LENGTH = 70;
  const MAX_LENGTH_HEADING = 20;
  const checkForImage = (imgg) => {
    if (imgg == "") {
      return true;
    } else {
      return false;
    }
  };
  return (
    <div className="outside-container">
      <div className="chkbox">
        {/* <DoneOutlinedIcon className='chkboxleft'></DoneOutlinedIcon>
            <FavoriteBorderIcon className='heartcardleft'></FavoriteBorderIcon> */}
      </div>

      <div className="image-container">
        {checkForImage(props.bookmark_img) ? (
          <img src={placeholderimg}></img>
        ) : (
          <img src={props.bookmark_img}></img>
        )}
      </div>
      <div className="middle-text-card">
        <Typography variant="h6">{`${props.bookmark_name.substring(
          0,
          MAX_LENGTH_HEADING
        )}...`}</Typography>
        <IconButton aria-label="moreVertical">
          <MoreVertIcon />
        </IconButton>
      </div>
      <div>
        <Typography className="bookmark-card-bottom-text">{`${props.bookmark_des.substring(
          0,
          MAX_LENGTH
        )}...`}</Typography>
      </div>
    </div>
  );
}

export default Bookmark_card;
