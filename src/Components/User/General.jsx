import { Switch } from "@headlessui/react";
import { useEffect } from "react";
import { useState } from "react";

export default function General() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // Save the user's theme preference to localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <>
    <span className="text-3xl font-semibold pb-4 dark:text-white">General Settings</span>
    <div className="w-full flex flex-row justify-between font-medium text-lg dark:text-white">
    <label htmlFor="Dark_Mode_Switch">Dark Mode</label>
            <Switch
                id='Dark_Mode_Switch'
                checked={theme === 'dark'}
                onChange={toggleTheme}
                className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[checked]:bg-blue-600"
              >
                <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
              </Switch></div>
      <div className="w-full flex flex-row justify-between font-medium text-lg">
        
      </div>
    </>
  )
}
