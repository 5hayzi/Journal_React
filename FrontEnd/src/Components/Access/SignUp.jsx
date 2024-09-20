import {useState, useEffect} from 'react'
import signupGif from '../../assets/Images/typing.gif'
import { TypeAnimation } from 'react-type-animation';
import { ArrowRightIcon, ArrowLeftIcon } from '@heroicons/react/24/solid'
import Button from '../UI/Button'
import { Link, useNavigate} from 'react-router-dom'
import axios from 'axios';
import Auth from './Auth'

function SignUp() {
  const[isOpen, setIsOpen] = useState(false);
  const[firstName, setFirstName] = useState('');
  const[secondName, setSecondName] = useState('');
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');
  const[passCheck, setPassCheck] = useState('');
  const [isMatch, setIsMatch] = useState();
  const[image, setImage] = useState(null);
  const[viewImage, setViewImage] = useState(null);
  const[twoFactor, setTwoFactor] = useState(false);
  const[agreeCheck, setAgreeCheck] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [gender, setGender] = useState('');
  const [charValid, setCharValid] = useState({
    uppercase: false ,
    specialChar: false ,
    passLength: false
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const validatePassword = (pwd) => {
    const uppercasePattern = /[A-Z]/;
    const specialCharPattern = /[!@#$%^&*(),.?":{}|<>]/;
    const testUpperCase = uppercasePattern.test(pwd);
    const testSpecialChar = specialCharPattern.test(pwd);
    const testPassLength = (pwd.length >= 8);

    setCharValid({
      uppercase : testUpperCase ,
      specialChar : testSpecialChar ,
      passLength : testPassLength
    })

    if (testUpperCase===true && testSpecialChar===true && testPassLength===true){
      setIsValid(true)
    }
    else{
      setIsValid(false)
    }
  }
  
  const onSubmit = async (e)=>{
    const formData = {
      name: `${firstName} ${secondName}`,
      email: email,
      password: password,
      img: image,
      gender: gender,
      twoFactor: twoFactor,
    }
    e.preventDefault(); 
     axios.post('/api/auth/signup',formData,{
      headers:{
        "Content-Type":"application/json"
      }
     })
     .then((res)=>{
      console.log(res);
     })
     .catch((error)=>{
      const {res} = error;
      console.log(error);
      
     })
  }
  
  console.log(loading);
  
  useEffect(() => {
    (passCheck === password)? setIsMatch(true) : setIsMatch(false);
  }, [password,passCheck]);

  
  return (
    <>
      <form className="flex justify-end w-full h-screen font-montserrat overflow-hidden dark:bg-slate-800" onSubmit={onSubmit} onChange={()=>setLoading(false)}>

      <div className={`flex items-center w-2/4 h-98 flex-col mt-28 -translate-x-full transition-transform duration-500 ${!isOpen ? '!translate-x-0':''} sm:w-full sm:m-0 sm:p-8 sm:mt-5`}>
      
      <h1 className="text-2xl font-montserrat font-semibold text-center border-b-2 border-black h-10 mb-14 sm:mb-6 sm:h-16 dark:text-white dark:border-white">Welcome to your new diary</h1>
      <div className=" w-2/4 flex flex-col mb-5 sm:w-full dark:text-white" >
            <div className="w-full flex flex-row justify-between">
            <div className="flex flex-col w-5/12 text-nowrap ">
            <label htmlFor="firstname_textarea">First Name</label>
            <input
              type="text"
              name="first_name"
              id="firstname_textarea"
              className="text-left h-9 text-lg p-1 mb-3 rounded border border-gray-300 dark:text-black" required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            </div>
            <div className="flex flex-col w-5/12 text-nowrap">
            <label htmlFor="secondname_textarea">Second Name</label>
            <input
              type="text"
              name="second_name"
              id="secondname_textarea"
              className="text-left h-9 text-lg p-1 mb-3 rounded border border-gray-300 dark:text-black" required
              value={secondName}
              onChange={(e) => setSecondName(e.target.value)}
            />
            </div>
            </div>
            <label htmlFor="email_textarea">Enter Email</label>
            <input
              type="email"
              name="email"
              id="email_textarea"
              className="text-left h-9 text-lg p-1 mb-3 rounded border border-gray-300 dark:text-black" required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="new_password">Enter Password</label>
            <input
              type="password"
              name="new_password"
              id="new_password"
              className="text-left h-9 text-lg p-1 mb-3  rounded border border-gray-300 dark:text-black"  required
              value={password}
              onChange={(e) => {setPassword(e.target.value);
                            validatePassword(e.target.value);
              }}
            />
              <ul className="max-w-md space-y-1 text-gray-500 list-inside text-x mb-3 dark:text-gray-400">
                  <li className="flex items-center">
                      <svg className={`w-3.5 h-3.5 me-2 ${isValid || charValid.passLength? 'text-green-500' : 'text-gray-500'} flex-shrink-0`}  aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                      </svg>
                      At least 8 characters
                  </li>
                  <li className="flex items-center">
                      <svg className={`w-3.5 h-3.5 me-2 ${isValid || charValid.uppercase ? 'text-green-500' : 'text-gray-500'} flex-shrink-0`}  aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                      </svg>
                      At least one UpperCase character
                  </li>
                  <li className="flex items-center">
                      <svg className={`w-3.5 h-3.5 me-2 ${isValid || charValid.specialChar ? 'text-green-500' : 'text-gray-500'} flex-shrink-0`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                      </svg>
                      At least one special character, e.g., ! @ # ?
                  </li>
              </ul>

            <label htmlFor="password_check">Re-enter Password</label>
            <input
              type="password"
              name="password_check"
              id="password_check"
              className={`text-left h-9 text-lg p-1 mb-4 rounded border dark:text-black ${
                isMatch ? 'border-gray-300' : 'border-red-500'}`}
              required
              value={passCheck}
              onChange={(e) => {
                  setPassCheck(e.target.value)
                  
              }}
            />

            {!isMatch && (
          <p className="text-red-500 text-sm mb-2">Passwords do not match</p>
          )}
        
        <Button
          type='button'
          className="
            bg-indigo-500
            hover:bg-indigo-600 
            focus:ring-indigo-300  
            focus-visible:ring-indigo-300
            self-end"
          disabled={isMatch == false && isValid == false} 
          onClick={()=>{if (isMatch && isValid){
              setIsOpen(true);
          }
        else{
            setIsOpen(false);
        }}}
        >
          <ArrowRightIcon className='fill-white w-5'/>
        </Button>
        
      </div>

      <h1 className="text-l  text-center border-b-2 border-black mb-6 dark:text-white dark:border-white">Or</h1>
      <Auth/>

      </div>

      <div className={`fixed z-0 flex items-center w-2/4 h-98 flex-col mt-28 translate-x-full transition-transform duration-500 ${isOpen ? '!-translate-x-full sm:!translate-x-0':''} sm:w-full sm:m-0 sm:p-8 sm:mt-5`}>
      <h1 className="text-2xl font-montserrat font-semibold text-center border-b-2 border-black h-10 mb-14 sm:mb-6 sm:h-16 dark:text-white dark:border-white">One last step....</h1>
      <div className=" w-2/4 flex flex-col mb-5 sm:w-full gap-1 dark:text-white" onSubmit={onSubmit}>
            <label htmlFor="image_area">Add Image</label>
            <label htmlFor="image_area">
            <div className="flex flex-col w-full rounded border p-2 mb-7 dark:border-gray-500">
            <img src={viewImage} htmlFor='image_area' alt='image' className='w-36 h-36 text-center rounded-full border border-gray-300 mb-3 self-center dark:border-gray-500'/>
            <input
              type="file"
              name="image_area"
              id="image_area"
              className="text-left text-sm" 
              hidden
              required
              accept="image/*"
              onChange={(e)=>{
                setImage(e.target.files[0]);
                const file = e.target.files[0];
                if (file) {
                  setViewImage(URL.createObjectURL(file));
                }}}
            />
            </div></label>

            <div className="w-full dark:text-white flex justify-between mb-7">
            <label htmlFor="gender">Gender:</label>
              <select name="Gender" id="gender" className='bg-gray-300 p-1 rounded flex ss dark:bg-gray-600' onChange={(e)=>setGender(e.target.value)}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Prefer Not to say">Prefer Not to say</option>
              </select>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                name="two_factor_check"
                id="two_factor_check"
                className="rounded mr-2 "
                onChange={()=>setTwoFactor(!twoFactor)}
              />
              <label htmlFor="two_factor_check">Enable Two Factor Authentication</label>
            </div>
              <div className="flex items-center">
              <input
                type="checkbox"
                name="AgreementCheck"
                id="AgreementCheck"
                className="rounded mr-2"
                onChange={()=>setAgreeCheck(!agreeCheck)}
                required
              />
              <label htmlFor="AgreementCheck">I Acknowledge and accept to the <Link className='text-blue-400'>terms and conditions</Link> of the Agreement.</label>
            </div>
          <div className="flex flex-row w-full justify-between items-center mt-2">
          <Button
          type='button'
          className="
            bg-red-500
            hover:bg-red-600 
            focus:ring-red-300  
            focus-visible:ring-red-300 
            self-start"
          
          onClick={()=>{setIsOpen(false)}}
        >
          <ArrowLeftIcon className='fill-white w-5'/>
        </Button>
        <Button
          type='submit'
          className="
            bg-indigo-500
            hover:bg-indigo-600 
            focus:ring-indigo-300  
            focus-visible:ring-indigo-300"
          disabled={!agreeCheck || loading} 
          onClick={()=>console.log("this is accepatbel")
          }
        >
          Sumbit
        </Button>
        </div>
      </div>
      </div>

      <div className="flex w-2/4 z-20 h-98 bg-blue-500 rounded-xl self-center mr-2 sm:hidden justify-center relative dark:bg-blue-800" >
        <h1 className="w-1/4 text-7xl text-white absolute top-10 left-16">Start writing today</h1>
        <img className="w-2/4 h-2/4 bg-contain bg-center absolute top-72 left-20" src={signupGif}/>
        <div className="w-2/4 min-h-40 bg-gray-600 bg-opacity-40 absolute top-64 right-10 rounded-lg p-3"> 
        <TypeAnimation
      sequence={[
        "",
        1000,
        "The territory today known as England became inhabited more than 700",
        1000,
        "The territory today known as England became inhabited more than 800,000 years ago, as the of",
        1000,
        "The territory today known as England became inhabited more than 800,000 years ago, as the discovery of stone tools and footprints at Happsburgh",
        1000,
        "The territory today known as England became inhabited more than 800,000 years ago, as the discovery of stone tools and footprints at Happisburgh in Norfolk have indicated.",
        1000
      ]}
      wrapper="span"
      speed={40}
      className='text-white text-lg'
      repeat={Infinity}
    />
        </div>
      </div>
    
    </form>
    </>
  )
}

export default SignUp
