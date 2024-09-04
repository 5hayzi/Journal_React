import { PencilSquareIcon } from "@heroicons/react/20/solid";

import Button from "../UI/Button";
import { useState } from "react";

export default function ProfilePage() {
  const [enable, setEnabled] = useState(false);
  return (
    <>
      <span className="text-3xl font-semibold pb-4">Account</span>
      <Button className='bg-green-500
            hover:bg-green-600 
            focus:ring-green-300  
            focus-visible:ring-green-300"
            self-end'
            onClick={()=>setEnabled(!enable)}>
              <PencilSquareIcon className="w-5 fill-white"/>
              Edit</Button>
      <div className=" flex flex-row self-center py-4">
        <img src="{img}" alt="" className="w-32 h-32 rounded-full border-2 border-black"/>
        <input type="file"  className="hidden" id='img'/>
        {enable &&
        <label htmlFor="img" className="flex self-end"><PencilSquareIcon className="w-6 fill-black"/></label>
        }
      </div>
      <div className="flex justify-between items-center text-lg py-2 font-medium"> <span>Name:</span> 
      <input type="text" className={`text-end h-9 rounded ${(!enable)? 'bg-transparent': ' '}`} disabled={!enable} value="Sheraz Ahmed"/></div>
      <div className="flex justify-between items-center text-lg py-2 font-medium"> <span>Email:</span> 
      <input type="text" className={`text-end h-9 rounded ${(!enable)? 'bg-transparent': ' '}`} disabled={!enable}/> </div>
      <div className="flex justify-between items-center text-lg py-2 font-medium"> <span>Display Name:</span> 
      <input type="text" className={`text-end h-9 rounded ${(!enable)? 'bg-transparent': ' '}`} disabled={!enable}/> </div>
      <div className="flex justify-between items-center text-lg py-2 font-medium"> <span>Gender:</span> 
      <input type="text" className={`text-end h-9 rounded ${(!enable)? 'bg-transparent': ' '}`} disabled={!enable} /> </div>
    </>
  )
}
