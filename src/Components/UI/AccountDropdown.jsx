import { useState } from 'react';
import { UserCircleIcon } from '@heroicons/react/24/solid'// Make sure to import your icon
import { Link } from 'react-router-dom';

function AccountDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <UserCircleIcon 
        className="size-12 fill-black/100 account cursor-pointer" 
        onClick={toggleDropdown} 
      />
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
          <ul className="py-1">
            <li>
              <Link to="/access/sign-up" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                Sign Up
              </Link>
            </li>
            <li>
              <Link to="/access/log-in" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                Login
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default AccountDropdown;
