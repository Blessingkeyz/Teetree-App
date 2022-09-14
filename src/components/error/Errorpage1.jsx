import React from 'react'
import { Box, Button, Flex, VStack } from '@chakra-ui/react'
const Errorpage1 = () => {
  return (
    <Box>
        <VStack>

      <p style={{fontSize: '180px', textAlign: 'center', fontFamily: 'serif'}}>403</p>
      <p style={{fontSize: '50px', textAlign: 'center', fontFamily: 'serif'}} >Forbidden</p><br></br>
      <p style={{fontSize: '30px', textAlign: 'center', fontFamily: 'serif'}}>
        You dont have the permissiom to<br></br> access/view this page
        </p><br></br><br></br>
        <Button style={{fontSize:'20px', padding: '15px', height: '60px',
         width:'250px', color:'white',backgroundColor: 'blueviolet',borderRadius: '10px'}}>
            Return to home</Button>
        
        </VStack>



    
    </Box>
  )
}

export default Errorpage1