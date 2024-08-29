import {useState, useEffect} from 'react'
import facebookLogo from '../../assets/Images/facebook-logo.svg'
import googleLogo from '../../assets/Images/google-logo.svg'
import twitterLogo from '../../assets/Images/twitter-logo.svg'
import signupGif from '../../assets/Images/typing.gif'
import { TypeAnimation } from 'react-type-animation';



function SignUp() {
  const[firstName, setFirstName] = useState('');
  const[secondName, setSecondName] = useState('');
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');
  const[passCheck, setPassCheck] = useState('');
  const [isMatch, setIsMatch] = useState(true);
  // const[errors, setErrors] =useState({
  //   password:[],
  // });
  const [charValid, setCharValid] = useState({
    uppercase: false ,
    specialChar: false ,
    passLength: false
  });

  const [isValid, setIsValid] = useState(false);

  const validatePassword = (pwd) => {
    const uppercasePattern = /[A-Z]/;               // Checks for at least one uppercase letter
    const specialCharPattern = /[!@#$%^&*(),.?":{}|<>]/; // Checks for at least one special character
    const testUpperCase = uppercasePattern.test(pwd);
    const testSpecialChar = specialCharPattern.test(pwd);
    const testPassLength = (pwd.length >= 10);

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

  console.log(charValid.uppercase);
  console.log(charValid.specialChar);
  console.log(charValid.passLength);
  console.log("this is very " + isValid);
  

  const onSubmit = (e)=>{
    e.preventDefault();
    console.log("this");  
  }

  useEffect(() => {
    (passCheck === password)? setIsMatch(true) : setIsMatch(false);
  }, [password,passCheck]);

  // useEffect(() => {
  //   password.forEach(e => {
  //     if((e == '!'||e == '#'||e == '@'||e == '?'))
  //   })
  // }, [password]);
  return (
    <>
      <div className="flex justify-end w-full h-screen font-raleway overflow-hidden">

      <div className="flex items-center w-2/4 h-98 flex-col mt-28 sm:w-full sm:m-0 sm:p-8 sm:mt-5">
      
      <h1 className="text-2xl raleway font-bold text-center border-b-2 border-black h-14 mb-14 sm:mb-6 sm:h-16">Welcome to your new diary</h1>
      <form className="w-2/4 flex flex-col mb-5 sm:w-full" onSubmit={onSubmit}>
            <div className="w-full flex flex-row justify-between">
            <div className="flex flex-col w-5/12">
            <label htmlFor="firstname_textarea">First Name</label>
            <input
              type="text"
              name="first_name"
              id="firstname_textarea"
              className="text-left h-9 text-lg p-1 mb-3 rounded border border-gray-300" required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            </div>
            <div className="flex flex-col w-5/12">
            <label htmlFor="secondname_textarea">Second Name</label>
            <input
              type="text"
              name="second_name"
              id="secondname_textarea"
              className="text-left h-9 text-lg p-1 mb-3 rounded border border-gray-300" required
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
              className="text-left h-9 text-lg p-1 mb-3 rounded border border-gray-300" required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="new_password">Enter Password</label>
            <input
              type="password"
              name="new_password"
              id="new_password"
              className="text-left h-9 text-lg p-1 mb-3  rounded border border-gray-300"  required
              value={password}
              onChange={(e) => {setPassword(e.target.value);
                            validatePassword(e.target.value);
              }}
            />
            {/* {
              errors.password.map((e, index) => {
                return <small key={index} className='text-red-500'>{e}</small>
              })
            } */}
              <ul className="max-w-md space-y-1 text-gray-500 list-inside text-x mb-3">
                  <li className="flex items-center">
                      <svg className={`w-3.5 h-3.5 me-2 ${isValid || charValid.passLength? 'text-green-500' : 'text-gray-500'} flex-shrink-0`}  aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                      </svg>
                      At least 10 characters
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
              className={`text-left h-9 text-lg p-1 mb-4 rounded border ${
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

        <button
          type="submit"
          className='w-1/4 h-10 font-semibold text-center bg-gray-200 text-l rounded self-center mt-1 hover:cursor-pointer'
          disabled={!isMatch && !isValid}
        >
          Sign Up
        </button>
      </form>

      <h1 className="text-l raleway text-center border-b-2 border-black mb-6">Or</h1>
      <div className="flex justify-evenly items-center w-2/5 mb-6 sm:w-full">
            <button className="flex items-center justify-center w-1/5 h-10 bg-gray-100 rounded">
              <img src={googleLogo} title="Google" className="w-7"/>
            </button>
            <button className="flex items-center justify-center w-1/5 h-10 bg-gray-100 rounded">
              <img src={facebookLogo} title="Facebook" className="w-7"/>
            </button>
            <button className="flex items-center justify-center w-1/5 h-10 bg-gray-100 rounded">
              <img src={twitterLogo} title="Twitter" className="w-7"/>
            </button>
          </div>
      </div>

      <div className="flex w-2/4 h-98 bg-blue-500 rounded-xl self-center mr-2 sm:hidden justify-center relative" >
        <h1 className="w-1/4 text-7xl text-white absolute top-10 left-16">Start writing today</h1>
        <img className="w-2/4 h-2/4 bg-contain bg-center absolute top-72 left-20" src={signupGif}/>
        <div className="w-2/4 h-1/5 bg-gray-600 bg-opacity-40 absolute top-64 right-10 rounded-lg p-3"> 
        <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "The territory today known as England became inhabited more than 700",
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        "The territory today known as England became inhabited more than 800,000 years ago, as the of",
        1000,
        "The territory today known as England became inhabited more than 800,000 years ago, as the discovery of stone tools and footprints at Happsburgh",
        1000,
        "The territory today known as England became inhabited more than 800,000 years ago, as the discovery of stone tools and footprints at Happisburgh in Norfolk have indicated.",
        1000
      ]}
      wrapper="span"
      speed={40}
      className='text-white text-xl'
      repeat={Infinity}
    />
        </div>
      </div>
    
    </div>
    </>
  )
}

export default SignUp
