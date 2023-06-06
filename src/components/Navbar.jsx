import { Image, Stack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/images/Logo.png'

const Navbar = () => {
    return (
        <Stack direction={'row'} alignItems={'center'} p={'20px'} gap={['60px', '40px']}>
            <Link to={'/'}>
                <Image src={Logo} w={'48px'} h={'48px'} margin={'0px 20px'} />
            </Link>
            <Stack direction={'row'} gap={'40px'} fontSize={['18px', '21px']} alignItems={'flex-end'}>
                <Link to={'/'} style={{borderBottom: '3px solid #FF2625'}} >Home</Link>
                <a href="#exercises" style={{ textDecoration: 'none', color: '#3A1212' }}>Exercises</a>
            </Stack>
        </Stack>
    )
}

export default Navbar