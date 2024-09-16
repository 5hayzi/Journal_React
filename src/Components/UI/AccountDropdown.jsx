import { useState } from 'react';
import { UserIcon } from '@heroicons/react/24/solid'// Make sure to import your icon
import { Link } from 'react-router-dom';
import { Switch } from '@headlessui/react';
import { useSelector, useDispatch } from 'react-redux'
import { switchTheme } from "../../Redux/react_component/theme";

function AccountDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(true);
  const theme = useSelector((state)=>state.theme.value);
  const dispatch = useDispatch()

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <div className="size-9 rounded-full border border-black flex items-center justify-center ">
      {/* <img src=''/> */}
      <UserIcon 
        className="size-7 fill-black/100 account cursor-pointer " 
        onClick={toggleDropdown} 
      /></div>
      {(!loggedIn && isOpen) && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 dark:bg-slate-600">
          <ul className="py-1">
            <li>
              <Link to="/access/sign-up" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                Sign Up
              </Link>
            </li>
            <li>
              <Link to="/access/log-in" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                Login
              </Link>
            </li>
          </ul>
        </div>
      )}
      {(loggedIn && isOpen)&& (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 dark:bg-slate-600">
          <ul className="py-1">
            <li>
              <Link to="/user/edit-user" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                Account
              </Link>
            </li>
            <li>
              <Link to="/settings" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                Settings
              </Link>
            </li>
            <li className='flex flex-row justify-between px-4 py-2 text-gray-800 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'>
            <label htmlFor="Dark_Mode_Switch">Dark Mode</label>
            <Switch
                id='Dark_Mode_Switch'
                checked={theme === 'dark'}
                onChange={() => dispatch(switchTheme(!theme))}
                className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[checked]:bg-blue-600 dark:data-[checked]:bg-[#222253] dark:bg-gray-500" 
              >
                <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
              </Switch>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default AccountDropdown;
