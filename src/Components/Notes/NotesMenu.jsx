import { useState, useEffect } from "react";
import NavBar from "../UI/NavBar";
import Titleblock from "./NotesUI/Titleblock"
import { PlusIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import CreateMenu from "../UI/CreateMenu";
import Button from "../UI/Button";



function NotesMenu() {
  const [search, setSearch] = useState('');
  const data = [
  {
    title: "first dairy",
    date: "31-8-2024"
  },
  {
    title: "Second dairy",
    date: "3-2-2024"
  },
  {
    title: "Third dairy",
    date: "1-2-2024"
  },
  {
    title: "Fourth dairy",
    date: "23-5-2024"
  }
]
const [filterData, setFilterData] = useState(data);

  useEffect(()=>{
   setFilterData(data.filter(item => item.title.toLowerCase().includes(search.toLowerCase())));
  },[search]);

const [isOpen, setIsOpen] = useState(false);

const createNewPage = ()=>{
setIsOpen(!isOpen);
};

  return (
    <>
    <NavBar/>

    <div className="w-full h-fit flex flex-col px-4">
    {isOpen && (<CreateMenu setIsOpen={setIsOpen}/>)}
    <div className='w-full min-h-screen rounded flex flex-col bg-primary-m items-center font-raleway '>
      <div className="w-11/12 flex flex-row my-4 justify-between items-center">
        <div className="w-2/4 h-10 bg-white flex flex-row gap-3 rounded p-2">
        <MagnifyingGlassIcon className="fill-black w-6 border-r border-gray-200"/>  
        <input type='text' className="w-full h-full" placeholder="Search" value={search} onChange={(e)=>setSearch(e.target.value)}/>
        
        </div>
        <div className="flex flex-row gap-3 relative">
        <Button color='slate' onClick={createNewPage}>
          <PlusIcon className="fill-black w-4"/>
          New
        </Button>

        {/* <h2 className="text-sm self-end">Showing <dropdown>50</dropdown> of 50</h2> */}
      </div>
      </div>
      
    
      {filterData.map((element, index) => {
        return (<Titleblock key={index} title={element.title} date={element.date}/>);
      })}
 
      
      </div>
    </div>
    </>
    
  )
}

export default NotesMenu
