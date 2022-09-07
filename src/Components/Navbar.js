import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../Images/Logo.png'
import './NavbarStyle.css'
// import FaBars,FaTimes From 

const Navbar = () => {
  return (
    <header>
        <nav className='navbar'>
            <div className='logo'>
              <Link to='/'><img src={logo} alt='logo'/></Link>
            </div>
            <ul className='nav-menu'>
                <li className='nav-item'>
                    <Link to='/' className='nav-link'>Product</Link>
                </li>
                <li className='nav-item'>
                    <Link to='/' className='nav-link'>Features</Link>
                </li>
                <li className='nav-item'>
                    <Link to='/' className='nav-link'>About</Link>
                </li>
                <li className='nav-item'>
                    <Link to='/' className='nav-link'>Contact</Link>
                </li>
                <button className='button btn-login'>Login</button>|{" "}
                <button className='button btn-register'>Register</button>
            </ul>
            {/* <div className='hamburger'>
                <FaBars />
            </div> */}
        </nav>
    </header>
  )
}

export default Navbar