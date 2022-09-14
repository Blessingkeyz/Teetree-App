import React from 'react'
import { Box, FormControl, Text } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom';
import { memo } from 'react';

const HaveAccount = memo(() => {
    console.log("render : have account");
    return (
        <Box
            position={'absolute'}>
            <FormControl>
                <NavLink to={'/signup'}  >
                    <Text
                        position={'absolute'}
                        fontFamily={'poppins'}
                        fontWeight={'400'}
                        fontSize={{
                            base: '14px',
                            sm: '19px'
                        }}
                        lineHeight={{
                            base: '21px',
                            sm: '30px'
                        }}
                        textAlign={'center'}
                        width={{
                            base: '242px',
                            sm: '336px'
                        }}
                        height={{
                            base: '21px',
                            sm: '30px'
                        }}
                        top={{
                            base: '357px',
                            sm: '468.5px'
                        }}
                        left={{
                            base: '54px',
                            sm: '249px'
                        }}
                    >
                        Don't have an account? Sign up </Text>
                </NavLink>
            </FormControl>
        </Box>
    )
}
)
export default HaveAccount