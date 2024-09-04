import NavBar from "../UI/NavBar";
import { PencilSquareIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import ProfilePage from "./Profilepage";
import General from "./General";
import Notification from "./Notification";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import blob from '../../assets/Images/blob.svg'
import Delete from "./Delete";


export default function Settings(props) {
  const [open , setOpen] = useState(`${(props.title == null)? 'account' : props.title}`);
  
  return (
    <div className="w-full h-full flex flex-col overflow-hidden ">
  <div className="absolute w-[34rem] h-[34rem] top-28 left-[20rem] rounded-full mix-blend-multiply bg-blue-300 filter blur-3xl opacity-60 animate-blob animation-delay-6000 "></div>
  <div className="absolute w-96 h-96 top-[24rem] left-[30%] rounded-full mix-blend-multiply bg-pink-400 filter blur-3xl opacity-60 animate-blob animation-delay-4000 "></div>
  <div className="absolute w-[30rem] h-[30rem] bottom-10 right-9 rounded-full mix-blend-multiply bg-green-300 filter blur-3xl opacity-60 animate-blob animation-delay-2000"></div>
   <div className="h-full flex flex-col font-montserrat items-center backdrop-blur-3xl">
      <NavBar/>
      <div className="w-11/12 h-fit flex flex-row py-6">
        <span className="text-4xl font-bold">Settings</span>
      </div>
      <div className="w-11/12 h-full flex flex-row gap-7 sm:flex-col z-40">
      <div className="h-90 w-1/6 flex flex-col bg-slate-300 rounded text-xl font-medium gap-5 py-5 px-3">
      <Link to='/settings/account'>
      <button className={`w-full h-12 ${(open === "account")? 'bg-slate-400 bg-opacity-40':''} hover:bg-slate-400 hover:bg-opacity-15 rounded flex items-center px-1`} onClick={()=>{setOpen('account')}}>Account</button>
      </Link>
      <Link to='/settings/general'>
      <button className={`w-full h-12 ${(open === "general")? 'bg-slate-400 bg-opacity-40':''} hover:bg-slate-400 hover:bg-opacity-15 rounded flex items-center px-1`} onClick={()=>{setOpen('general')}}>General Settings</button>
      </Link>
      <Link to='/settings/notification'>
      <button className={`w-full h-12 ${(open === "notification")? 'bg-slate-400 bg-opacity-40':''} hover:bg-slate-400 hover:bg-opacity-15 rounded flex items-center px-1`} onClick={()=>{setOpen('notification')}}>Notification</button>
      </Link>
      <Link to='/settings/delete-account'>
      <button className={`w-full h-12 ${(open === "delete")? 'bg-slate-400 bg-opacity-40':''} hover:bg-slate-400 hover:bg-opacity-15 rounded flex items-center px-1`} onClick={()=>{setOpen('delete')}}>Delete</button>
      </Link>
      </div>

      
      
      <div className={`${(open === "account")? 'flex':'hidden'} h-90 flex flex-1 flex-col rounded gap-x-32 px-24 py-4 bg-gray-300 bg-opacity-30 backdrop-blur-3xl`}>
      <ProfilePage/>
      </div>

      <div className={`${(open === "general")? 'flex':'hidden' } h-90 flex flex-1 flex-col rounded gap-x-32 px-24 py-4 bg-gray-300 bg-opacity-30 backdrop-blur-3xl`}>
      <General/>
      </div>
      <div className={`${(open === "notification")? 'flex':'hidden' } h-90 flex flex-1 flex-col rounded gap-x-32 px-24 py-4 bg-gray-300 bg-opacity-30 backdrop-blur-3xl`}>
      <Notification/>
      </div>
      <div className={`${(open === "delete")? 'flex':'hidden' } h-90 flex flex-1 flex-col rounded gap-y-1 px-24 py-4 bg-gray-300 bg-opacity-30 backdrop-blur-3xl`}>
      <Delete/>
      </div>
        </div>
    </div>
    </div>  
  )
}
