
import React from 'react';
import { Link } from 'react-router-dom';

import './ExercisesCard.css';

const ExerciseCard = ({exercise}) => {
  return (
    <Link to={`/exercise/${exercise.id}`} style={{textDecoration:'none'}} onClick={()=>{
      window.scrollTo({top:0, left:100, behaviour:'smooth'});
  }}>
      <div className='exerciseCard'>
        <img src={exercise.gifUrl} alt={exercise.name} loading='lazy'/>
        <p>{exercise.name}</p>
        <div className='exercise-bodyparts'>
          <div className='bodypart-tag'>{exercise.bodyPart}</div>
          <div className='bodypart-tag target-tag'>{exercise.target}</div>
        </div>

      </div>
        
    </Link>
  )
}

export default ExerciseCard