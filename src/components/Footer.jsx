import React from 'react'
import Logo from '../assets/images/Logo-1.png'
import { Box, Image, Stack, Text } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box mt={'80px'} bgColor={'#fff3f4'}>
      <Stack gap={'40px'} alignItems={'center'} px={'40px'} py={'40px'} >
        <Image src={Logo} alt='logo' width={'200px'} height={'40px'} />
        <Text>Made with ❤️ by Vivek</Text>
      </Stack>
    </Box>
  )
}

export default Footer