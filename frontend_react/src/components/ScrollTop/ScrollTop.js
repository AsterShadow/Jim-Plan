import React from 'react';

import './ScrollTop.css';
import scrollTopIcon from '../../assets/icons/expand_less.svg';


const ScrollTop = () => {
  return (
    <div className='scrollTop'>
        <img src={scrollTopIcon} alt='scrollTopIcon' onClick={()=>{
        window.scrollTo({top:0, behavior:'smooth'});
    }}/>
    </div>
  )
}

export default ScrollTop