import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../images/logo/logo.png'
// import {FaBars} from 'react-icons/fa'
import {AiOutlineClose} from 'react-icons/ai'

const Header = () => {
  return (
    
    <nav>
      <div className="container nav_container">
        <Link to="/" className='nav_logo'>
          <img src={logo} alt="Navbar logo" className='img_logo' />
        </Link>
        <ul className="nav_menu">
          <li><Link to="/profile" >Aseel Jafer</Link></li>
          <li><Link to="/create" >Create Post</Link></li>
          <li><Link to="/authors" >Authors</Link></li>
          <li><Link to="/logout" >Logout</Link></li>
        </ul>
        <button className="nav_btn">
          <AiOutlineClose/>
        </button>
      </div>
    </nav>

  )
}

export default Header