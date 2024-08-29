import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/solid"
import PropTypes from 'prop-types'
import Button from "../../UI/Button"

function Titleblock(props) {
  return (
    <div className='w-11/12 h-16 bg-primary-b rounded flex flex-row py-1 justify-between font-raleway mb-2'>
        <button className="flex flex-col ml-3">
        <h1 className="text-xl" >{props.title}</h1>
        <h2 className="text-m" >{props.date}</h2>
        </button>
        <div className="flex flex-row items-center gap-4 pr-4">
            <Button color="green">
            <PencilSquareIcon className="fill-white w-5 mr-1"/>
            <span>Edit</span>
            </Button>

            <Button color="red">
            <TrashIcon className="fill-white w-5 mr-1"/>
            <span>Delete</span>
            </Button>
            
        </div>
      
    </div>
  )
}

Titleblock.propTypes ={
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
}

export default Titleblock
