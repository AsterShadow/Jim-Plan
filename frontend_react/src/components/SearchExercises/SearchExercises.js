import { TextField } from '@mui/material';
import React, {useEffect, useState} from 'react';

import {exerciseOptions, fetchData} from '../../utils/fetchData';
import './SearchExercises.css';
import HorizontalScrollbar from '../HorizontalScrollbar/HorizontalScrollbar.js';


const SearchExercises = ({
  setExercises, 
  currentBodyPart, 
  setCurrentBodyPart,  
  exercises,
  searched,
  setSearched,
}) => {

  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);
  
  

  useEffect(() => {
    const fetchExercisesData = async()=>{
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
      
      setBodyParts(['all',...bodyPartsData]);
    }
    fetchExercisesData();
  }, []);
  

  const handleSearch = async()=>{
    if(search){
      setSearched('');
      const exercisesData = await fetchData
      ('https://exercisedb.p.rapidapi.com/exercises',exerciseOptions);

      const searchedExercises = exercisesData.filter(
        (item)=> 
        item.name.toLowerCase().includes(search)
        || item.target.toLowerCase().includes(search)
        || item.equipment.toLowerCase().includes(search)
        || item.bodyPart.toLowerCase().includes(search),
      );

      setSearch('');
      setExercises(searchedExercises);
      setSearched(search);
      window.scrollTo({top:3000, left:100, behavior:'smooth'});
      
    }

  }


  return (
    <>
    <div className='searchExercises'>
      <h3 >Search by keyword ...</h3>
      <div className='searchBar'>
        <TextField sx={{
          input: {
            fontWeight: '600',
            border: '2px solid #6B8F71',
            color: '#454851',
          }

        }}
        className='textField'
        value={search}
        onChange={(e)=>setSearch(e.target.value.toLowerCase())}
        placeholder='Search exercises'
        />
        <button type='button' className='search-btn green-btn' onClick={handleSearch}>Search</button>
      </div>

    </div>
    <div className='bodyPartsSection'>
    <h3>.. or by bodyparts</h3>
      <HorizontalScrollbar bodyParts={bodyParts}
      currentBodyPart={currentBodyPart} setCurrentBodyPart={setCurrentBodyPart} searched={searched}
      />
    </div>
    </>
    
  )
}

export default SearchExercises