import React from 'react'
import { Box, Button, Flex, Heading, HStack, Link as Vlinks } from '@chakra-ui/react';
import logo from '../Navbar/logo.png'
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <>
      <Box width={'1440px'} height={'100px'} style={{
        backgroundColor: '#F9F0FF', borderBottom: '0.5px solid #FAFAFA'
      }}>
        <Flex>
          <Heading style={{
            position: 'absolute',
            width: '131px',
            height: '20.52px',
            left: '129px',
            top: '20px'

          }}>
            <img src={logo} alt='navlogo' />
          </Heading>
          <HStack marginLeft={'320px'} marginTop={'40px'} width={'40%'} textAlign={'center'} gap={'10'} justify={'center'}
            style={{
              fontFamily: 'Poppins',
              fontStyle: 'normal', color: '#666666',
              fontWeight: '500',
              fontSize: '20px',
              lineHeight: '30px'
            }}>
            <Vlinks href='#'>Home</Vlinks>
            <Vlinks href='#'>Support</Vlinks>
            <Vlinks href='#'>Contact Us</Vlinks>
            <Vlinks href='#'>FAQs</Vlinks>
          </HStack>
          <NavLink to={'/login'}  >
            <Button style={{
              position: 'absolute',
              width: '133px', color: '#440376',
              height: '56px', border: '2px solid #440376',
              left: '996px', fontFamily: 'Poppins',
              top: '32px', display: 'flex', bordeRadius: '10px',
              padding: '20px 20px', backgroundColor: '#FEFEFE'
            }}>Log In
            </Button>
          </NavLink>

          <NavLink to={'/signup'}  >
            <Button style={{
              position: 'absolute',
              width: '133px', color: '#F8F8F8',
              height: '56px', backgroundColor: '#440376',
              bordeRadius: '10px',
              left: '1140px',
              top: '32px', display: 'flex',
              padding: '20px 20px'
            }}>Get Started
            </Button>
          </NavLink>
        </Flex>
      </Box>
    </>

  )
}

export default Navbar