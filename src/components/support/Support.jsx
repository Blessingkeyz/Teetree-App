import React from 'react'
import { Box } from '@chakra-ui/react'
import TopComp from './TopComp'
import "@fontsource/poppins"
import MiddleComp from './MiddleComp'
import BottomComp from './BottomComp'
import MiddleComp2 from './MiddleComp2'


const Support = () => {
    return (
        <Box
            position={'relative'}
            background={'#FEFEFE'}
            height={{
                base: '812px',
                sm: '1024px'
            }}
            width={{
                base: '375px',
                sm: '1076px'
            }}
            left={{
                base: '7573',
                sm: '364px'
            }}
            top={'100px'}
        >
            <TopComp />
            <MiddleComp />
            <MiddleComp2 />
            <BottomComp />
        </Box>
    )
}

export default Support