import React from 'react'
import { PhoneArrowUpRightIcon, AtSymbolIcon,   } from '@heroicons/react/24/solid'

export default function Footer() {
  return (
    <div className='w-full h-1/2 flex flex-col bg-gray-200 pt-12 px-28 mt-4 font-montserrat justify-between'>
    <div className='w-full h-11/12 flex flex-row justify-between'>
    <div className="flex w-1/6 flex-col items-start gap-4">
        <button ><span className='text-[3.5rem] font-extrabold hover:italic'>Notes+</span></button>
        <button className="text-base font-medium text-gray-600 text-left">Get the best writing experience with our rich text editor and cross-platform accessibility.</button>
    </div>
    <div className="flex w-1/8 flex-col items-start gap-4">
        <span className="text-2xl font-semibold text-black mb-3">Info</span>
        <button className="text-base font-medium text-gray-600">About Us</button>
        <button className="text-base font-medium text-gray-600">Features</button>
        <button className="text-base font-medium text-gray-600">Privacy Policy</button>
        <button className="text-base font-medium text-gray-600">Terms and Conditions</button>
    </div>
    <div className="flex w-1/8 flex-col items-start gap-4">
        <span className="text-2xl font-semibold text-black mb-3">Support Us</span>
        <button className="text-base font-medium text-gray-600">Donate to Patreon</button>
        <button className="text-base font-medium text-gray-600">Donate a cup of coffee</button>
    </div>
    <div className="flex w-1/8 flex-col items-start gap-4">
        <span className="text-2xl font-semibold text-black mb-3">Get in Touch</span>
        <button className="text-base font-medium text-gray-600 text-left flex flex-row gap-3"><PhoneArrowUpRightIcon className='size-8 fill-black self-center'/><span>
            Call Us<br/><em><b>03099662996</b></em>
            </span></button>
        <button className="text-base font-medium text-gray-600 text-left flex flex-row gap-3"><AtSymbolIcon className='size-8 fill-black self-center'/><span>
            Email Us<br/><em><b>hithisissheraz1947@gmail.com</b></em>
            </span></button>
    </div>
    </div>
    <div className="w-1/5 h-fit border-t-2 border-black p-2">
    <span className="text-sm text-left font-medium italic">All Rights Reserved</span></div>
    </div>
  )
}
