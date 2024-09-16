import { Link } from "react-router-dom"
import { ArrowLeftIcon } from "@heroicons/react/24/solid"
import error404 from "../../assets/Images/error404.png"

function Error404() {
  return (
    <div className="w-full h-full flex flex-row items-center justify-center font-raleway sm:flex-col">
      <img src={error404} alt="Error 404" className="w-96 h-80 mb-20 sm:mb-0 sm:w-72 sm:h-64"/>
      <div className="flex flex-col">
      <header className="text-4xl text-black p-4">404 Page Not Found</header>
      <p className="text-xl p-4">Seems like this page is unvailable or under-construction.</p>
      <button className="flex flex-row items-center p-4">
        <ArrowLeftIcon className="fill-black w-5 h-5 mr-2"/>
        <Link to="/" className="text-xl">Go back to home screen</Link>
      </button>
      </div>
    </div>
  )
}

export default Error404
