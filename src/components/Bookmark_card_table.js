import { Button, FormControlLabel, IconButton, InputAdornment, InputBase, Radio, TextField, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material'
import React from 'react'
import '../style/bookmarkcard_table.css'
import quicklinkvr from '../assets/quicklink.png'
import bookmarklogo from '../assets/bookmarklogo.png'
import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import cards from '../assets/bookmark_image.png'
import CopyAllIcon from '@mui/icons-material/CopyAll';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import chkboxcard from '../assets/checkbox_cards.png';
import heartcard from '../assets/heart_chkbox.png';

function Bookmark_card_table(url) {
  return (
    <div className='bt-outside-container'>
        <div className='bt-image2-container'>
        <Radio
            value="a"
            name="radio-buttons"
            inputProps={{ 'aria-label': 'A' }}
            />
        </div> 

        <div className='bt-image-container'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Floris_Claesz._van_Dyck_001.jpg/640px-Floris_Claesz._van_Dyck_001.jpg"></img>
            
        </div> 
        <div className='bt-middle-text-card'>
            <Typography variant='h6'>Title Lorem Ipsum</Typography>
            <Typography className='bt-bookmark-card-bottom-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Typography>
        </div>
        <div className='bt-folder-location'>
            <Typography>Title Lorem Ipsum</Typography>

        </div>
        <div className='bt-icon-buttons'>
            <IconButton aria-label="bt-moreVertical">
                <FavoriteBorderIcon/>
            </IconButton>
            <IconButton aria-label="bt-moreVertical">
                <CopyAllIcon/>
            </IconButton>
            
            <IconButton aria-label="bt-moreVertical">
                <BorderColorIcon/>
            </IconButton>
            <IconButton aria-label="bt-moreVertical">
                <DeleteOutlineIcon/>
            </IconButton>
            
            
        </div>
    </div>
  )
}

export default Bookmark_card_table;