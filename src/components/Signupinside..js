import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { useDispatch } from 'react-redux';
import {loginUserAction,loginUserLoadingAction} from '../redux/actions/Auth/index'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import "../style/login.css";
import LoadingButton from '@mui/lab/LoadingButton';
import { useSelector } from 'react-redux';
import { Formik,Form,Field,ErrorMessage,useFormik  } from "formik";
import * as Yup from "yup";
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
const MyLoginbtn = styled(LoadingButton)({
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
  const initstage = useSelector((state)=> state.login_reducer.isAuthUser);
  const dispatch = useDispatch();
  const loadingState=(stt)=>{
    if(stt=="Loading"){
      return true;
    }
    else{
      return false;
    }
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
          <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values,props) => {
              props.setSubmitting(true);
              console.log("Logging in", values);
              dispatch(loginUserAction(values));
              dispatch(loginUserLoadingAction())
              props.resetForm()
          }}
          validationSchema={Yup.object().shape({
            email: Yup.string()
              .email()
              .required("Required"),
            password: Yup.string()
              .required("No password provided.")
              .min(8, "Password is too short - should be 8 chars minimum.")
          })}
        >
        {(props)=>(
          <Form>
            <InterBox>
              <Field as={TextField}
                className='inputRounded'
                margin="normal"
                fullWidth
                id="email"
                required
                label="Email Address"
                name="email"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.email}
                autoComplete="email"
                autoFocus
                helperText={<ErrorMessage name='email'/>}
              />
              <Field as={TextField}
                className='inputRounded'
                margin="normal"
                fullWidth
                name="password"
                label="Password"
                required
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.password}
                type="password"
                id="password"
                autoComplete="current-password"
                helperText={<ErrorMessage name='password'/>}
              />
              <MyLoginbtn
                type="submit"
                fullWidth
                loading={props.isSubmitting || loadingState(initstage)}
                loadingPosition="end"
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
                <Link href="/" variant="body1"> 
                  {"Sign Up"}
                </Link>
              </Typography>
            </InterBox>
            </Form>)}
            </Formik>
          </MyBox>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}