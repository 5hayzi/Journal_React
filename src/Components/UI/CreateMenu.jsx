import PropTypes from 'prop-types'
import { useState, useEffect } from 'react';
import moment from 'moment';
import Button from './Button';

function CreateMenu(props) {
  const [title, setTitle] = useState('');
  const [createData, setCreateData] = useState(
    { 
      title: '',
      date: '' 
    });
  const [date, setDate] = useState();

  setTimeout((()=>{
    setDate(`${moment().format("D-M-YYYY")}`)

  }), 200)

  const handleOpen = ()=>{
      props.setIsOpen(false)
  }
  
  useEffect(()=>{
    setCreateData({
      title: title,
      date: date
    })
  },[title]);



  const onSubmit = (e)=>{
    e.preventDefault();
    props.setData([...props.data, createData]);
    props.setIsOpen(false)
  }

  return (
    <div className='w-screen h-screen backdrop-blur-lg absolute flex items-center justify-center z-10'>
    <form className="w-2/6 bg-white rounded shadow-lg z-10 font-montserrat flex flex-col gap-4 p-5 sm:w-2/3 active:backdrop-blur-3xl" onSubmit={onSubmit}>
          <div className='flex flex-col gap-1'>
          <label htmlFor="create_title" className="text-lg">Journal page title </label>
          <input type="text" name="journal_title" placeholder="Enter Title" value={title} onChange={(e)=>setTitle(e.target.value)} className="p-2 text-lg border border-gray-400 rounded focus:border-black" id='create_title' required/>
          </div>
          <div className='flex flex-col gap-1'>
          <label htmlFor="create_date" className="text-lg">Journal Date: </label>
          <input type="text" name="journal_date" placeholder="Enter Title" value={date} className="p-2 text-lg border border-gray-400 rounded focus:border-black" id='create_date' required/>
          </div>
          <div className="flex flex-row w-full justify-between">
          <Button onClick={handleOpen} className="
          bg-red-500
          hover:bg-red-600 
          focus:ring-red-300  
          focus-visible:ring-red-300 "><span>Cancel</span></Button>
          <Button type="submit" className="
          bg-indigo-500
          hover:bg-indigo-600 
          focus:ring-indigo-300  
          focus-visible:ring-indigo-300 "><span>Submit</span></Button>
          </div>
        </form></div>
  );
}

CreateMenu.propTypes = {
  setIsOpen: PropTypes.func,
  setData: PropTypes.func,
  data: PropTypes.array
}

export default CreateMenu;
