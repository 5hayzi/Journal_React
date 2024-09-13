import { useState, useEffect, useRef } from "react";
import NavBar from "../UI/NavBar";
import Titleblock from "./NotesUI/Titleblock"
import { PlusIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import CreateMenu from "../UI/CreateMenu";
import Button from "../UI/Button";
import html2canvas from 'html2canvas';


function NotesMenu() {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([
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
]);
const [image, setImage] = useState(null);
const captureRef = useRef();

const [filterData, setFilterData] = useState(data);

  useEffect(()=>{
   setFilterData(data.filter(item => item.title.toLowerCase().includes(search.toLowerCase())));
  },[search, data]);
  
useEffect(() => {
    html2canvas(captureRef.current).then(canvas => {
    const imgData = canvas.toDataURL('image/png');
    setImage(imgData); // Save the image data
    console.log('pic');
    
  });   
  }, []);

const [isOpen, setIsOpen] = useState(false);

const createNewPage = ()=>{
setIsOpen(!isOpen);
};

  return (
    <div ref={captureRef} className="dark:bg-gray-800 h-full overflow-hidden">
    <NavBar/>
  
    <div className="w-full h-[90%] flex flex-col px-4">
      <span className="text-black text-4xl font-semibold font-montserrat dark:text-[#dddddd] py-5 self-center">Notes Menu</span>
    {isOpen && (<CreateMenu setIsOpen={setIsOpen} setData={setData} data={data}/>)}
    <div className='w-full h-full rounded flex flex-col bg-primary-l items-center font-montserrat py-5 gap-7 dark:bg-slate-700 sm:h-[90%]'> 
      <div className="w-11/12 flex flex-row justify-between items-center">
        <div className="w-2/4 h-10 bg-white flex flex-row gap-1 rounded p-1 sm:w-3/4">
        <label htmlFor='search_box' className="flex">
        <MagnifyingGlassIcon   className="fill-black w-6"/></label>
        <input type='text' className="w-full h-full border-l border-gray-200 px-2" placeholder="Search" value={search} onChange={(e)=>setSearch(e.target.value)} id="search_box"/>
        
        </div>
        <div className="flex flex-row gap-3 relative">
        <Button onClick={createNewPage} className="
        bg-slate-500
        hover:bg-slate-600 
        focus:ring-slate-300  
        focus-visible:ring-slate-300 ">
          <PlusIcon className="fill-white w-5"/> 
          New
        </Button>

        {/* <h2 className="text-sm self-end">Showing <dropdown>50</dropdown> of 50</h2> */}
      </div>
      </div>
      
      {/* {useEffect(()=>{
      console.log("___________________________");
      data.forEach(element => {
        console.log(element);
      });
      console.log("___________________________");
      
      },[data])} */}
    <div className="h-full w-full flex flex-col items-center overflow-y-scroll ">
      {
        (data == "")? (
          <span  className="text-3xl font-montserrat dark:text-[#a5a5a5]">Add some pages to your diary</span>
        ):(
          <div className="w-11/12 h-[17rem] flex  flex-row gap-7 flex-wrap justify-start sm:h-fit sm:flex-col sm:gap-5 sm:flex-nowrap sm:items-center sm:w-full">
            {filterData.map((element, index) => {
          return (<Titleblock key={index} title={element.title} date={element.date} img={image}/>);
          })}
      </div>
        )
      }
    
      </div>
      
      </div>
    </div>
    </div>
    
  )
}

export default NotesMenu
