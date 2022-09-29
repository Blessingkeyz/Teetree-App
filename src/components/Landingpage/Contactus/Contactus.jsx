import React, { useRef, useState } from 'react'
import { Box, Image } from '@chakra-ui/react'
import logo from '../Contactus/logo.png'
import drawing from '../Contactus/design.png'
import './Contactus.css'
import InputFields from './InputFields'
import SubmitSection from './SubmitSection'

const Contactus = () => {
  const [messageData, setMessageData] = useState({});
  const inputRef = useRef({});

  //initialValue
  const handleChange = () => {
    const values = {
      fullname: inputRef.current['fullname'].value,
      email: inputRef.current['email'].value,
      subject: inputRef.current['subject'].value,
      messagetext: inputRef.current['messagetext'].value
    };
    setMessageData(values);
  };
  console.log(messageData);
  const handleSubmit = (e) => {
    e.preventDefault();
    // field clearer function
    const clearer = {
      fullname: inputRef.current['fullname'].value = '',
      email: inputRef.current['email'].value = '',
      subject: inputRef.current['subject'].value = '',
      messagetext: inputRef.current['messagetext'].value = ''
    };

    //session storage
    const message = JSON.stringify(messageData);
    console.log(message);
    !messageData.fullname &&
      !messageData.email &&
      !messageData.subject ? alert('PLEASE FILL ALL FIELDS')
      : [alert('MAIL SENT'), clearer
      ];
  };



  return (
    <Box
      as={'form'}
      onSubmit={handleSubmit}
    >
      <Box
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
        <Image
          display={{
            base: 'none',
            sm: 'yes'
          }}
          src={drawing} alt="draw" />
      </div>
      <div>
        <span className="contact-us-1">Contact us </span>
      </div>
      <InputFields
        inputRef={inputRef}
      />
      <SubmitSection
        handleChange={handleChange}
      />
    </Box >
  )
}

export default Contactus