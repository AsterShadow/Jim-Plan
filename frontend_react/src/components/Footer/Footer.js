import React from 'react';

import './Footer.css';
import Logo from '../../assets/images/heart.png';

const Footer = () => {
  return (
    <div className='footer-section'>
      <div className='footer-items'>
        <img src={Logo} alt='logo'/>
        <p>Made with ❤️ by Xzandro Vidal-Valdes</p>
      </div>
    </div>
  )
}

export default Footer