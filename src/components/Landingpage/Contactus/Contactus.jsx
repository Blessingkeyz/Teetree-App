import React from 'react'
import { Box, Button, Input, Textarea, VStack } from '@chakra-ui/react'
import logo from '../Contactus/logo.png'
import drawing from '../Contactus/design.png'
import './Contactus.css'

const Contactus = () => {
  return (
    <>
      <Box
        display={{
          base: 'none',
          sm: 'yes'
        }}
        className="teetree-1">
        <img src={logo} alt="contLogo" />
      </Box>
      <div>
        <span className="span-help-1">
          Do you have any questions or inquires send us an email. Expect our
          replies in a very short while. The subject field requires you to be
          specific on what you want us to help you with. We want to make sure we
          offer the best services to our clients.
        </span>
      </div>
      <div className="draw-1">
        <img src={drawing} alt="draw" />
      </div>
      <div>
        <span className="contact-us-1">Contact us </span>
      </div>
      <div className="form-2">
        <VStack className='form-1' gap={8} >
          <Input placeholder='Full name' />
          <Input placeholder='Email address' />
          <Input placeholder='Subject' />
          <Textarea placeholder='Message' />
          <Button>Send mail</Button>
        </VStack>
      </div>
    </>
  )
}

export default Contactus