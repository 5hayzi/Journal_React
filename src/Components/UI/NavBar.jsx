import'../../Styles/index.css'
import { Link } from 'react-router-dom'
import '../../Styles/UI/NavBar.css'
import SideNavBar from './SideNavBar'

import AccountDropdown from './AccountDropdown'

function NavBar() {
  return (

    <div id='nav-container' className='dark:text-white'>
      <div  id='nav-container-mobile'><SideNavBar/></div>
      <Link to="/" id='logo'>Notes+</Link>
      <div id='nav-element' className=' dark:'>
        <Link to="/" className='nav-icon'>Home</Link>
        <Link to="/view-notes" className='nav-icon' >View Notes</Link>
        <Link to={`/`} onClick={()=>{
          setTimeout((()=>{
          const features = document.getElementById('feature-div')
          document.getElementById('root').scrollTo({ top: (features.offsetTop - 100), behavior: 'smooth' })
          }),100)
          
        }} className='nav-icon' >Features</Link>

        <Link to={`/`} onClick={()=>{
          setTimeout((()=>{
          const about = document.getElementById('about-div')
          document.getElementById('root').scrollTo({ top: about.offsetTop, behavior: 'smooth' })
          }),100)
          
        }} className='nav-icon' >About</Link>
      </div>
      <div className='account-box'>
      <AccountDropdown/>
    </div>
    </div>
  )
}

export default NavBar
