import { Box, FormControl, Text } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'

const ForgotPassword = () => {
    return (
        <Box
            position={'absolute'}>
            <FormControl>
                <NavLink to={'/signup'}  >
                    <Text
                        position={'absolute'}
                        fontFamily={'poppins'}
                        fontWeight={'400'}
                        textAlign={'center'}
                        fontSize={{
                            base: '14px',
                            sm: '16px'
                        }}
                        lineHeight={{
                            base: '21px',
                            sm: '24px'
                        }}
                        width={{
                            base: '239px',
                            sm: '141px'
                        }}
                        height={{
                            base: '21px',
                            sm: '24px'
                        }}
                        top={{
                            base: '235px',
                            sm: '307.5px'
                        }}
                        left={{
                            base: '-50px',
                            sm: '176px'
                        }}
                        fontColor={'#303030'}

                    > Forgot Password?</Text>
                </NavLink>
            </FormControl>
        </Box>
    )
}

export default ForgotPassword