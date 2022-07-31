import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/system';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import "../style/login.css";
import {registerUserAction} from '../redux/actions/index'
import sly1 from '../assets/Saly-10.png'
import GoogleIcon from '@mui/icons-material/Google';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import login_reducer from '../redux/reducers/login_reducer';



const theme = createTheme();


function SignInSide() {
  const dispatch = useDispatch();
  

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

  const MySignupbtn = styled(Button)({
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

  const onHandleRegistration = (event) => {
    event.preventDefault();

    let name = event.target.name.value;
    let email = event.target.email.value;
    let password = event.target.password.value;

    const data = {
      name, email, password
    };

    dispatch(registerUserAction(data));
    
    

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
        <GridComponent
          item
          xs={false}
          sm={4}
          md={4}
        />
        
        <Grid item xs={12} sm={8} md={8} component={Paper} square>
          <MyBox>
          <form onSubmit={onHandleRegistration}>
            <InterBox component="form"  noValidate>
            <TextField
                className='inputRounded'
                margin="normal"
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoComplete="name"
                autoFocus
              />
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
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" size='large'/>}
                label="By signing up, you agree to the Terms of Service and Privacy Policy"
              />
              <MySignupbtn
                type="submit"
                fullWidth
                variant="contained">
                Sign Up
              </MySignupbtn>
              <Typography>Or with</Typography>
              
              <MySignupbtn
                type="submit"
                fullWidth
                variant="outlined"
                size="large"
                startIcon={<GoogleIcon/> }>
                Sign Up with Google
              </MySignupbtn>
                  <Typography>Already have an account? 
                  <Link href="#" variant="body1"> 
                  {"Login"}
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




export default SignInSide;