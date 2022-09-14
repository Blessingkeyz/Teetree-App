import { FormControl, Text } from '@chakra-ui/react'
import React from 'react'
import { memo } from 'react';

const HeadingSection = memo(() => {
    console.log("render : headingSection");
    return (
        <FormControl>
            <Text
                position={'absolute'}
                left={{
                    base: '23px',
                    sm: '338px'
                }}
                top={{
                    base: '0px',
                    sm: '66px'
                }}
                width={{
                    base: '287px',
                    sm: '153px'
                }}
                height={{
                    base: '34px',
                    sm: '48px'
                }}
                fontFamily={'poppins'}
                fontStyle={'normal'}
                fontWeight={'500'}
                fontSize={{
                    base: '20px',
                    sm: '32px'
                }}
                lineHeight={{
                    base: '30px',
                    sm: '48px'
                }}
                textAlign={'center'}
                fontColor={'#212020'}
            >
                Welcome
            </Text>
        </FormControl>
    )
}
)

export default HeadingSection