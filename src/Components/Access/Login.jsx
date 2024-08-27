import { Link } from 'react-router-dom'
import backgroundLogin from '../../assets/Images/background-login.svg'
import facebookLogo from '../../assets/Images/facebook-logo.svg'
import googleLogo from '../../assets/Images/google-logo.svg'
import twitterLogo from '../../assets/Images/twitter-logo.svg'

function Login() {
  return (
    <>
      <div className="flex justify-end w-full h-screen font-raleway">
        <div
          className="w-2/4 h-98 bg-cover bg-center bg-repeat sm:hidden self-center ml-2 rounded-xl"
          style={{ backgroundImage: `url(${backgroundLogin})` }}
        ></div>

        <div className="flex flex-col justify-center items-center bg-white flex-1 h-screen">
          <div className="text-3xl mb-16 ">
            <h1>Welcome Back!</h1>
            <hr className="h-0.5 bg-black mt-2 mb-4 w-full"/>
          </div>
          <form className="flex w-3/6 flex-col px-8 sm:px-2 sm:w-3/4">
            <label htmlFor="username_textarea">Username or Email</label>
            <input
              type="text"
              name="username"
              id="username_textarea"
              className="text-left h-9 text-lg p-1 mb-4 rounded border border-gray-300"
            />

            <label htmlFor="password_textarea">Password</label>
            <input
              type="text"
              name="password"
              id="password_textarea"
              className="text-left h-9 text-lg p-1 mb-4 rounded border border-gray-300"
            />

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
              <button className="w-full bg-gray-300 text-xl font-semibold rounded py-1 px-2">
                Log In
              </button>
            </div>
          </form>

          <div className="flex justify-between items-center w-3/6 mb-6">
            <button className="flex items-center justify-center w-24 h-10 bg-gray-100 rounded">
              <img src={googleLogo} title="Google" className="w-7"/>
            </button>
            <button className="flex items-center justify-center w-24 h-10 bg-gray-100 rounded">
              <img src={facebookLogo} title="Facebook" className="w-7"/>
            </button>
            <button className="flex items-center justify-center w-24 h-10 bg-gray-100 rounded">
              <img src={twitterLogo} title="Twitter" className="w-7"/>
            </button>
          </div>

          <div className="flex flex-col items-center justify-around">
            <button className="text-blue-900 mt-5">
              <Link to ="/access/log-in/reset-password">Forgot Password?</Link></button>
            <span className="mt-6">
              New here? <Link to="/access/sign-up" className="text-blue-500">Sign Up</Link>
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
