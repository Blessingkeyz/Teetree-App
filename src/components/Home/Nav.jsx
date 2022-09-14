import React from 'react'
import { Box, Button, HStack, Image, Text } from '@chakra-ui/react'
import Logo from '../../assets/images/logo.svg'
import { NavLink } from 'react-router-dom';


const Nav = () => {
    return (
        <HStack

            box-sizing={'border-box'}
            position={'absolute'}
            width={'1440px'}
            height={'120px'}
            background={'#F9F0FF'}
            border-bottom={'0.5px solid #FAFAFA'}
        >
            <Box
            >
                <Image
                    src={Logo}
                    alt='logo'
                    width={'131px'}
                    height={'53.02px'}
                    position={'absolute'}
                    left={'129px'}
                    top={'29px'}
                />
            </Box>
            <HStack
                width={'494'}
                height={'30px'}
                top={'46px'}
                left38
            >
                <NavLink to={'/signup'}  >
                    <Button
                        colorScheme={'purple'}
                        color={'white'}
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



                        left={{
                            base: '54px',
                            sm: '1000px'
                        }}
                    >
                        Sign up
                    </Button>
                </NavLink>
                <NavLink to={'/login'}  >
                    <Button
                        colorScheme={'purple'}
                        color={'white'}
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



                        left={{
                            base: '54px',
                            sm: '1100px'
                        }}
                    >
                        Log in
                    </Button>
                </NavLink>
            </HStack>
        </HStack >
    )
}

export default Nav