import React from 'react'
import icon from '../assets/icons/gym.png'
import { Image, Stack, Text } from '@chakra-ui/react'

const BodyPart = ({ item, bodyPart, setBodyPart }) => {
  return (
    <Stack
      alignItems={'center'}
      justifyContent={'center'}
      className='bodyPart-card'
      sx={{
        borderTop: bodyPart === item ? '4px solid #ff2625' : '',
        backgroundColor: '#fff',
        // borderBottomLeftRadius: '20px',
        // borderTopRightRadius: '20px',
        width: '270px',
        height: '280px',
        gap: '47px',
        cursor: 'pointer'
      }}
      onClick={()=>{
        setBodyPart(item)
        window.scrollTo({ top: 1800, behavior: 'smooth' });
      }}
    >
        <Image src={icon} alt='dumbbell' w={'40px'} h={'40px'} />
        <Text fontSize={'24px'} fontWeight={'bold'} color={'#3A1212'} textTransform={'capitalize'}>{item}</Text>
    </Stack>
  )
}

export default BodyPart