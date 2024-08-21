import React, {useState} from 'react'
import NavBar from '../UI/NavBar'
import { Link, useLocation } from 'react-router-dom'
import backgroundLogin from '../../assets/Images/background-login.svg'
import facebookLogo from '../../assets/Images/facebook-logo.svg'
import googleLogo from '../../assets/Images/google-logo.svg'
import twitterLogo from '../../assets/Images/twitter-logo.svg'
import '../../Styles/Access/Login.css'


function Login() {
  return (
    <>
    <div className='login-navbar'>
    <NavBar />
    </div>
    
    <div className='login-main-container'>
    <div className='img-container' style={{ backgroundImage: `url(${backgroundLogin})` }}>
      </div>
      <div className='login-form-container'>
      <div className='logo-title'>
        <h1>Welcome Back!</h1>
        <hr className='logo-line'/>
      </div>
      <form className='form-area'>
      <label name="username">Username or Email</label>
      <input type='text' name="username" id="username_textarea" className='text-area' />

      <label name="password">Password</label>
      <input type='text' name="password" id="password_textarea" className='text-area'/>

      <div className='remember-box'> 
        <input type='checkbox' name='rememberCheck' id='rememberCheck' />
      <label htmlFor='rememberCheck'>Remember me</label>
      </div>
      <div className="login-btn-box">
        <button className="login-btn">Log In</button>
      </div>
      </form>
      <div className="other-login">
        <button className="login-options">
        <img src={googleLogo} title='Google' className='img-logo'/>
        </button>
        <button className="login-options">
        <img src={facebookLogo} title='Facebook' className='img-logo'/>
        </button>
        <button className="login-options">
        <img src={twitterLogo} title='Twitter' className='img-logo'/>
        </button>
      </div>
    <div className="extra-option">
      <span className='mt-20 text-blue-900'>Forgot Password?</span>
      <span className='mt-6'>New here? <Link to='/sign-up' className='text-blue-500'>Sign Up</Link></span>
    </div>

    </div>
    </div>
    </>
  )
}

export default Login
