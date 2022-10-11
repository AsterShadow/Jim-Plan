import React from 'react';

import './Details.css';
import BodyPartIcon from '../../assets/icons/chest.png';
import TargetIcon from '../../assets/icons/biceps.png';
import EquipmentIcon from '../../assets/icons/weights.png';

const Details = ({exerciseDetail}) => {

  const {bodyPart, gifUrl, name, target, equipment} = exerciseDetail;

  const extraInfo =[
    {
      icon: BodyPartIcon,
      name: bodyPart,
    },
    {
      icon: TargetIcon,
      name: target,
    },
    {
      icon: EquipmentIcon,
      name: equipment,
    },
  ]

  return (
    <div className='details-section'>
      <img src={gifUrl} alt={name} className='detail-gif'/>
      <div className='exercise-details'>
        <h2>{name}</h2>
        <p className='text-details'>
          {name} is one of the best exercise to target your {target}. It uses {equipment} and is a good way to train your {bodyPart}.
        </p>
        <div className='extra-info-section'>
        {extraInfo.map((detail)=>(
          <div className='extra-info'>
              <img src={detail.icon} className='detail-icon' alt={detail.name}/>
            <p className='detail-name'>{detail.name}</p>
          </div>
        ))}
        </div>
      </div>
    </div>
  )
}

export default Details