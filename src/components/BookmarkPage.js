import { Button, CircularProgress, FormControlLabel, IconButton, LinearProgress, TextField, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import '../style/bookmarkpage.css'
import quicklinkvr from '../assets/quicklink.png'
import bookmarklogo from '../assets/bookmarklogo.png'
import profile_img from '../assets/profile_img.png'
import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import LogoutIcon from '@mui/icons-material/Logout';
import Bookmark_card from './Bookmark_card';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Bookmark_card_table from './Bookmark_card_table';
import { useSelector } from 'react-redux/es/exports'
import { useState } from 'react'
import { useDispatch } from 'react-redux/es/exports'
import * as authaction from "../redux/actions/Auth";
import * as bookmarkaction from "../redux/actions/Bookmarks";
import * as folderaction from "../redux/actions/Folders";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Formik } from "formik";
import * as EmailValidator from "email-validator";
import * as Yup from "yup";



const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    '& .MuiSwitch-switchBase': {
      margin: 1,
      padding: 0,
      transform: 'translateX(6px)',
      '&.Mui-checked': {
        color: '#fff',
        transform: 'translateX(22px)',
        '& .MuiSwitch-thumb:before': {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            '#fff',
          )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
        },
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
        },
      },
    },
    '& .MuiSwitch-thumb': {
      backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
      width: 32,
      height: 32,
      '&:before': {
        content: "''",
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
      },
    },
    '& .MuiSwitch-track': {
      opacity: 1,
      backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      borderRadius: 20 / 2,
    },
  }));

  const MyTypography = styled(Typography)({
    fontSize: '25px',
    fontFamily:'Inter',
    fontWeight:'400'
  });
  const MyTypographyInner = styled(Typography)({
    fontSize: '14px',
    fontFamily:'Inter',
    fontWeight:'400'
  });
  const MyTextfield = styled(TextField)({
    marginTop:"10px",
    borderRadius: '15px',
    height:'50px',
    color:"white"
  });
  const MyButton = styled(Button)({
    borderRadius: '15px',
    marginTop:"10px",
    height:'50px',
    width:'150px' ,
    textTransform: 'none',
    fontSize: '16px',
    fontFamily:'Inter' ,
    fontWeight:'700',
    color:"#5352ED",
    backgroundColor:"white"
  });

  const My2ndButton = styled(Button)({
    marginTop:"10px",
    borderRadius: '15px',
    height:'50px',
    width:'300px',
    textTransform: 'none',
    backgroundColor:"#6C6BF9",
    fontSize: '16px',
    fontFamily:'Inter' ,
    fontWeight:'500',
    borderColor: '#EEEEEE',
    color:"white"
  });
  const MyAddButton = styled(Button)({
    marginTop:"10px",
    borderRadius: '15px',
    height:'50px',
    width:'150px',
    fontFamily:'Inter' ,
    fontWeight:'400',
    color:"#5352ED",
    backgroundColor:"white"
  });
  const Profiletypo_name = styled(Typography)({
    marginLeft:"10px",
    marginRight:"10px",
    fontFamily:'Inter' ,
    fontWeight:'800',
    opacity:"80%"
  });
  const Profiletypo_email = styled(Typography)({
    marginLeft:"10px",
    marginRight:"10px",
    fontFamily:'Inter' ,
    fontWeight:'400',
    fontSize:"12px",
    opacity:"60%"
  });
  const MyLoginbtn = styled(Button)({
    marginTop:"20px",
    marginBottom:"5px",
    borderRadius: '16px',
    height:'50px' ,
    textTransform: 'none',
    fontSize: '16px',
    fontFamily:'Inter' ,
    fontWeight:'500',
    borderColor: '#EEEEEE'
  })
  const LeftSideButtons = styled(Button)({
    marginBottom:"10px",
    borderRadius: '16px',
    height:'50px' ,
    textTransform: 'none',
    fontSize: '16px',
    fontFamily:'Inter' ,
    fontWeight:'500',
    borderColor: '#EEEEEE'
  })

