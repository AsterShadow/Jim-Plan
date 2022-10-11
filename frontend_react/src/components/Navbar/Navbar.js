import React from 'react';
import {Link} from 'react-router-dom';

import './Navbar.css';
import Logo from '../../assets/images/heart.png';


const Navbar = () => {
  return (
    <div className='nav'>
      <div>
      <Link to="/">
        <img src={Logo} alt="logo"/>
      </Link>
      </div>
      <div className='nav-links'>
        <Link to='/'
          className='nav-link' 
          style={{textDecoration: 'none', color:'#F2E9E4'}}>
            Home
        </Link>
        <a href='#exercises' 
        className='nav-link'
        style={{textDecoration: 'none', color:'#F2E9E4'}}
        >
          Exercises
        </a>

      </div>
    </div>
    
    
  )
}

export default Navbar