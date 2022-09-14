import { Flex, Text, Image, Button } from '@chakra-ui/react'
import React from 'react'
import Avatar from '../../assets/images/avatar.svg'

const TopComp = () => {
    return (
        <Flex>

            {/* header */}
            <Text
                position={'absolute'}
                width={{
                    base: '296px',
                    sm: '184px'
                }}
                top={{
                    base: '0',
                    sm: '59px'
                }}
                height={{
                    base: '20px',
                    sm: '60px'
                }}
                left={'43px'}
                fontFamily={'poppins'}
                fontWeight={'500'}
                color={'#212020'}
                fontSize={{
                    base: '13px',
                    sm: '40px'
                }}
                fontStyle={'normal'}
                lineHeight={{
                    base: '19.5px',
                    sm: '60px'
                }}
            >Statistics
            </Text>
            <Text
                position={'absolute'}
                width={{
                    base: '296px',
                    sm: '337px'
                }}
                top={{
                    base: '0',
                    sm: '120px'
                }}
                height={{
                    base: '20px',
                    sm: '24px'
                }}
                left={'37px'}
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
            >Overview of site and click impressions
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

            {/* period selection */}
            <Button
                width={{
                    base: '327px',
                    sm: '82.14px'
                }}
                height={{
                    base: '55px',
                    sm: '46px'
                }}
                borderRadius={'2.46px'}
                color={'#FEFEFE'}
                bgColor={'#440376'}
                fontFamily={'poppins'}
                fontStyle={'normal'}
                fontWeight={'400'}
                fontSize={{
                    base: '16px',
                    sm: '13.14px'
                }}
                left={{
                    base: '777px',
                    sm: '37px'
                }}
                position={'absolute'}
                top={{
                    base: '16px',
                    sm: '208px'
                }}
                lineHeight={'19.71px'}
            // type={'submit'} 
            >
                Day
            </Button>

            <Button
                width={{
                    base: '327px',
                    sm: '82.14px'
                }}
                height={{
                    base: '55px',
                    sm: '46px'
                }}
                borderRadius={'2.46px'}
                color={'#FEFEFE'}
                bgColor={'#440376'}
                fontFamily={'poppins'}
                fontStyle={'normal'}
                fontWeight={'400'}
                fontSize={{
                    base: '16px',
                    sm: '13.14px'
                }}
                left={{
                    base: '777px',
                    sm: '135.14px'
                }}
                position={'absolute'}
                top={{
                    base: '16px',
                    sm: '208px'
                }}
                lineHeight={'19.71px'}
            // type={'submit'} 
            >
                Week
            </Button>

            <Button
                width={{
                    base: '327px',
                    sm: '82.14px'
                }}
                height={{
                    base: '55px',
                    sm: '46px'
                }}
                borderRadius={'2.46px'}
                color={'#FEFEFE'}
                colorScheme={'pink01'}
                fontFamily={'poppins'}
                fontStyle={'normal'}
                fontWeight={'400'}
                fontSize={{
                    base: '16px',
                    sm: '13.14px'
                }}
                left={{
                    base: '777px',
                    sm: '233.29px'
                }}
                position={'absolute'}
                top={{
                    base: '16px',
                    sm: '208px'
                }}
                lineHeight={'19.71px'}
            // onSelect={{ bgColor: 'pink' }}
            // type={'submit'} 
            >
                Month
            </Button>
        </Flex>
    )
}

export default TopComp