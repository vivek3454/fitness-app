import { Box } from '@chakra-ui/react'
import React from 'react'
import BodyPart from './BodyPart'
import ExerciseCard from './ExerciseCard'

const HorizontalScrollbar = ({ data, setBodyPart, bodyPart, isBodyParts }) => {
    return (
        <div style={{display: 'flex', overflowX: 'auto', marginTop: '70px'}}>
            {data.map((item) => (
                <Box
                    key={item.id || item}
                    itemID={item.id || item}
                    title={item.id || item}
                    margin={'10px 40px'}
                    flexShrink={'0'}
                >
                    {isBodyParts ? <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} /> : <ExerciseCard exercise={item}></ExerciseCard>}
                </Box>
            ))}
        </div>
    )
}

export default HorizontalScrollbar