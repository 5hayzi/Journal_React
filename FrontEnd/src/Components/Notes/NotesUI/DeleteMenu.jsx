import PropTypes from 'prop-types'
import Button from '../../UI/Button'
import axios from 'axios';

export default function DeleteMenu({setOpenDelete, id, title}) {
    const handleClose = ()=>{
        setOpenDelete(false);
    }
    const handleDelete = ()=>{
        axios.delete(`/api/notes/${id}`)
        .then(() => {
            setOpenDelete(false);
        }).catch((err) => {
            console.log(err); 
        });
    }
  return (
    <div className="backdrop-blur-lg w-full h-screen flex justify-center items-center font-montserrat">
    <div className='w-[20%] min-h-[20%] bg-[#ececec] dark:bg-slate-700 flex flex-col p-3 rounded justify-between sm:w-[80%]'>
      <span className="text-2xl dark:text-white">Sure you want to delete <br/><b><i>{title}</i></b> ?</span>
      <div className="flex flex-row justify-between items-center">
      <Button className="
            bg-red-500
            hover:bg-red-600 
            focus:ring-red-300  
            focus-visible:ring-red-300 "
            onClick={handleClose}>
                cancel
            </Button>
      <Button className="
            bg-indigo-500
            hover:bg-indigo-600 
            focus:ring-indigo-300  
            focus-visible:ring-indigo-300 "
            onClick={handleDelete}>
                confirm
            </Button>
            </div>
    </div></div>
  )
}

DeleteMenu.propTypes ={
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    setOpenDelete: PropTypes.func.isRequired
}
