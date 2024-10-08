import { Link, useNavigate } from 'react-router-dom';
import backgroundLogin from '../../assets/Images/background-login.svg';
import TwoFactorAuthentication from './TwoFactorAuthentication';
import { useState } from 'react';
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import Button from '../UI/Button';
import {useDispatch} from 'react-redux';
import {setValue} from '../../Redux/react_component/UserData.js';
import Auth from './Auth.jsx';
// import axios from 'axios';
import toast from 'react-hot-toast';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const[isEnabled, setIsEnabled] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const dispatch  = useDispatch();
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState(true);

  const handleChange = async (e)=>{
    const formData = {
     email: email,
     password: password
    }
    e.preventDefault();
    try {
      const res = await fetch('/api/auth/login', {
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body: JSON.stringify(formData),
     });
     const data = await res.json();
     if(data.success === false){
      setCredentials(false);
        return;
     }
     toast.success("User Logged In")
     dispatch(setValue(data));
      navigate('/');
    } catch (error) {
      console.log(error);
      toast.error("Error Logging In")  
    }
    // axios.post('/api/auth/login',formData,{
    //   headers:{
    //     "Content-Type":"multipart/form-data"
    //   }
    //  })
    //  .then((res)=>{
      
    //   console.log(res);
    //  })
    //  .catch((error)=>{
    //   const {res} = error;
    //   console.log(error);
      
    //  })
  }
  const Enable = (e)=>{
    e.preventDefault();
    !isEnabled? setIsEnabled(true): setIsEnabled(false)
}
const showPassword = ()=>{
  setShowPass(!showPass);
}
  
  return (
    <>
      <div className="flex justify-end w-full h-screen font-montserrat dark:bg-slate-800">
        <div
          className="w-2/4 h-98 bg-cover bg-center bg-repeat sm:hidden self-center ml-2 rounded-xl `"
          style={{ backgroundImage: `url(${backgroundLogin})` }}
        ></div>

        <div className={`${isEnabled? 'hidden' : 'flex'} flex-col justify-center items-center flex-1 h-screen`} >
          <div className="text-3xl mb-16 dark:text-white">
            <h1>Welcome Back!</h1>
            <hr className="h-0.5 bg-black mt-2 mb-4 w-full"/>
          </div>
          <form className="flex w-3/6 flex-col px-8 sm:px-2 sm:w-3/4 dark:text-white" onSubmit={handleChange}>
          {!credentials && <span className='text-sm text-[red] self-end'>Wrong Credentials</span>}
            <label htmlFor="username_textarea">Enter Email</label>
            <input
              type="text"
              name="username"
              id="username_textarea"
              className={`text-left h-9 text-lg p-1 mb-4 rounded border ${credentials? 'border-gray-300':'border-[red]'} dark:text-black`}
              value={email}
              onChange={(e)=>{setEmail(e.target.value)
                setCredentials(true);
              }}
              required
            />

            <label htmlFor="password_textarea dark:text-white">Enter Password</label>
            <input
              type={`${!showPass? 'password': 'text'}`}
              name="password"
              id="password_textarea"
              value={password}
              onChange={(e)=>{setPassword(e.target.value)
                setCredentials(true);
              }}
              className={`text-left h-9 text-lg p-1 mb-4 rounded border ${credentials? 'border-gray-300':'border-[red]'} dark:text-black`}
              required
            />
            <button className="text-sm self-end dark:text-white" type="button" onClick={showPassword}>Show Password</button>

            <div className="flex items-center">
              <input
                type="checkbox"
                name="rememberCheck"
                id="rememberCheck"
                className="rounded mr-2"
              />
              <label htmlFor="rememberCheck">Remember me</label>
            </div>
            <div className="flex justify-center mt-6 mb-8 w-full">
              <Button className="
                bg-indigo-500
                hover:bg-indigo-600 
                focus:ring-indigo-300  
                focus-visible:ring-indigo-300
                !w-3/4"
                type='submit'>
                Log In
              </Button>
              
            </div>
          </form>

          <Auth/>

          <div className="flex flex-col items-center justify-around">
            <button className="text-blue-900 mt-5 dark:text-blue-400">
              <Link to ="/access/login/reset-password">Forgot Password?</Link></button>
            <span className="mt-6 dark:text-white">
              New here? <Link to="/access/signup" className="text-blue-500">Sign Up</Link>
            </span>
          </div>
        </div>
        <div className={` flex-col items-center justify-center flex-1 ${isEnabled? 'flex' : 'hidden'} sm:justify-start sm:mt-32`}
        id="movingElement">
        <TwoFactorAuthentication/>
        <button className='flex flex-row items-center text-sm dark:text-white' onClick={Enable}><ArrowLeftIcon className="fill-black w-5 h-5 mr-1 dark:fill-white"/> Go back</button>
        </div>
      </div>
    </>
  )
}

export default Login
