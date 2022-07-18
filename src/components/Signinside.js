import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import { borderColor, borders } from '@mui/system';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import "../style/login.css";
import sly1 from '../assets/Saly-10.png'
import { Label } from '@mui/icons-material';
import GoogleIcon from '@mui/icons-material/Google';
import { FormGroup } from '@mui/material';

const theme = createTheme();

export default function SignInSide() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <div className='left_heading'>
        <Typography variant='h1'>Welcome,</Typography>
        <Typography variant='h2'>Get Started</Typography>
        <img className='imgsly' src={sly1}></img>
        </div>
        <Grid
          item
          xs={false}
          sm={4}
          md={4}
          sx={{
            backgroundRepeat: 'no-repeat',
            backgroundColor:' #5352ED',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width:'500px'
          }}
        />
        
        <Grid item xs={12} sm={8} md={8} component={Paper} square>
          <Box
            sx={{
              my: 16,
              mx: 10,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Box component="form"  noValidate onSubmit={handleSubmit} sx={{ mt: 1,display: 'flex',
              flexDirection: 'column',
              alignItems: 'center', width:'400px' }}>
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
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 ,borderRadius: '16px',height:'50px',textTransform: 'none',fontSize: '16px',fontFamily:'Inter' ,fontWeight:'500' }}
              >
                Sign Up
              </Button>
              <Typography>Or with</Typography>
              
              <Button
                type="submit"
                fullWidth
                variant="outlined"
                size="large"

                startIcon={<GoogleIcon/> }
                sx={{ mt: 3, mb: 2 ,borderRadius: '16px',height:'50px' ,textTransform: 'none',
                fontSize: '16px',
                fontFamily:'Inter' ,
                fontWeight:'700',
                borderColor: '#EEEEEE'
              }}
              >
                Sign Up with Google
              </Button>
                  <Typography>Already have an account? 
                  <Link href="#" variant="body1"> 
                  {"Login"}
                  </Link>
                  </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}