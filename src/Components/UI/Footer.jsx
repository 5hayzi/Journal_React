
import { PhoneArrowUpRightIcon, AtSymbolIcon,   } from '@heroicons/react/24/solid'

export default function Footer() {
  return (
    <div className='w-full h-[15%] flex flex-col bg-blue-300 pt-12 px-28 font-montserrat justify-between sm:h-fit sm:px-6 sm:pt-3 rounded-t-3xl dark:bg-[#3d54d662]'>
    <div className='w-full h-11/12 flex flex-row justify-between sm:flex-col'>
    <div className="flex w-1/6 flex-col items-start gap-4 sm:w-full sm:gap-2">
        <button onClick={()=>
        {
            const root = document.getElementById('root');
            root.scrollTo({top: root.offsetTop, behavior:'smooth'})
        }
        } ><span className='text-[3.5rem] font-extrabold hover:italic dark:text-[#f3f3f3]'>Notes+</span></button>
        <button className="text-base font-medium text-gray-600 text-left dark:text-[#aaaaaa]">Get the best writing experience with our rich text editor and cross-platform accessibility.</button>
    </div>
    <div className="flex w-1/8 flex-col items-start gap-4 sm:w-full sm:mt-10 sm:gap-2 ">
        <span className="text-2xl font-semibold text-black mb-3 sm:mb-0 dark:text-[#f3f3f3]">Info</span>
        <button className="text-base font-medium text-gray-600 dark:text-[#aaaaaa]">About Us</button>
        <button className="text-base font-medium text-gray-600 dark:text-[#aaaaaa]">Features</button>
        <button className="text-base font-medium text-gray-600 dark:text-[#aaaaaa]">Privacy Policy</button>
        <button className="text-base font-medium text-gray-600 dark:text-[#aaaaaa]">Terms and Conditions</button>
    </div>
    <div className="flex w-1/8 flex-col items-start gap-4 sm:w-full sm:mt-10 sm:gap-2">
        <span className="text-2xl font-semibold text-black mb-3 sm:mb-0 dark:text-[#f3f3f3]">Support Us</span>
        <button className="text-base font-medium text-gray-600 dark:text-[#aaaaaa]">Donate to Patreon</button>
        <button className="text-base font-medium text-gray-600 dark:text-[#aaaaaa]">Donate a cup of coffee</button>
    </div>
    <div className="flex w-1/8 flex-col items-start gap-4 sm:w-full sm:mt-10 sm:gap-2">
        <span className="text-2xl font-semibold text-black mb-3 sm:mb-0 dark:text-[#f3f3f3]">Get in Touch</span>
        <button className="text-base font-medium text-gray-600 text-left flex flex-row gap-3 dark:text-[#aaaaaa]"><PhoneArrowUpRightIcon className='size-8 fill-black self-center dark:fill-white'/><span>
            Call Us<br/><em><b>03099662996</b></em>
            </span></button>
        <button className="text-base font-medium text-gray-600 text-left flex flex-row gap-3 dark:text-[#aaaaaa]"><AtSymbolIcon className='size-8 fill-black self-center dark:fill-white'/><span>
            Email Us<br/><em><b>hithisissheraz1947@gmail.com</b></em>
            </span></button>
    </div>
    </div>
    <div className="w-1/5 h-fit border-t-2 border-black p-2 sm:w-1/2 sm:mt-7 dark:border-white">
    <span className="text-sm text-left font-medium italic dark:text-white">All Rights Reserved</span></div>
    </div>
  )
}
