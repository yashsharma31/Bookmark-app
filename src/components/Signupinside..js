import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/system';
import { useDispatch } from 'react-redux';
import {loginUserAction} from '../redux/actions/Auth/index'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import "../style/login.css";
import { useSelector } from 'react-redux';
import { logInRequest } from '../services'
import sly1 from '../assets/Saly-10.png'
import {IconButton } from '@mui/material';
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';

const GridComponent = styled('Grid')({
  backgroundRepeat: 'no-repeat',
  backgroundColor:' #5352ED',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  width:'500px'
});
const MyBox = styled('Box')({
  marginTop: 150,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})
const InterBox = styled('Box')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center', 
  width:'400px'
})
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

const theme = createTheme();



export default function Signupinside() {
  const initstage = useSelector((state)=> state.login_reducer.response);
  const dispatch = useDispatch();
  const onHandleLogin = (event) => {
    event.preventDefault();
  
    let email = event.target.email.value;
    let password = event.target.password.value;
  
    
    const data = {
      email, password
    };
    dispatch(loginUserAction(data));
    console.log("initstage after this wioo",initstage)
    
  }



  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
          <div className='left_heading'>
            <Typography variant='h1'>Welcome,</Typography>
            <Typography variant='h2'>Get Started</Typography>
            <img className='imgsly' src={sly1}></img>
          </div>
        <div className='loginmobile'>
            <IconButton aria-label="back">
                <KeyboardArrowLeftRoundedIcon/>
            </IconButton>
            <Typography variant='h6'>Login</Typography>
        </div>
        <GridComponent
          className='leftblueside'
        />
        <Grid item xs={12} sm={8} md={8} component={Paper} square>
          <MyBox>
          <form onSubmit={onHandleLogin}>
            <InterBox component="form"  noValidate onSubmit={onHandleLogin}>
              <TextField
                className='inputRounded'
                margin="normal"
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                className='inputRounded'
                margin="normal"
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <MyLoginbtn
                type="submit"
                fullWidth
                variant="contained">
                Login
              </MyLoginbtn>
              <MyLoginbtn
                type="submit"
                fullWidth
                variant="text">
                Forgot Password?
              </MyLoginbtn>
              <Typography>Don't have an account? 
                <Link href="#" variant="body1"> 
                  {"Sign Up"}
                </Link>
              </Typography>
            </InterBox>
            </form>
          </MyBox>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}