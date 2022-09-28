import React from 'react'
import Navbar from './Navbar/Navbar'
import Aboutus from './Aboutus/Aboutus'
import Ourservice from './Ourservice/Ourservice'
import Contactus from './Contactus/Contactus'
import Frame from './Frame/Frame'
import Footer from './Footer/Footer'
import { Box } from '@chakra-ui/react'

const LandingPage = () => {
  return (
    <Box
      background={'#FEFEFE'}
      height={{
        base: '3040px',
        sm: '3700px'
      }}
      width={{
        base: '375px',
        sm: '1440px'
      }}
      left={{
        base: '7573',
        sm: '117px'
      }}
      top={'208px'}
      borderRadius={'0px'}
    >

      <Navbar />
      <Aboutus />
      <Ourservice />
      <Contactus />
      <Frame />
      <Footer />

    </Box>


  )
}

export default LandingPage