function BookmarkPage() {
    const [checked, setChecked] = useState(false);
    const dispatch = useDispatch();
    const initState = useSelector((state)=> state.login_reducer);
    const user_data = useSelector((state)=> state.getme_reducer.userData);
    //const base_folders = useSelector((state)=> state.login_reducer.folders);
    const base_bookmarks = useSelector((state)=> state.bookmark_reducer.bookmarks);
    //console.log(user_data)
    useEffect(() => {
      //console.log("dispatching")
      dispatch(bookmarkaction.readbookmark())
      dispatch(authaction.getMeAction())
      //console.log("bookamrk_length",base_bookmarks.length)
      //dispatch(folderaction.readfolder())
    },[])
    
    const switchHandler = (event) => {
        setChecked(event.target.checked);
    };

    const onHandleurlsubmit = (event) => {
      event.preventDefault();
      let url = event.target.url.value;
  
      const data = {
        url,
        name:"bennett222"
      };
      console.log(data);
      dispatch(bookmarkaction.createbookmark(data));
    }
    const handleLogout = () => {
      dispatch(authaction.logoutAction())
    }
  



  return (
    <>
    <div className='outer-container'>
        
        <div className="left-side-container">
            <div className='left-side-container-inside'>
                <img className='bookmarklogo-outer' src={bookmarklogo}></img>
            </div>
            <div className='left-side-container-inside'>
                <Typography variant='h6'>Bookmark</Typography>
            </div>
            <div className='search_bar_left'>
                <IconButton sx={{ p: '10px' }} aria-label="menu">
                    <SearchIcon />
                </IconButton>
                <input
                    className='search-bar-input-left'
                    type="text"
                    placeholder='Search...'
                />
            </div>
            <div className='favourite_button'>
              <LeftSideButtons fullWidth startIcon={<FavoriteIcon />}>Favourites</LeftSideButtons>
            </div>
            <div className='logout_button'>
              <LeftSideButtons fullWidth startIcon={<LogoutIcon />} onClick={handleLogout}>Logout</LeftSideButtons>
            </div>
            
        </div>
        <div className='right-side-container'>
          <div className="login-user-details">
            <div><img src={profile_img}></img></div>
              <div>
              <Profiletypo_name>{user_data=="Loading"?<CircularProgress />:user_data.name}</Profiletypo_name>
              <Profiletypo_email>{user_data.email}</Profiletypo_email>
              </div>
              <div>
              <IconButton aria-label="bt-moreVertical">
                <KeyboardArrowUpIcon/>
              </IconButton>
              </div>
          </div>
            <div className='quick-link-box'>
                <div className='left-quick-link-box'>
                    <MyTypography variant='h1'>Add Quick Link</MyTypography>
                    <form onSubmit={onHandleurlsubmit}>
                    <div className='url-box'>
                        <MyTypographyInner variant='h6'>URL</MyTypographyInner>
                        <MyTextfield
                            className='inputRounded'
                            label="URL"
                            fullWidth
                            id="url"
                            autoComplete="url"
                            />
                    </div>
                    <div className='folder-box'>
                        <MyTypographyInner variant='h6'>FOLDER</MyTypographyInner>
                        <div className='folder-buttons'>
                            <My2ndButton
                                type="submit"
                                variant="Filled"
                                size="large">Root
                            </My2ndButton>
                            <MyButton
                                type="submit"
                                variant="contained"
                                size="large"
                                >Save
                            </MyButton>
                        </div>
                        
                    </div>
                    </form>
                </div>
                <div className='right-quick-link-box-image'>
                    <img src={quicklinkvr}></img>
                </div>

            </div>
            <div className='search-side-middle'>
                <div className='search-bar-right'>
                    <div className='search_bar'>
                        <IconButton  aria-label="menu">
                            <SearchIcon />
                        </IconButton>
                        <input
                            className='search-bar-input'
                            type="text"
                            placeholder='Search...'
                        />
                        
                    </div>
                </div>
                <div>

                </div>
                <MyAddButton variant="outlined" startIcon={<AddIcon />}>
                    Add link
                </MyAddButton>
                <FormControlLabel
                    control={<MaterialUISwitch checked={checked} onChange={switchHandler}/>}
                />
            
                
            </div>
            {base_bookmarks.length==0?<div className='loading_bookmarks'><CircularProgress /></div>:
            <div className={!checked?'bookmark-cards-bottom':'bookmark-cards-bottom-tiled'}>
            {!checked?
              base_bookmarks.map((ele)=><Bookmark_card 
                key={ele.id}
                bookmark_name={ele.name} 
                bookmark_des={ele.description} 
                bookmark_img={ele.imageUrl}/>)
                :
                base_bookmarks.map((ele)=><Bookmark_card_table 
                  key={ele.id}
                  bookmark_name={ele.name} 
                  bookmark_des={ele.description} 
                  bookmark_img={ele.imageUrl}/>)
                }
                
            </div>}
        </div>
        
    </div>
    </>
  )
}

export default BookmarkPage