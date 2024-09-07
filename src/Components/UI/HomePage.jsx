import NavBar from './NavBar'

import { Link } from 'react-router-dom'
import '../../Styles/UI/HomePage.css'
import { TypeAnimation } from 'react-type-animation';
import { ArrowUpIcon } from '@heroicons/react/24/solid';
import Footer from './Footer';


function HomePage() {
  return (
    <>
    
    <div className='relative main-div' id='main-div'>
      
      
      <img src='src\assets\Images\Homepage.png' className='w-full h-[135%] absolute top-0 -z-10 sm:hidden'/>
      <img src='src\assets\Images\books-background.png' className='w-full absolute bottom-0 -z-10 hidden sm:flex'/>
      <NavBar/>
      <div className='root-div'>
      <TypeAnimation
      sequence={[
        'Your Daily Journal',
        3000,
        'Your Simple Diary',
        3000,
        'Your Amazing Log',
        3000,
        'Your New Friend',
        3000
      ]}
      wrapper="span"
      speed={30}
      className='main-title'
      repeat={Infinity}
    />
        <h2 className='description'>Create your very own journal with all your notes synced seamlessly across all devices.</h2>
        <div className='btn-box'>
          
            <Link to='/view-notes' className='btn notes-btn bg-green-400 '>
            Start Writing
            <div className='goto' id="goto-notes" >
            <img src='src/assets/arrow-up-right.svg'/>
            </div>
            </Link>
            
            <button className='btn feature-btn bg-slate-400' onClick={() =>{
              const features = document.getElementById('feature-div')
              document.getElementById('root').scrollTo({ top: (features.offsetTop - 100), behavior: 'smooth' })}}>
            See Whats New?
            <div className='goto' id="goto-features">
            <img src='src/assets/arrow-up-right.svg'/>
            </div>
            </button>
            
        </div>
      </div>
    </div>
    <div className="w-full h-[250%] flex flex-col font-montserrat">
    <div className='w-[full] h-[65%] z-10 text-black px-[6%] mt-[9%] flex flex-col justify-between font-montserrat items-center gap-24 sm:gap-0' id='feature-div'>
      <div className="w-[90%] h-3/6 relative flex justify-evenly items-center sm:flex-col sm:h-fit sm:justify-start sm:gap-1">
      <div className="w-2/6 h-full rounded-lg backdrop-blur bg-slate-600 opacity-70 sm:w-full sm:h-[11rem]"></div>
      <div className="border-l-2 border-black w-2/6 h-fit flex flex-col gap-4 pl-11 sm:w-11/12">
      <span className="text-3xl font-semibold text-black sm:text-2xl">Premium feeling, totally free</span>
      <span className="text-lg font-light text-black sm:text-sm">Stop worrying about paying anything, just start writing on our 100% free editor.</span>
      </div>
      </div>
      <div className="w-[90%] h-3/6 relative flex justify-evenly items-center sm:flex-col-reverse sm:h-fit sm:justify-end sm:gap-1">
      <div className="border-r-2 border-black w-2/6 h-fit flex flex-col gap-4 pr-11 sm:w-11/12">
      <span className="text-3xl font-semibold text-black sm:text-2xl">Your data anywhere, anytime</span>
      <span className="text-lg font-light text-black sm:text-sm">Write to your hearts content with all your data seemlessly updated across all your devices.</span>
      </div>      
      <div className="w-2/6 h-full rounded-lg backdrop-blur bg-slate-600 opacity-70 sm:w-full sm:h-[11rem]"></div>
      </div>
      <div className="w-[90%] h-3/6 relative flex justify-evenly items-center sm:flex-col sm:h-fit sm:justify-start sm:gap-1 ">
      <div className="w-2/6 h-full rounded-lg backdrop-blur bg-slate-600 opacity-70 sm:w-full sm:h-[11rem]"></div>
      <div className="border-l-2 border-black w-2/6 h-fit flex flex-col gap-4 pl-11 sm:w-11/12">
      <span className="text-3xl font-semibold text-black sm:text-2xl">WYSIWYG editor</span>
      <span className="text-lg font-light text-black sm:text-sm">Only get what you wrote, how you wrote it.</span>
      </div>
      </div>
      <div className="w-[90%] h-3/6 relative flex justify-evenly items-center sm:flex-col-reverse sm:h-fit sm:justify-end sm:gap-1">
      <div className="border-r-2 border-black w-2/6 h-fit flex flex-col gap-4 pr-11 sm:w-11/12">
      <span className="text-3xl font-semibold text-black sm:text-2xl">Switch themes</span>
      <span className="text-lg font-light text-black sm:text-sm">Not liking the bright editor? just switch to dark mode.</span>
      </div>      
      <div className="w-2/6 h-full rounded-lg backdrop-blur bg-slate-600 opacity-70 sm:w-full sm:h-[11rem]"></div>
      </div>
      
    </div>
    <div className="w-full h-[35%] flex flex-col">nice</div>
    <button className="w-11 h-12 rounded-full bg-black bg-opacity-80 sticky bottom-[2%] left-[96%] z-10 sm:bottom-[1%] sm:left-[88%]" onClick={() =>{
              const scrollBtn = document.getElementById('main-div')
              document.getElementById('root').scrollTo({ top: scrollBtn.offsetTop, behavior: 'smooth' })}}>
      <ArrowUpIcon className='size-7 fill-white mx-auto my-auto'/>
    </button>
    </div>
    <Footer/>
    </>
  )
}

export default HomePage
