import { Link } from 'react-router-dom';
import { Bars3Icon } from '@heroicons/react/24/solid';


export default function SideNavBar() {


    return (
        <>
               
<div className="text-center">
   <button className="text-white bg-gray-400/25 rounded-lg text-sm px-2 py-2" type="button" data-drawer-target="drawer-navigation" data-drawer-show="drawer-navigation" aria-controls="drawer-navigation">
   <Bars3Icon className="size-6 fill-black/100"/>
   </button>
</div>

<div id="drawer-navigation" className="fixed top-0 left-0 z-40 w-64 h-full p-4 overflow-y-hidden transition-transform -translate-x-full bg-white  dark:bg-gray-800" tabIndex="-1" aria-labelledby="drawer-navigation-label">
    <h5 id="drawer-navigation-label" className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400">Menu</h5>
    <button type="button" data-drawer-hide="drawer-navigation" aria-controls="drawer-navigation" className="text-gray-400 bg-transparent rounded-lg text-sm p-1.5 absolute top-2.5 end-2.5 inline-flex items-center" >
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
            <Link to="/" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white">
               
               <span className="flex-1 ms-3 whitespace-nowrap">User</span>
            </Link>
         </li>
         <li>
            <Link to="/" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white">
               
               <span className="flex-1 ms-3 whitespace-nowrap">Sign In</span>
            </Link>
         </li>
         <li>
            <Link to="/" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white">
               
               <span className="flex-1 ms-3 whitespace-nowrap">Sign Up</span>
            </Link>
         </li>
      </ul></div>
   </div>
</div>

        </>
    );
}



