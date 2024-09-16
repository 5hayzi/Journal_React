import { Link } from "react-router-dom"
import { ArrowLeftIcon } from "@heroicons/react/24/solid"
import error500 from "../../assets/Images/error500.png"

function Error404() {
  return (
    <div className="w-full h-full flex flex-row items-center justify-center font-raleway sm:flex-col-reverse">
      <div className="flex flex-col w-2/5 sm:w-full">
      <header className="text-4xl text-black p-4">500 Server Error</header>
      <p className="text-xl p-4">The server is not working at the moment or under maintenance, try again in a while.</p>
      <button className="flex flex-row items-center p-4">
        <ArrowLeftIcon className="fill-black w-5 h-5 mr-2"/>
        <Link to="/" className="text-xl">Go back to home screen</Link>
      </button>
      </div>
      <img src={error500} alt="Error 404" className="w-64 h-72 sm:w-52 sm:h-60"/>
    </div>
  )
}

export default Error404