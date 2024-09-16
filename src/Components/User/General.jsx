import { Switch } from "@headlessui/react";
import { useSelector, useDispatch } from 'react-redux'
import { switchTheme } from "../../Redux/react_component/theme";

export default function General() {
  const theme = useSelector((state)=>state.theme.value);
  const dispatch = useDispatch()
  return (
    <>
    <span className="text-3xl font-semibold pb-4 dark:text-white">General Settings</span>
    <div className="w-full flex flex-row justify-between font-medium text-lg dark:text-white">
    <label htmlFor="Dark_Mode_Switch">Dark Mode</label>
            <Switch
                id='Dark_Mode_Switch'
                checked={theme === 'dark'}
                onChange={() => dispatch(switchTheme(!theme))}
                className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[checked]:bg-[#222253]"
              >
                <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
              </Switch></div>
      <div className="w-full flex flex-row justify-between font-medium text-lg">
        
      </div>
    </>
  )
}
