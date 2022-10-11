import React, {useEffect, useState} from 'react';
import { Pagination } from '@mui/material';

import {exerciseOptions, fetchData } from '../../utils/fetchData';
import './Exercises.css';
import ExerciseCard from '../ExerciseCard/ExerciseCard';
import { Stack } from '@mui/system';


const Exercises = ({
  setExercises, 
  currentBodyPart, 
  exercises,
  searched,
  setSearched
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  
  const indexLast = currentPage*9;
  const indexFirst = indexLast-9;
  
  const indexCurrent = exercises.slice(indexFirst,indexLast);

  const changePage =(e, value)=>{
    setCurrentPage(value);

    
    currentBodyPart&&window.scrollTo({top: 2800, behavior:'smooth'});

  }

/*-----------------------when bodypart change fetch exercices data for selected bodypart  ----------------------*/
  useEffect(()=>{
    const fetchExercisesData = async()=>{
      let exercisesData =[];

      if(!currentBodyPart){
        exercisesData=await fetchData('https://exercisedb.p.rapidapi.com/exercises',exerciseOptions);
      } else if(currentBodyPart==='all'){
        exercisesData=await fetchData('https://exercisedb.p.rapidapi.com/exercises',exerciseOptions);
        setExercises(exercisesData);
      }else{
        exercisesData=await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodypart/${currentBodyPart}`, exerciseOptions);
        
        setExercises(exercisesData);
      }
      setSearched(currentBodyPart);
      

    }
    fetchExercisesData();

  },[currentBodyPart]);
  

  return (
    <div className='exercises-section'>
      <div className='exercises'>
        {indexCurrent.map((exercise,index)=>(
          <>
            {<ExerciseCard key={index} exercise={exercise}/>}
           
          </>
          
        ))}

      </div>
      <Stack mt='100px' alignItems='center'>
        {exercises.length > 9 && (
          <Pagination 
          shape='rounded'
          count={Math.ceil(exercises.length /9)}
          page={currentPage}
          onChange={changePage}
          />

        )}

      </Stack>
      
    </div>
  )
}

export default Exercises