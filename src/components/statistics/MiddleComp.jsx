import { Flex, Image } from '@chakra-ui/react'
import Stat from '../../assets/images/stat.svg'
import React from 'react'

const MiddleComp = () => {
    return (
        <Flex>

            {/* chart image */}
            <Image src={Stat} alt='logo'
                width={{
                    base: '142px',
                    sm: '979px'
                }}
                height={{
                    base: '57.47px',
                    sm: '529px'
                }}
                position={'absolute'}
                right={{
                    base: '116px',
                    sm: '60px'
                }}
                top={{
                    base: '74px',
                    sm: '272px'
                }}
            />

        </Flex>

    )
}

export default MiddleComp