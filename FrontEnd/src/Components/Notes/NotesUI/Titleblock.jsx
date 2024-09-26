import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/solid"
import PropTypes from 'prop-types'
import Button from "../../UI/Button"
import { Link } from "react-router-dom"
import { useState } from "react"
import ReactDOM from 'react-dom'
import DeleteMenu from "./DeleteMenu"

function Titleblock({title, date, img, id}) {
    const [openDelete, setOpenDelete] = useState(false);

    const handleDelete = ()=>{
        setOpenDelete(true);
    }
  return (
    <>
    <div className='w-11/12 min-h-16 bg-primary-b rounded  flex-row py-1 justify-between font-montserrat mb-2 hidden sm:flex dark:bg-slate-900'>
        <button className="flex flex-col ml-3">
        <h1 className="text-xl font-medium text-start text-wrap dark:text-[#dddddd]" >{title}</h1>
        <h2 className="text-m dark:text-[#dddddd]" >{date}</h2>
        </button>
        <div className="flex flex-row items-center gap-3 pr-4">
            <Link to={`/view-notes/editor/${id}`}><Button className="
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
            focus-visible:ring-red-300 "
            onClick={handleDelete}>
            <TrashIcon className="fill-white w-5 mr-1"/>
            <span>Delete</span>
            </Button>
            
        </div>
    </div>

    <div className='w-[15%] min-h-full bg-primary-b rounded flex flex-col font-montserrat sm:hidden gap-2 py-2 dark:bg-gradient-to-tr from-[#474747] via-[#3d3d3d] to-[#292929]'>
        <Link to={`/view-notes/editor/${id}`} className="flex flex-1 flex-col justify-between">
        <div className="size-fit flex flex-col items-start px-3 pb-2">
        <h1 className="text-2xl font-medium text-start text-wrap dark:text-[#dddddd]" >{title}</h1>
        <h2 className="text-m dark:text-[#dddddd]" >{date}</h2>
        </div>
        
        <img src={img ?? ''} className={`w-11/12 h-[7.5rem] self-center rounded ${img === null? 'hidden':''}`} />
        </Link>
        <div className="flex flex-row items-center self-center gap-3">
            <Button className="
            bg-green-500
            hover:bg-green-600 
            focus:ring-green-300  
            focus-visible:ring-green-300"
            htmlFor="editor_link"
            >
            <PencilSquareIcon className="fill-white w-5"/>
            Edit
            </Button>
            <Button className="
            bg-red-500
            hover:bg-red-600 
            focus:ring-red-300  
            focus-visible:ring-red-300 "
            onClick={handleDelete}>
            <TrashIcon className="fill-white w-5"/>
            <span>Delete</span>
            </Button>
            
        </div>
    </div>
    {openDelete && ReactDOM.createPortal(
        <DeleteMenu setOpenDelete={setOpenDelete} id={id} title={title}/>,
        document.body
      )}
    </>
  )
}

Titleblock.propTypes ={
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    img: PropTypes.string
}


export default Titleblock
