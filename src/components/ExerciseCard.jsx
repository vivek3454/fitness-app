import { Button, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const ExerciseCard = ({exercise}) => {
  return (
    <Link className='exercise-card' to={`/exercise/${exercise.id}`}>
        <Image src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
        <Stack direction={'row'} bg={'#fff'}>
            <Button ml={'20px'} color={'#fff'} bg={'#ffa9a9'} textTransform={'capitalize'}>{exercise.bodyPart}</Button>
            <Button ml={'20px'} color={'#fff'} bg={'#fcc757'} textTransform={'capitalize'}>{exercise.target}</Button>
        </Stack>
        <Text pl={'20px'} pb={'20px'} bg={'white'} color={'#000'} pt={'11px'} textTransform={'capitalize'} fontWeight={'bold'}>{exercise.name}</Text>
    </Link>
  )
}

export default ExerciseCard