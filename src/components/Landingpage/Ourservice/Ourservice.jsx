import React from 'react'
import { NavLink } from 'react-router-dom'
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
          Teetree gives you is an excellent way to customize your digital
          marketing campaigns. You can use different buttons for different
          purposes be it leading more traffic to your website, improving your SEO,
          or getting people to subscribe to your mailing list.
        </span>
      </div>
      <Flex>
        <HStack justifyContent={'center'}>

          <div >
            <img className="img-2" src={img2} />
          </div>
          <div >
            <img className="img-3" src={img3} />
          </div>
          <div >
            <img className="img-1" src={img1} />
          </div>
          <NavLink to={'/signup'}  >
            <Button
              fontSize={{
                base: '16px',
                sm: '20px'
              }}
              position='absolute'
              width={{
                base: '280px',
                sm: '381px'
              }} color='#F8F8F8'
              height={{
                base: '55px',
                sm: '67px'
              }} backgroundColor='#440376'
              borderRadius='10px'
              left={{
                base: '48px',
                sm: '529px'
              }}
              top={{
                base: '1209px',
                sm: '1381px'
              }} display='flex'
              padding='20px 20px'
            >Get Started
            </Button>
          </NavLink>
        </HStack>
      </Flex>
    </>
  )
}

export default Ourservice