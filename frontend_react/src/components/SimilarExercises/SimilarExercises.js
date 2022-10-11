import React from 'react';

import './SimilarExercises.css';
import Loader from '../Loader';
import Exercises from '../Exercises/Exercises';

const SimilarExercises = ({targetExercices,equipmentExercises}) => {
  return (
    <div className='similar-section'>
      <h2>Similar exercises with targeted muscle</h2>
      <div className='similar-exercises'>
        {targetExercices.length?
        <Exercises exercises={targetExercices} />
        :
        <Loader/>}
      </div>

      <h2>Similar exercises with same equipment</h2>
      <div className='similar-exercises'>
        {equipmentExercises.length?
        <Exercises exercises={equipmentExercises} />
        :
        <Loader/>}
      </div>

    </div>
  )
}

export default SimilarExercises