import { Link } from 'react-router-dom';
import { Bars3Icon } from '@heroicons/react/24/solid';
import { useState } from 'react';


export default function SideNavBar() {

   const [isOpen, setIsOpen] = useState(false);

    return (
        <>
               
<div className="text-center">
   <button className="text-white bg-gray-400/25 rounded-lg text-sm px-2 py-2" type="button" onClick={()=>{setIsOpen(true)}}>
   <Bars3Icon className="size-6 fill-black/100"/>
   </button>
</div>

<div className={`fixed top-0 z-40 w-64  h-full p-4 overflow-y-hidden left-0 -translate-x-full transition-transform duration-500 ${isOpen ? '!translate-x-0':''} bg-white  dark:bg-gray-800`} tabIndex="-1">
    <h5 className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400">Menu</h5>
    <button type="button" className="text-gray-400 bg-transparent rounded-lg text-sm p-1.5 absolute top-2.5 end-2.5 inline-flex items-center" onClick={()=>setIsOpen(false)}>
        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        <span className="sr-only">Close menu</span>
    </button>
  <div className="py-4 overflow-y-hidden h-full flex flex-col justify-between">
  <div className="">
      <ul className="space-y-2 font-medium ">
         <li>
            <Link to="/" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white">
               
               <span className="ms-3"><Link to="/" className='nav-icon'>Home</Link></span>
            </Link>
         </li>
         <li>
            <Link to="/" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white">
               
               <span className="flex-1 ms-3 whitespace-nowrap"><Link to="/view-notes" className='nav-icon' >View Notes</Link></span>
            </Link>
         </li>
         <li>
            <Link to="/" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white ">
               
               <span className="flex-1 ms-3 whitespace-nowrap"><Link to="/features" className='nav-icon' >Features</Link></span>
            </Link>
         </li>
         <li>
            <Link to="/" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white ">
               
               <span className="flex-1 ms-3 whitespace-nowrap"><Link to="/about" className='nav-icon' >About</Link></span>
            </Link>
         </li>
         </ul>
         </div>
         <div>
         <ul className="space-y-2 font-medium">
         <li>
            <Link to="/settings/account" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white">
               
               <span className="flex-1 ms-3 whitespace-nowrap">User</span>
            </Link>
         </li>
         <li>
            <Link to="/access/log-in" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white">
               
               <span className="flex-1 ms-3 whitespace-nowrap">Sign In</span>
            </Link>
         </li>
         <li>
            <Link to="/access/sign-up" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white">
               
               <span className="flex-1 ms-3 whitespace-nowrap">Sign Up</span>
            </Link>
         </li>
      </ul></div>
   </div>
</div>

        </>
    );
}



