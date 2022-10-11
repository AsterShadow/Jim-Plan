import React from 'react';

import HeroImage from '../../assets/images/muscular-man.jpg';
import './HeroBanner.css';

const HeroBanner = () => {


  return (
    <div className='heroBanner'>
        <p className='heroTitle'>Jim's Plan</p>
        <h1>Make your own <br /> 'Jim' plan </h1>
        <button 
        type='button' 
        className='green-btn' 
        href='#exercises' 
        onClick={()=>{
        window.scrollTo({top:1100, left:100, behavior:'smooth'});
    }}>
      Explore Exercises
      </button>
        <p className='bg-text'>JIM 🗿</p>
        <img src={HeroImage} alt='Banner' className='hero-banner-img'/>
        <div id='exercises'></div>
    </div>
    
  )
}

export default HeroBanner