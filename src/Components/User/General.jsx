import { Switch } from "@headlessui/react";
import { useState } from "react";

export default function General() {
  const [enabled, setEnabled] = useState(false)
  return (
    <>
    <span className="text-3xl font-semibold pb-4">General Settings</span>
    <div className="w-full flex flex-row justify-between font-medium text-lg">
    <label htmlFor="Dark_Mode_Switch">Dark Mode</label>
            <Switch
                id='Dark_Mode_Switch'
                checked={enabled}
                onChange={setEnabled}
                className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[checked]:bg-blue-600"
              >
                <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
              </Switch></div>
      <div className="w-full flex flex-row justify-between font-medium text-lg">
        
      </div>
    </>
  )
}
