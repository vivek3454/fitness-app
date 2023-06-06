import { Box, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import HorizontalScrollbar from '../components/HorizontalScrollbar'
import Loader from './Loader'

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <Box mt={{ 'lg': '100px', 'sm': '0px' }} >
      <Text fontSize={{ 'lg': '35px', 'sm': '25px' }} ml={'20px' } fontWeight={700} color="#000" mb="33px">
        Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Target Muscle</span> exercises
      </Text>
      <Stack direction="row" p={2} position={'relative'}>
        {targetMuscleExercises.length !== 0 ? <HorizontalScrollbar data={targetMuscleExercises} /> : <Loader />}
      </Stack>
      <Text fontSize={{ 'lg': '35px', 'sm': '25px' }} ml={'20px' } mt={{ 'lg': '100px', 'sm': '60px' } } fontWeight={700} color="#000" mb="33px">
        Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Equipment</span> exercises
      </Text>
      <Stack direction="row" p={2} position={ 'relative' }>
        {equipmentExercises.length !== 0 ? <HorizontalScrollbar data={equipmentExercises} /> : <Loader />}
      </Stack>
    </Box>
  )
}

export default SimilarExercises