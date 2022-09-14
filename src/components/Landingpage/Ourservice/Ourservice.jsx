import React from 'react'
import { Flex, HStack, Button } from '@chakra-ui/react';
import './Service.css'
import img2 from './img2.png'
import img3 from './img3.png'
import img1 from './img1.png'

const Ourservice = () => {
  return (
    <>
      <div>
        <span className="our-services-1">Our Services</span>
      </div>
      <div>
        <span className="bio-campaigns-1">
          We Help you create a link that will house your important link in bio
          Teetree gives you is an excellent<br></br> way to customize your digital
          marketing campaigns. You can use different buttons for different<br></br>
          purposes be it leading more traffic to your website, improving your SEO,
          or getting people to<br></br> subscribe to your mailing list.
        </span>
      </div>
      <Flex>
        <HStack justifyContent={'center'}>

          <div className="img-2">
            <img src={img2} style={{ height: '364px', width: '303px' }} />
          </div>
          <div className="img-3">
            <img src={img3} />
          </div>
          <div className="img-1">
            <img src={img1} style={{ height: '364px', width: '303px' }} />
          </div>
          {/* <Button>Get Started</Button> */}
        </HStack>
      </Flex>
    </>
  )
}

export default Ourservice