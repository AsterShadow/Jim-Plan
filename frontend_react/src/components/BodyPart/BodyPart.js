import React from 'react';

import './BodyPart.css';




const BodyPart = ({item, currentBodyPart, setCurrentBodyPart}) => {

  

  return (
    <div className={currentBodyPart===item?'bodyPartCardSelected bodyPartCard':'bodyPartCard'} onClick={()=>{
      setCurrentBodyPart(item);
      window.scrollTo({top:3000, left:100, behavior:'smooth'});
    }}>
        <p className='card-text'>{item}</p>

    </div>
  )
}

export default BodyPart