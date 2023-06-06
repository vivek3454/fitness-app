import React from 'react'
import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';
import { Button, Heading, Image, Stack, Text } from '@chakra-ui/react';

const Detail = (props) => {
    const {exerciseDetail} = props;
    const extraDetail = [
        {
          icon: BodyPartImage,
          name: exerciseDetail.bodyPart,
        },
        {
          icon: TargetImage,
          name: exerciseDetail.target,
        },
        {
          icon: EquipmentImage,
          name: exerciseDetail.equipment,
        },
      ];
    return (
        <Stack gap="60px" flexDirection={['column', 'column', 'row']} p={'20px'} alignItems={'center'}>
            <Image src={exerciseDetail.gifUrl} alt={exerciseDetail.name} loading='lazy' h={'542px'} w={'529px'} />
            <Stack gap={['20px', '35px']}>
                <Heading fontSize={'46px'} fontWeight={'semibold'} >
                    {exerciseDetail.name}
                </Heading>
                <Text >
                    Exercises keep you strong.{' '}
                    <span style={{ textTransform: 'capitalize' }}>{exerciseDetail.name}</span> is one
                    of the best <br /> exercise to target your {exerciseDetail.target}. It will help you improve your{' '}
                    <br /> mood and gain energy.
                </Text>
                {extraDetail.map((item, index) => (
                    <Stack key={index} direction={'row'} gap={'24px'} alignItems={'center'}>
                        <Button bg={'#fff'} borderRadius={'full'} border={'2px solid red'} h={'80px'} w={'80px'}>
                            <Image src={item.icon} h={'50px'} w={'50px'} />
                        </Button>
                        <Text fontWeight={'400'} textTransform={'capitalize'} fontSize={'20px'}>
                            {item.name}
                        </Text>
                    </Stack>
                ))}
            </Stack>
        </Stack>
    )
}

export default Detail