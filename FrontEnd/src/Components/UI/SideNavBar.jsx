import { Link } from 'react-router-dom';
import { Bars3Icon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { switchTheme } from "../../Redux/react_component/theme";
import { Switch } from '@headlessui/react';

export default function SideNavBar() {
   const loggedIn = useSelector((state)=>state.userData.loggedIn);
   const theme = useSelector((state)=>state.theme.value);
   const dispatch = useDispatch()
   const image = useSelector((state)=>state.userData.img);
   const [isOpen, setIsOpen] = useState(false);

    return (
        <>
               
<div className="text-center">
   <button className="text-white bg-gray-400/25 rounded-lg text-sm px-2 py-2" type="button" onClick={()=>{setIsOpen(true)}}>
   <Bars3Icon className="size-6 fill-black/100"/>
   </button>
</div>

<div className={`fixed top-0 w-64  h-full p-4 overflow-y-hidden left-0 -translate-x-full transition-transform duration-500 ${isOpen ? '!translate-x-0':''} backdrop-blur-2xl`} tabIndex="-1">
    <h5 className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400">Menu</h5>
    <button type="button" className="text-gray-400 bg-transparent rounded-lg text-sm p-1.5 absolute top-2.5 end-2.5 inline-flex items-center" onClick={()=>setIsOpen(!isOpen)}>
        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        <span className="sr-only">Close menu</span>
    </button>
  <div className="py-4 overflow-y-hidden h-full flex flex-col justify-between">
  <div className="">
      <ul className="space-y-2 font-medium ">
         <li>
            <Link to="/" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white" onClick={()=>setIsOpen(!isOpen)}> 
               <span className="ms-3">Home</span>
            </Link>
         </li>
         <li>
            <Link to="/view-notes" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white" onClick={()=>setIsOpen(!isOpen)}>  
               <span className="flex-1 ms-3 whitespace-nowrap">View Notes</span>
            </Link>
         </li>
         <li>
            <Link to="/" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white"
            onClick={()=>{
               setIsOpen(!isOpen)
               setTimeout((()=>{
               const features = document.getElementById('feature-div')
               document.getElementById('root').scrollTo({ top: (features.offsetTop - 100), behavior: 'smooth' })
               }),100)
               
             }}
            >  
               <span className="flex-1 ms-3 whitespace-nowrap">Features</span>
            </Link>
         </li>
         <li>
            <Link to="/" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white"
            onClick={()=>{
               setIsOpen(!isOpen)
               setTimeout((()=>{
               const about = document.getElementById('about-div')
               document.getElementById('root').scrollTo({ top: about.offsetTop, behavior: 'smooth' })
               }),100)
               
             }}
            >
               <span className="flex-1 ms-3 whitespace-nowrap">About</span>
            </Link>
         </li>
         </ul>
         </div>
         <div>
         <ul className="space-y-2 font-medium">
         <li className='flex flex-row justify-between p-2 text-gray-900 ms-3 dark:text-white '>
            <label htmlFor="Dark_Mode_Switch">Dark Mode</label>
            <Switch
                id='Dark_Mode_Switch'
                checked={theme === 'dark'}
                onChange={() => dispatch(switchTheme(!theme))}
                className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-400 transition data-[checked]:bg-blue-600 dark:data-[checked]:bg-[#222253] dark:bg-gray-500" 
              >
                <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
              </Switch>
            </li>
         <li>
         {(loggedIn) &&
            <Link to="/settings/account" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white" onClick={()=>setIsOpen(!isOpen)}>
               
               <span className="flex-1 ms-3 whitespace-nowrap">User</span>
               <img crossOrigin="anonymous" src={`http://localhost:3000${image}`} className={`size-11 rounded-full flex items-center justify-center`}/>
            </Link>}
         </li>
        
         <li>
         {(!loggedIn) &&
            <Link to="/access/login" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white" onClick={()=>setIsOpen(!isOpen)}>
               <span className="flex-1 ms-3 whitespace-nowrap">Sign In</span>
            </Link>}
         </li>
         <li>
         {(!loggedIn) &&
            <Link to="/access/signup" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white" onClick={()=>setIsOpen(!isOpen)}> 
               <span className="flex-1 ms-3 whitespace-nowrap">Sign Up</span>
            </Link>}
         </li>
         
      </ul>
      </div>
   </div>
</div>

        </>
    );
}



