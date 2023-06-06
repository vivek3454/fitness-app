import { Box, Button, Input, Stack, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { exerciseOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';

const SearchExercises = ({ setExercises, bodyPart, setBodyPart}) => {
  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
      // const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      setBodyParts(['all', ...bodyPartsData]);
      // setExercises(exercisesData);
    };

    fetchExercisesData();
  }, []);
  // function for handle search
  const handleSearch = async ()=>{
    if (search) {
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      const searchedExercises = exercisesData.filter(
        (item) => item.name.toLowerCase().includes(search)
               || item.target.toLowerCase().includes(search)
               || item.equipment.toLowerCase().includes(search)
               || item.bodyPart.toLowerCase().includes(search),
      );
      setSearch('');
      setExercises(searchedExercises);
    }
  }
  

  return (
    <Stack alignItems={'center'} mt={'37px'} justifyContent={'center'} p={'20px'}>
      <Text fontWeight={'700'} fontSize={{ 'sm': '30px', 'lg': '44px' }} mb={'50px'} textAlign={'center'}>
        Awesome Exercises You <br /> Should Know
      </Text>
      <Box pos={'relative'} justifyContent={'center'}>
          <Input value={search} focusBorderColor='red.500' borderRadius={'2px'} onChange={(e) => { setSearch(e.target.value.toLowerCase())}} placeholder='Search Exercises' type='text' variant='outline' fontWeight={'600'} width={{ 'sm': '350px', 'lg': '800px' }} bg={'white'} />
          <Button onClick={handleSearch} w={{'sm': '80px', 'lg': '170px'}} pos={'absolute'} zIndex={'10'} right={'0'} borderRadius={'2px'} fontSize={{'sm': '16px', 'lg': '20px'}} colorScheme='red'>Search</Button>
      </Box>
      <Box pos={'relative'} w={'1300px'} >
        <HorizontalScrollbar data={bodyParts} setBodyPart={setBodyPart} bodyPart={bodyPart} isBodyParts />
      </Box>
    </Stack>
  )
}

export default SearchExercises