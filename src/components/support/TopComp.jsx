import { Flex, Text, Image, Button } from '@chakra-ui/react'
import React from 'react'
import Avatar from '../../assets/images/avatar.svg'
import Bell from '../../assets/images/bell.svg'

const TopComp = () => {
    return (
        <Flex>

            {/* header */}
            <Text
                position={'absolute'}
                width={{
                    base: '334px',
                    sm: '184px'
                }}
                top={{
                    base: '0',
                    sm: '59px'
                }}
                height={{
                    base: '20px',
                    sm: '57px'
                }}
                left={'43px'}
                fontFamily={'poppins'}
                fontWeight={'600'}
                color={'#212020'}
                fontSize={{
                    base: '13px',
                    sm: '24px'
                }}
                fontStyle={'normal'}
                lineHeight={{
                    base: '19.5px',
                    sm: '36px'
                }}
            >Welcome !
                {/* {user.fullname} */}
            </Text>
            <Text
                position={'absolute'}
                width={{
                    base: '296px',
                    sm: '337px'
                }}
                top={{
                    base: '0',
                    sm: '95px'
                }}
                height={{
                    base: '20px',
                    sm: '24px'
                }}
                left={'40px'}
                fontFamily={'poppins'}
                fontWeight={'400'}
                color={'#2C2B2B'}
                fontSize={{
                    base: '13px',
                    sm: '14px'
                }}
                fontStyle={'normal'}
                lineHeight={{
                    base: '19.5px',
                    sm: '24px'
                }}
            >What would you like us to help you with?
            </Text>
            <Image src={Avatar} alt='logo'
                width={{
                    base: '142px',
                    sm: '61px'
                }}
                height={{
                    base: '57.47px',
                    sm: '60.99px'
                }}
                position={'absolute'}
                left={{
                    base: '116px',
                    sm: '901px'
                }}
                top={{
                    base: '74px',
                    sm: '59px'
                }}
            />
            <Image src={Bell} alt='logo'
                width={{
                    base: '142px',
                    sm: '24px'
                }}
                height={{
                    base: '57.47px',
                    sm: '24px'
                }}
                position={'absolute'}
                left={{
                    base: '116px',
                    sm: '851px'
                }}
                top={{
                    base: '74px',
                    sm: '69px'
                }}
            />
        </Flex>
    )
}

export default TopComp