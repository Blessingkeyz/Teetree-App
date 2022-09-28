import React from 'react'
import Suffix from './Suffix.png'
import './Abtus.css'
import { Button } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
// import '@fontsource/poppins'

const Aboutus = () => {
  return (
    <>
      <div>
        <span className="you-1">All you need is<br></br> just one link!!!</span>
      </div>
      <div>
        <span className="house-up-1">
          Teetree is all you need,very easy to set up, customize and generate a
          link that will house all other of your important links
        </span>
        <NavLink to={'/login'}  >
          <Button
            position='absolute'
            width={{
              base: '280px',
              sm: '133px'
            }} color='#440376'
            height='56px' border='1px solid #440376'
            left={{
              base: '48px',
              sm: '121px'
            }} fontFamily='Poppins'
            top={{
              base: '567px',
              sm: '444px'
            }}
            fontWeight={'500'}
            display='flex' bordeRadius='10px'
            padding={{
              base: '16px 120px',
              sm: '20px 20px'
            }} backgroundColor='#FEFEFE'
          >Login
          </Button>
        </NavLink>

        <NavLink to={'/signup'}  >
          <Button

            position='absolute'
            width={{
              base: '280px',
              sm: '133px'
            }} color='#F8F8F8'
            height='56px' backgroundColor='#440376'
            bordeRadius='10px'
            left={{
              base: '48px',
              sm: '265px'
            }}
            top={{
              base: '497px',
              sm: '444px'
            }} display='flex'
            padding='20px 20px'
          >Get Started
          </Button>
        </NavLink>
        <div className="abt-1">
          <img src={Suffix} alt="Aboutus" />
        </div>
      </div>
    </>
  )
}

export default Aboutus