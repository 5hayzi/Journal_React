import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/solid"
import PropTypes from 'prop-types'
import Button from "../../UI/Button"
import { Link } from "react-router-dom"

function Titleblock(props) {
  return (
    <>
    <div className='w-11/12 min-h-16 bg-primary-b rounded  flex-row py-1 justify-between font-montserrat mb-2 hidden sm:flex'>
        <button className="flex flex-col ml-3">
        <h1 className="text-xl font-medium text-start text-wrap" >{props.title}</h1>
        <h2 className="text-m" >{props.date}</h2>
        </button>
        <div className="flex flex-row items-center gap-3 pr-4">
            <Link to="/view-notes/editor"><Button className="
            bg-green-500
            hover:bg-green-600 
            focus:ring-green-300  
            focus-visible:ring-green-300"
            htmlFor="editor_link"
            >
            <PencilSquareIcon className="fill-white w-5 mr-1"/>
            Edit
            </Button></Link>


            <Button className="
            bg-red-500
            hover:bg-red-600 
            focus:ring-red-300  
            focus-visible:ring-red-300 ">
            <TrashIcon className="fill-white w-5 mr-1"/>
            <span>Delete</span>
            </Button>
            
        </div>
    </div>

    <div className='w-[15%] h-full bg-primary-b rounded flex flex-col py-1 justify-between font-montserrat sm:hidden'>
        <button className="flex flex-col p-3 ">
        <h1 className="text-2xl font-medium text-start text-wrap" >{props.title}</h1>
        <h2 className="text-m" >{props.date}</h2>
        </button>
        <div className="flex flex-row items-center self-center gap-3 py-2">
            <Link to="/view-notes/editor"><Button className="
            bg-green-500
            hover:bg-green-600 
            focus:ring-green-300  
            focus-visible:ring-green-300"
            htmlFor="editor_link"
            >
            <PencilSquareIcon className="fill-white w-5"/>
            Edit
            </Button></Link>


            <Button className="
            bg-red-500
            hover:bg-red-600 
            focus:ring-red-300  
            focus-visible:ring-red-300 ">
            <TrashIcon className="fill-white w-5"/>
            <span>Delete</span>
            </Button>
            
        </div>
    </div>

    </>
  )
}

Titleblock.propTypes ={
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
}

export default Titleblock
