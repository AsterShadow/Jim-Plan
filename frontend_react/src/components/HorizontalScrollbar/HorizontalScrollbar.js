import React from 'react';

import BodyPart from '../BodyPart/BodyPart';

import './HorizontalScrollbar.css';



const HorizontalScrollbar = ({bodyParts, currentBodyPart, setCurrentBodyPart, searched }) => {
  

  return (
    <>
    <div className='bodyParts-section'>
        {bodyParts.map((item)=>(
            <div
            className='bodyPartItem'
            key={item.id||item}
            itemID={item.id||item}
            title={item.id||item}
            >
              {<BodyPart item={item} setCurrentBodyPart={setCurrentBodyPart} currentBodyPart={currentBodyPart}/>}

            </div>
        ))}
    </div>
    {searched?<h3 className='results'>Results for "{searched}"</h3>:<h3>Results</h3>}
    
    </>
    
  )
}

export default HorizontalScrollbar