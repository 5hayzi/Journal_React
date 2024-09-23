import Button from '../UI/Button'
import { persistor } from '../../Redux/store';
import toast from 'react-hot-toast'

export default function SignOut({setSignOut, ...props}) {

  const handleSignOut = ()=>{
    persistor.purge().then(() => {
      toast.success('Signed Out');
    });
    
    setSignOut(false);
    setInterval(()=>{
      window.location.reload();
    },2000)
    
  }

  const handleClose = () => {
    setSignOut(false);
  };


  return (
    <div className='absolute w-full h-full backdrop-blur-xl font-montserrat flex justify-center items-center z-20' {...props} id='SignOut'>
      <div className="w-[15%] flex flex-col relative p-3 gap-9 bg-slate-500 rounded sm:w-1/2 ">
      <span className='text-lg dark:text-white text-black'>Are you sure you wanna Sign out?</span>
      <div className='flex flex-row justify-between items-center'>
      <Button onClick={handleClose} className="
          bg-red-500
          hover:bg-red-600 
          focus:ring-red-300  
          focus-visible:ring-red-300 "><span>Cancel</span></Button>
          <Button onClick={handleSignOut} className="
          bg-indigo-500
          hover:bg-indigo-600 
          focus:ring-indigo-300  
          focus-visible:ring-indigo-300 "><span>Confirm</span></Button>
      </div>
      </div>
    </div>
  )
}
