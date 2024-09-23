import NavBar from './NavBar'

import { Link } from 'react-router-dom'
import '../../Styles/UI/HomePage.css'
import { TypeAnimation } from 'react-type-animation';
import { ArrowUpIcon } from '@heroicons/react/24/solid';
import Footer from './Footer';
import Feature from './Feature';
import AboutSection from './AboutSection';


function HomePage() {

  
  
  return (
    <>
    
    <div className='relative main-div dark:bg-gray-800 ' id='main-div'>
      <img src='src\assets\Images\Homepage.png' className='w-full h-[135%] absolute top-0 sm:hidden'/>
      <img src='src\assets\Images\books-background.png' className='w-full absolute bottom-0 hidden sm:flex'/>
      <NavBar/>
      <div className='root-div '>
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
      className=' main-title'
      repeat={Infinity}
    />
        <h2 className='description dark:text-white'>Create your very own journal with all your notes synced seamlessly across all devices.</h2>
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
    <div className="w-full h-[400%] flex flex-col font-montserrat dark:bg-gray-800">
    <Feature/>
    <AboutSection/>
    <button className="w-11 h-[3.4rem] rounded-full bg-black mb-[1%] bg-opacity-80 sticky bottom-[1%] left-[96%] z-10 sm:sticky sm:bottom-[2%] sm:left-[88%] dark:bg-gray-300 sm:h-[3.6rem] " onClick={() =>{
              const root = document.getElementById('root')
              root.scrollTo({ top: root.offsetTop, behavior: 'smooth' })}}>
      <ArrowUpIcon className='size-7 fill-white mx-auto my-auto dark:fill-black'/>
    </button>
    <div className="h-fit">
    <Footer/></div>
    </div>
    
    </>
  )
}

export default HomePage
