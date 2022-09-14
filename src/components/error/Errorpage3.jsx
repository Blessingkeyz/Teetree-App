import React from 'react'
import { Box, Button, VStack } from '@chakra-ui/react'
const Errorpage3 = () => {
  return (
    <Box>
        <VStack>

        <p style={{fontSize: '180px', textAlign: 'center', fontFamily: 'serif'}}>401</p>
      <p style={{fontSize: '50px', textAlign: 'center', fontFamily: 'serif'}}>Unauthenticated</p><br></br>
      <p style={{fontSize: '30px', textAlign: 'center', fontFamily: 'serif'}}>
        You need to login or signup in other<br></br>  to access this page
        </p><br></br><br></br>
        <Button style={{fontSize:'20px', padding: '15px', height: '60px',
         width:'250px', color:'white',backgroundColor: 'blueviolet',borderRadius: '10px'}}>
            Login</Button>
    
        </VStack>

    </Box>
  )
}

export default Errorpage3