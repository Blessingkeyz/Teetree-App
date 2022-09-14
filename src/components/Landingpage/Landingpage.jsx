import React from 'react'
import Navbar from './Navbar/Navbar'
import Aboutus from './Aboutus/Aboutus'
import Ourservice from './Ourservice/Ourservice'
import Contactus from './Contactus/Contactus'
import Frame from './Frame/Frame'
import Footer from './Footer/Footer'

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Aboutus />
      <Ourservice />
      <Contactus />
      <Frame />
      <Footer />
    </>

  )
}

export default LandingPage