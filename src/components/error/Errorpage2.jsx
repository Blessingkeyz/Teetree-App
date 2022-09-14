import React from 'react'
import { Button, Box, VStack } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
const Errorpage2 = () => {
  return (
    <Box>
      <VStack>

        <p style={{ fontSize: '180px', textAlign: 'center', fontFamily: 'serif' }}>404</p>
        <p style={{ fontSize: '50px', textAlign: 'center', fontFamily: 'serif' }}>Page not found</p><br></br>
        <p style={{ fontSize: '30px', textAlign: 'center', fontFamily: 'serif' }}>Not found</p><br></br><br></br>
        <NavLink to={'/'}  >
          <Button style={{
            fontSize: '20px', padding: '15px', height: '60px',
            width: '300px', color: 'white', backgroundColor: 'blueviolet', borderRadius: '10px'
          }}>
            Return to home
          </Button>
        </NavLink>
      </VStack>

    </Box>

  )
}

export default Errorpage2