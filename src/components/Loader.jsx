import { Spinner, Stack } from '@chakra-ui/react'
import React from 'react'

const Loader = () => {
  return (
    <Stack direction={'row'} alignItems={'center'} justifyContent={'center'} width={'100%'}>
      <Spinner color='red.500' />
    </Stack>
  )
}

export default Loader