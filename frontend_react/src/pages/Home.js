import React, {useState} from 'react';
import { Box } from '@mui/material';

import Exercises from '../components/Exercises/Exercises';
import HeroBanner from '../components/HeroBanner/HeroBanner';
import SearchExercises from '../components/SearchExercises/SearchExercises';


const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [currentBodyPart, setCurrentBodyPart] = useState('all');
  const [curatedExercises, setCuratedExercises] = useState([]);
  const [searched, setSearched] = useState('');
  /*
  const curatedExercises =  exercises.filter(
    exercise=>exercise.bodyPart.includes(currentBodyPart)
  );
  */
  

  



  return (
    <Box>
      <HeroBanner />
      <SearchExercises 
      setExercises={setExercises} 
      currentBodyPart={currentBodyPart}
      setCurrentBodyPart={setCurrentBodyPart}
      setCuratedExercises={setCuratedExercises} 
      curatedExercises={curatedExercises} 
      exercises={exercises}
      searched={searched}
      setSearched={setSearched}
      />
      <Exercises 
      setExercises={setExercises} 
      exercises={exercises} 
      currentBodyPart={currentBodyPart}
      setCuratedExercises={setCuratedExercises} 
      curatedExercises={curatedExercises}
      searched={searched}
      setSearched={setSearched}
      />
    </Box>
  )
}

export default Home