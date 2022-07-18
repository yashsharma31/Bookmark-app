import React from 'react'
import '../style/login.css'
import { Typography } from '@mui/material'

const B_login = () => {
  return (
      <>
      <div className='container'>
        <div className='left_side'>
          <div className='left_heading'>
            <Typography variant='h1'>Welcome,</Typography>
            <Typography variant='h2'>Get Started</Typography>
          </div>
        </div>
        <div className='right_side'>
          <div className='right_fields'>
            <input type='text' placeholder='Name'/>
            <input type='text' placeholder='Email'/>
            <input type='password' placeholder='Password'/>

            <div className='signup_buttons'>
              <button>Sign Up</button>
              <label>Or with</label>
              <button>Sign Up with Google</button>
              <label>Already have an account?</label><label>Login</label>
            </div>
          </div>

        </div>
      </div>
      </>
  )
}

export default B_login