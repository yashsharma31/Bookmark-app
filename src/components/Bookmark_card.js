import { IconButton,Typography } from '@mui/material'
import React from 'react'
import '../style/bookmarkcard.css'
import cards from '../assets/bookmark_image.png'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import chkboxcard from '../assets/checkbox_cards.png';
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import heartcard from '../assets/heart_chkbox.png';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function Bookmark_card() {
  return (
    <div className='outside-container'>
        <div className='chkbox'>
            <DoneOutlinedIcon className='chkboxleft'></DoneOutlinedIcon>
            <FavoriteBorderIcon className='heartcardleft'></FavoriteBorderIcon>
        </div>

        <div className='image-container'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Floris_Claesz._van_Dyck_001.jpg/640px-Floris_Claesz._van_Dyck_001.jpg"></img>
            
        </div>
        <div className='middle-text-card'>
            <Typography variant='h6'>Title Lorem Ipsum</Typography>
            <IconButton aria-label="moreVertical">
                <MoreVertIcon/>
            </IconButton>

        </div>
        <div>
            <Typography className='bookmark-card-bottom-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Typography>
        </div>
    </div>
  )
}

export default Bookmark_card;