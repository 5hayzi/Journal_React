import'../../Styles/index.css'
import { Link } from 'react-router-dom'
import '../../Styles/UI/NavBar.css'
import SideNavBar from './SideNavBar'

import AccountDropdown from './AccountDropdown'

function NavBar() {
  return (

    <div id='nav-container'>
      <div  id='nav-container-mobile'><SideNavBar/></div>
      <Link to="/" id='logo'>Notes+</Link>
      <div id='nav-element'>
        <Link to="/" className='nav-icon'>Home</Link>
        <Link to="/view-notes" className='nav-icon' >View Notes</Link>
        <Link to="/features" className='nav-icon' >Features</Link>
        <Link to="/about" className='nav-icon' >About</Link>
      </div>
      <div className='account-box'>
      <AccountDropdown/>
    </div>
    </div>
  )
}

export default NavBar
