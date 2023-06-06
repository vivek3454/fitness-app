import { Box, Button, Image, Text } from '@chakra-ui/react'
import React from 'react'
import HeroBannerImg from '../assets/images/banner.png'

const HeroBanner = () => {
  return (
    <Box mt={['70px', '70px', '100px']} ml={['50px']} position={'relative'} padding={'20px'}>
      <Text color={'red.500'} fontWeight={'700'} fontSize={'26px'}>
        Fitness Club
      </Text>
      <Text fontWeight={700} fontSize={['30px', '40px', '44px']} lineHeight={'60px'} mb="16px" mt="20px">
        Sweat, Smile <br /> And Repeat
      </Text>
      <Text fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
        Check out the most effective exercises personalized to you
      </Text>
      <a href="#exercises">
        <Button href='#exercises' colorScheme='red' mt={'6'}>Explore Exercises</Button>
      </a>
      <Text mt={'-4'} fontWeight={600} color="#FF2625" opacity={'0.1'} display={['none', 'none', 'block']} fontSize={'190px' }>
      Exercise
    </Text>
      <Image src={HeroBannerImg} className='hero-banner-img' />
    </Box>
  )
}

export default HeroBanner