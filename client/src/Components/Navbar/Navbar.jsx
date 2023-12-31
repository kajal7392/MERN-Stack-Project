import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.png";
import search from "../../assets/search-icon.svg";
import Avatar from "../../Components/Avatar/Avatar";

import "../../Components/Navbar.css";

const Navbar = () => {
  var User = JSON.parse(localStorage.getItem('profile'))
  return (
    <nav className="main-nav">
      <div className='navbar'>
        <Link to='/' className='nav-item nav-logo'>
          <img src={logo} alt="logo" width="150" />
        </Link>
        <Link to='/' className='nav-item nav-btn'>
          About
        </Link>
        <Link to='/' className='nav-item nav-btn'>
          Products
        </Link>
        <Link to='/' className='nav-item nav-btn'>
          For Team
        </Link>
        <form>
          <input type="text" placeholder='Search...' />
          <img src={search} alt="search" width="18" className="search-icon"/>
        </form>
        {User === null ? 
          <Link to='/Auth' className='nav-items nav-links' >
            Log in
          </Link>:
          <>
            <Avatar backgroundColor= '#009dff' px="10px" py="7px" borderRadius="50%" color='white'><Link to='/User' style={{color:'white', textDecoration:'none'}}>K</Link></Avatar>
            <button className='nav-item nav-links'>Log out</button>
          </>
        }
      </div>
    </nav>
  )
}

export default Navbar;
