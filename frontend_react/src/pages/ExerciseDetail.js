import React,{useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';

import { exerciseOptions,fetchData } from '../utils/fetchData';
import SimilarExercises from '../components/SimilarExercises/SimilarExercises';
import Details from '../components/Details/Details';

const ExerciseDetail = () => {

  const [exerciseDetail, setExerciseDetail] = useState({});
  const [targetExercices, setTargetExercices] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  const {id} = useParams();


  useEffect(() => {
    const fetchExercisesData =async()=>{

      const exerciseDetailData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`, exerciseOptions);
      setExerciseDetail(exerciseDetailData);

      const targetMuscleExercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/target/${exerciseDetailData.target}`, exerciseOptions);
      setTargetExercices(targetMuscleExercisesData);

      const equipmentExercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions);
      setEquipmentExercises(equipmentExercisesData);
    }

    fetchExercisesData();
    
  }, [id]);



  
  return (
    <div>
      <Details exerciseDetail={exerciseDetail}/>
      <SimilarExercises targetExercices={targetExercices} equipmentExercises={equipmentExercises}/>
    </div>
  )
}

export default ExerciseDetail