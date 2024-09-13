import NavBar from "../UI/NavBar";
import { useState } from "react";
import ProfilePage from "./Profilepage";
import General from "./General";
import Notification from "./Notification";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Delete from "./Delete";
import { useLocation } from "react-router-dom";


export default function Settings() {
  const location = useLocation().pathname;
  const setting = '/settings'
  const account = "/settings/account";
  const general = "/settings/general";
  const notification = "/settings/notification";
  const deleteAccount = "/settings/delete-account";
  
  
  return (
    <div className="w-full h-full flex flex-col overflow-hidden sm:overflow-y-scroll dark:bg-gray-800">
  <div className="absolute w-[34rem] h-[34rem] top-28 left-[20rem] rounded-full mix-blend-multiply bg-blue-300 filter blur-3xl opacity-60 animate-blob animation-delay-6000 dark:bg-[#3f83ff]"></div>
  <div className="absolute w-96 h-96 top-[24rem] left-[30%] rounded-full mix-blend-multiply bg-red-400 filter blur-3xl opacity-60 animate-blob animation-delay-4000 dark:bg-[#ff41e6]"></div>
  <div className="absolute w-[30rem] h-[30rem] bottom-10 right-9 rounded-full mix-blend-multiply bg-green-300 filter blur-3xl opacity-60 animate-blob animation-delay-2000 dark:bg-[#39ff85]"></div>
   <div className="h-full flex flex-col font-montserrat items-center backdrop-blur-3xl ">
      <NavBar/>
      <div className="w-11/12 h-fit flex flex-row py-6">
        <span className="text-[2.7rem] font-bold text-[#1b4166] sm:text-4xl dark:text-gray-100">Settings</span>
      </div>
      <div className="w-11/12 h-full flex flex-row gap-7 sm:flex-col z-40">
      <div className="h-90 w-1/6 flex flex-col bg-[#7575753d] rounded text-2xl font-medium gap-5 py-5 px-3 backdrop-blur-lg sm:flex-row sm:overflow-x-auto sm:w-full sm:h-fit sm:scroll-hidden sm:text-base dark:text-[#ececec]">
      <Link to={account}>
      <button className={`w-full h-full ${(location === account || location === setting)? 'bg-slate-400 bg-opacity-40':''} hover:bg-slate-400 hover:bg-opacity-15 rounded flex items-center px-1`}>Account</button>
      </Link>
      <Link to={general}>
      <button className={`w-full h-full ${(location === general)? 'bg-slate-400 bg-opacity-40':''} hover:bg-slate-400 hover:bg-opacity-15 rounded flex items-center px-1 sm:px-5`}>General Settings</button>
      </Link>
      <Link to={notification}>
      <button className={`w-full h-full ${(location === notification)? 'bg-slate-400 bg-opacity-40':''} hover:bg-slate-400 hover:bg-opacity-15 rounded flex items-center px-1`}>Notification</button>
      </Link>
      <Link to={deleteAccount}>
      <button className={`w-full h-full ${(location === deleteAccount)? 'bg-slate-400 bg-opacity-40':''} hover:bg-slate-400 hover:bg-opacity-15 rounded flex items-center px-1`}>Delete</button>
      </Link>
      </div>

      
      
      <div className={`${(location === account || location === setting)? 'flex':'hidden'} h-90 flex flex-1 flex-col rounded gap-x-32 px-24 py-4 bg-[#80808011] backdrop-blur-3xl sm:px-8 sm:h-[70vh]`}>
      <ProfilePage/>
      </div>

      <div className={`${(location === general)? 'flex':'hidden' } h-90 flex flex-1 flex-col rounded gap-x-32 px-24 py-4 bg-[#80808011] backdrop-blur-3xl sm:px-8 sm:h-[70vh]`}>
      <General/>
      </div>
      <div className={`${(location === notification)? 'flex':'hidden' } h-90 flex flex-1 flex-col rounded gap-x-32 px-24 py-4 bg-[#80808011] backdrop-blur-3xl sm:px-8 sm:h-[70vh]`}>
      <Notification/>
      </div>
      <div className={`${(location === deleteAccount)? 'flex':'hidden' } h-90 flex flex-1 flex-col rounded gap-y-1 px-24 py-4 bg-[#80808011] backdrop-blur-3xl sm:px-8 sm:h-[70vh]`}>
      <Delete/>
      </div>
        </div>
    </div>
    </div>  
  )
}
