import { useState, useEffect } from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";


function ResetPassword() {
    const[newPassword, setNewPassword] = useState('');
    const[newPassCheck, setNewPassCheck] = useState('');
    const [isMatch, setIsMatch] = useState(true);
    const [isValid, setIsValid] = useState(false);
    const [charValid, setCharValid] = useState({
        uppercase: false ,
        specialChar: false ,
        passLength: false
      });

    const onSubmit = (e)=>{
        e.preventDefault();
        console.log("this");  
      }

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
    
    useEffect(() => {
        (newPassCheck === newPassword)? setIsMatch(true) : setIsMatch(false);
      }, [newPassword,newPassCheck]);
  return (
    
    <div className="flex justify-center items-center h-screen font-raleway">
        <div className="w-1/4 bg-gray-300 p-7 rounded">
        <header className="text-2xl mb-4">Reset Password</header>
        <form onSubmit={onSubmit} className="flex flex-col">
            <label htmlFor="new_password">Enter New Password</label>
            <input
              type="password"
              name="new_password"
              id="new_password"
              className="text-left h-9 text-lg p-1 mb-3  rounded border border-gray-300"  required
              value={newPassword}
              onChange={(e) => {setNewPassword(e.target.value)
                setIsValid(validatePassword(e.target.value));
              }}
            />
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
            <label htmlFor="password_check">Re-enter New Password</label>
            <input
              type="password"
              name="password_check"
              id="password_check"
              className={`text-left h-9 text-lg p-1 mb-4 rounded border ${
                isMatch ? 'border-gray-300' : 'border-red-500'}`}
              required
              value={newPassCheck}
              onChange={(e) => {
                  setNewPassCheck(e.target.value)
                  
              }}
            />
            {!isMatch && (
          <p className="text-red-500 text-sm mb-2">Passwords do not match</p>
          )}
            <button className="flex w-8 h-8 bg-gray-400 rounded text-center hover:cursor-pointer self-end justify-center items-center" disabled={!isMatch && !isValid} type="submit"><ArrowRightIcon className="h-6 w-6"/></button>
            </form>
            </div>
    </div>
  )
}

export default ResetPassword
