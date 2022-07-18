import { Button, FormControlLabel, IconButton, InputAdornment, InputBase, TextField, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material'
import React from 'react'
import '../style/bookmarkcard.css'
import quicklinkvr from '../assets/quicklink.png'
import bookmarklogo from '../assets/bookmarklogo.png'
import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import cards from '../assets/bookmark_image.png'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import chkboxcard from '../assets/checkbox_cards.png';
import heartcard from '../assets/heart_chkbox.png';

function Bookmark_card() {
  return (
    <div className='outside-container'>
        <div className='chkbox'>
            <img className='chkboxleft' src={chkboxcard}></img>
            <img className='heartcardleft' src={heartcard}></img>
        </div>

        <div className='image-container'>
            <img src={cards}></img>
            
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