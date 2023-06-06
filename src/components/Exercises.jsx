import { Box, Heading, Stack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import ExerciseCard from './ExerciseCard'
import { exerciseOptions, fetchData } from '../utils/fetchData';

const Exercises = ({ setExercises, bodyPart, exercises }) => {

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === 'all') {
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      } else {
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
      }

      setExercises(exercisesData);
    };

    fetchExercisesData();
  }, [bodyPart]);

  return (
    <Box id='exercises' sx={{ mt: { 'lg': '110px' } }} mt={'50px'} padding={'20px'} >
      <Heading as='h3' size='lg' mb={'46px'} fontWeight={'semibold'}>
        Showing Results
      </Heading>
      <Stack direction={'row'} gap={{ sm: '50px', lg: '110px' }} flexWrap={'wrap'} justifyContent={'center'}>
        {exercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>
      <Stack mt={'100px'} alignItems={'center'}>
        {/* {exercises.length > 9 && (
          
        )} */}
      </Stack>
    </Box>
  )
}

export default Exercises