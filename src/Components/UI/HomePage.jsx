import NavBar from './NavBar'
import { Link } from 'react-router-dom'
import '../../Styles/UI/HomePage.css'
import { TypeAnimation } from 'react-type-animation';


function HomePage() {
  return (
    <>
    <div className='main-div'>
      <NavBar/>
      <div className='root-div'>
      <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Your Daily Journal',
        3000, // wait 1s before replacing "Mice" with "Hamsters"
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
            <Link to='/view-notes' className='btn notes-btn'>
            Start Writing
            <div className='goto' id="goto-notes" >
            <img src='src/assets/arrow-up-right.svg'/>
            </div>
            </Link>

            <Link to='/features' className='btn feature-btn'>
            See Whats New?
            <div className='goto' id="goto-features">
            <img src='src/assets/arrow-up-right.svg'/>
            </div>
            </Link>
            
        </div>
      </div>
    </div>
    <div>

    </div></>
  )
}

export default HomePage
