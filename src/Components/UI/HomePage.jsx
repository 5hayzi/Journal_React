import React from 'react'
import NavBar from './NavBar'
import { Link } from 'react-router-dom'
import '../../Styles/UI/HomePage.css'


function HomePage() {
  return (
    <>
    <div className='main-div'>
      <NavBar/>
      <div className='root-div'>
        <h1 className='main-title'>Your Daily Journal</h1>
        <h2 className='description'>Create your very own journal with all your notes synced seamlessly across all devices.</h2>
        <div className='btn-box'>
            <Link to='/view-notes' className='btn notes-btn'>
            Start Writing
            <div className='goto' id="goto-notes" >
            <img src='src\assets\arrow-up-right.svg'/>
            </div>
            </Link>

            <Link to='/features' className='btn feature-btn'>
            See Whats New?
            <div className='goto' id="goto-features">
            <img src='src\assets\arrow-up-right.svg'/>
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
