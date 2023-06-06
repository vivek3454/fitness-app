import { Box, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import Loader from './Loader';

const ExerciseVideos = ({ exerciseVideos, name }) => {
    if (!exerciseVideos.length) return <Loader />;
    return (
        <Box mt={['20px', '20px', '200px']} padding={'20px'}>
            <Text fontSize={{ 'lg': '35px', 'sm': '25px' }} fontWeight={700} color="#000" mb="33px">
                Watch <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>{name}</span> exercise videos
            </Text>
            <Stack flexDirection={ { 'lg': 'row' }} gap={{ 'lg': '110px', 'sm': '20px' } } justifyContent="flex-start" flexWrap="wrap" alignItems="center">
                {exerciseVideos?.slice(0, 6)?.map((item, index) => (
                    <a
                        key={index}
                        className="exercise-video"
                        href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Image src={item.video.thumbnails[0].url} alt={item.video.title} />
                        <Box>
                            <Text fontSize={{ 'lg': '22px', 'sm': '18px' }} width={'300px'} className='text-overflow' fontWeight={600} color="#000">
                                {item.video.title}
                            </Text>
                            <Text fontSize="14px" color="#000">
                                {item.video.channelName}
                            </Text>
                        </Box>
                    </a>
                ))}
            </Stack>
        </Box>
    )
}

export default ExerciseVideos