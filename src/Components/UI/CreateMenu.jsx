import PropTypes from 'prop-types'
import { useState } from 'react';
import moment from 'moment';
import Button from './Button';

function CreateMenu(props) {
  const [date, setDate] = useState();

  setTimeout((()=>{
    setDate(`${moment().format("D-M-YYYY")}`)

  }), 200)

  const handleOpen = ()=>{
      props.setIsOpen(false)
  }

  const setDelete = (e)=>{
    e.preventDefault();
    console.log("Delete works properly");  
  }

  return (
    <form className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-2 w-1/4 bg-white rounded shadow-lg z-10 font-montserrat flex flex-col gap-3 p-3 sm:w-2/3 active:backdrop-blur-3xl">
          <input type="text" placeholder="Enter Title" value={props.title} className="p-2 text-lg border border-gray-400 rounded focus:border-black" />
          <input type="text" placeholder="Enter Title" value={date} className="p-2 text-lg border border-gray-400 rounded focus:border-black"/>
          <div className="flex flex-row w-full justify-between">
          <Button color='red' onClick={handleOpen}><span>Cancel</span></Button>
          <Button color='indigo' onClick={setDelete}><span>Submit</span></Button>
          </div>
        </form>
  );
}

CreateMenu.propTypes = {
  title: PropTypes.string.isRequired,
  setIsOpen: PropTypes.func
}

export default CreateMenu;
