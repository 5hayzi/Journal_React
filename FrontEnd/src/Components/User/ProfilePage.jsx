import { PencilSquareIcon } from "@heroicons/react/20/solid";
import { useSelector } from "react-redux";
import Button from "../UI/Button";
import { useState } from "react";


export default function ProfilePage() {
  const name= useSelector((state)=>state.userData.name)
  const email = useSelector((state)=>state.userData.email)
  const twofactor = useSelector((state)=>state.userData.twoFactor)
  const gender = useSelector((state)=>state.userData.gender)
  const img = useSelector((state)=>state.userData.img)
  const [image, setImage] = useState(`http://localhost:3000${img}`)
  const [enable, setEnabled] = useState(false);
  return (
    <>
      <span className="text-3xl font-semibold pb-4 dark:text-[#dddddd]">Account</span>
      <Button className='bg-green-500
            hover:bg-green-600 
            focus:ring-green-300  
            focus-visible:ring-green-300"
            self-end'
            onClick={()=>setEnabled(!enable)}>
              <PencilSquareIcon className="w-5 fill-white"/>
              Edit</Button>
      <div className=" flex flex-row self-center py-4">
        <img crossOrigin="anonymous" src={image} alt="" className={`w-32 h-32 rounded-full ${ img == null ? 'img border-2 border-black dark:border-[#dddddd]':''}`}/>
        <input type="file"  className="hidden" id='img'/>
        {enable &&
        <label htmlFor="img" className="flex self-end"><PencilSquareIcon className="w-6 fill-black dark:fill-[#dddddd]"/></label>
        }
      </div>
      <div className="flex justify-between items-center text-lg py-2 font-medium dark:text-[#dddddd]"> <span>Name:</span> 
      <input type="text" className={`text-end h-9 rounded ${(!enable)? 'bg-transparent': ' dark:text-black'}`} disabled={!enable} value={name}/></div>
      <div className="flex justify-between items-center text-lg py-2 font-medium dark:text-[#dddddd]"> <span>Email:</span> 
      <input type="text" className={`text-end h-9 rounded ${(!enable)? 'bg-transparent': ' dark:text-black'}`} disabled={!enable} value={email}/> </div>
      <div className="flex justify-between items-center text-lg py-2 font-medium dark:text-[#dddddd]"> <span>Two Factor:</span> 
      <input type="text" className={`text-end h-9 rounded ${(!enable)? 'bg-transparent': ' dark:text-black'}`} disabled={!enable} value={twofactor? 'Yes':'No'}/> </div>
      <div className="flex justify-between items-center text-lg py-2 font-medium dark:text-[#dddddd]"> <span>Gender:</span> 
      <input type="text" className={`text-end h-9 rounded ${(!enable)? 'bg-transparent': ' dark:text-black '}`} disabled={!enable} value={gender}/> </div>
    </>
  )
}
