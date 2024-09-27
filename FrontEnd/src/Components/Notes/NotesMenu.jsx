import { useState, useEffect } from "react";
import NavBar from "../UI/NavBar";
import Titleblock from "./NotesUI/Titleblock"
import { PlusIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import CreateMenu from "./NotesUI/CreateMenu";
import Button from "../UI/Button";
import Footer from '../UI/Footer';
import { useSelector } from "react-redux";
import ReactDOM from 'react-dom';
import axios from "axios";

function NotesMenu() {
  const [search, setSearch] = useState('');
  const [change, setChange] = useState(false);
  const pageData = useSelector((state) => state.editorData.pageData);
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([]); // Initialize with an empty array
  const [filterData, setFilterData] = useState(data);

  useEffect(() => {
    axios.get('/api/notes')
      .then((res) => {
        const resData = res.data;
        setData(resData);
      })
      .catch((err) => {
        console.error("Error fetching notes:", err); // Handle any error
      });
  }, [isOpen, change]); // Empty dependency array to run only once on mount

useEffect(()=>{
   setFilterData(data.filter(item => item.title.toLowerCase().includes(search.toLowerCase())));
  },[search, data]);



const createNewPage = ()=>{
setIsOpen(!isOpen);
};

  return (
    <>
    <div className="dark:bg-gray-800 h-full overflow-hidden">
    <NavBar/>
  
    <div className="w-full h-[90%] flex flex-col px-4 relative">
      <span className="text-black text-4xl font-bold font-montserrat dark:text-[#dddddd] py-2 self-center">Notes Menu</span>
    
    <div className="w-full h-[90%] absolute top-3 flex flex-row justify-evenly"> 
    <div className="size-32 rounded-full bg-[#2596ff] relative blur-2xl top-[50%] animate-up"></div>
    <div className="size-32 rounded-full bg-[#eeeb37] relative blur-2xl top-[50%] animate-up animation-delay-1000"></div>
    <div className="size-32 rounded-full bg-[#5bff70] relative blur-2xl top-[50%] animate-up animation-delay-2000"></div>
    <div className="size-32 rounded-full bg-[#f78a31] relative blur-2xl top-[50%] animate-up animation-delay-3000"></div>
    <div className="size-32 rounded-full bg-[#f267ff] relative blur-2xl top-[50%] animate-up animation-delay-4000"></div>
    <div className="size-32 rounded-full bg-[#ff4f4f] relative blur-2xl top-[50%] animate-up animation-delay-5000"></div>
    <div className="size-32 rounded-full bg-[#ffa136] relative blur-2xl top-[50%] animate-up animation-delay-6000"></div>
    </div>
    <div className='w-full h-full rounded flex flex-col bg-[#cfcfcf67] backdrop-blur-md items-center font-montserrat py-4 gap-4 dark:bg-[#0d1429b0] sm:h-[90%]'> 
      <div className="w-11/12 flex flex-row justify-between items-center">
        <div className="w-2/4 h-10 bg-white flex flex-row gap-1 rounded p-1 sm:w-3/4 dark:bg-[#3a3a3a]">
        <label htmlFor='search_box' className="flex">
        <MagnifyingGlassIcon   className="fill-black w-6 dark:fill-white"/></label>
        <input type='text' className="w-full h-full border-l border-gray-200 px-2 dark:bg-[#3a3a3a] dark:border-[#868686] dark:placeholder:text-[#dadada] dark:text-white" placeholder="Search" value={search} onChange={(e)=>setSearch(e.target.value)} id="search_box"/>
        
        </div>
        <div className="flex flex-row gap-3 relative">
        <Button onClick={createNewPage} className="
        bg-slate-500
        hover:bg-slate-600 
        focus:ring-slate-300  
        focus-visible:ring-slate-300">
          <PlusIcon className="fill-white w-5"/> 
          New
        </Button>
      </div>
      </div>
    <div className="h-full w-full flex flex-col items-center overflow-y-scroll ">
      {
        (data == "")? (
          <span  className="text-3xl font-montserrat dark:text-[#a5a5a5] my-auto sm:text-xl">Add some pages to your diary</span>
        ):(
          <div className="w-11/12 h-[17rem] flex  flex-row gap-7 flex-wrap justify-start sm:h-fit sm:flex-col sm:gap-5 sm:flex-nowrap sm:items-center sm:w-full">
            {filterData.map((element, index) => {
              const img = pageData[index] ? pageData[index].img : null;
              
          return (<Titleblock key={index} id={element._id} title={element.title} date={element.dateCreated} img={img} setChange={setChange}/>);       
          })}
      </div>
        )
      }
    
      </div>
      
      </div>
    </div>
    
    </div>
    <div className="dark:bg-gray-800 pt-10">
      <Footer/>
    </div>
    {isOpen && ReactDOM.createPortal(
      <CreateMenu setIsOpen={setIsOpen}/>,
  document.body)}
  
    </>
    
  )
}

export default NotesMenu
