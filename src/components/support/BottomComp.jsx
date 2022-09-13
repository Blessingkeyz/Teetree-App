import { Button, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const BottomComp = () => {
    return (
        <Flex>
            {/* analytics  */}
            <Text
                position={'absolute'}
                width={{
                    base: '296px',
                    sm: '115px'
                }}
                top={{
                    base: '0',
                    sm: '824px'
                }}
                height={{
                    base: '20px',
                    sm: '24px'
                }}
                left={'91px'}
                fontFamily={'poppins'}
                fontWeight={'500'}
                color={'#22023B'}
                fontSize={{
                    base: '13px',
                    sm: '16px'
                }}
                fontStyle={'normal'}
                lineHeight={{
                    base: '19.5px',
                    sm: '24px'
                }}
            >Users per day:
            </Text>

            <Text
                position={'absolute'}
                width={{
                    base: '296px',
                    sm: '168px'
                }}
                top={{
                    base: '0',
                    sm: '876px'
                }}
                height={{
                    base: '20px',
                    sm: '24px'
                }}
                left={'91px'}
                fontFamily={'poppins'}
                fontWeight={'500'}
                color={'#22023B'}
                fontSize={{
                    base: '13px',
                    sm: '16px'
                }}
                fontStyle={'normal'}
                lineHeight={{
                    base: '19.5px',
                    sm: '24px'
                }}
            >Impressions on links:
            </Text>

            <Text
                position={'absolute'}
                width={{
                    base: '296px',
                    sm: '168px'
                }}
                top={{
                    base: '0',
                    sm: '929px'
                }}
                height={{
                    base: '20px',
                    sm: '24px'
                }}
                left={'91px'}
                fontFamily={'poppins'}
                fontWeight={'500'}
                color={'#22023B'}
                fontSize={{
                    base: '13px',
                    sm: '16px'
                }}
                fontStyle={'normal'}
                lineHeight={{
                    base: '19.5px',
                    sm: '24px'
                }}
            >Conversions:
            </Text>

            <Button
                width={{
                    base: '327px',
                    sm: '116.18px'
                }}
                height={{
                    base: '55px',
                    sm: '33.4px'
                }}
                borderRadius={'8px'}
                color={'#22023B'}
                colorScheme={'pink01'}
                fontFamily={'poppins'}
                fontStyle={'normal'}
                fontWeight={'400'}
                fontSize={{
                    base: '16px',
                    sm: '9.54px'
                }}
                left={{
                    base: '777px',
                    sm: '777px'
                }}
                position={'absolute'}
                top={{
                    base: '16px',
                    sm: '876px'
                }}
                lineHeight={'14.32px'}
            // type={'submit'} 
            >
                Show details {'>'}
            </Button>

            <Button
                width={{
                    base: '327px',
                    sm: '116.18px'
                }}
                height={{
                    base: '55px',
                    sm: '33.4px'
                }}
                borderRadius={'8px'}
                color={'#22023B'}
                colorScheme={'pink01'}
                fontFamily={'poppins'}
                fontStyle={'normal'}
                fontWeight={'400'}
                fontSize={{
                    base: '16px',
                    sm: '9.54px'
                }}
                left={{
                    base: '777px',
                    sm: '777px'
                }}
                position={'absolute'}
                top={{
                    base: '16px',
                    sm: '929px'
                }}
                lineHeight={'14.32px'}
            // type={'submit'} 
            >
                Show details {'>'}
            </Button>
        </Flex>
    )
}

export default BottomComp