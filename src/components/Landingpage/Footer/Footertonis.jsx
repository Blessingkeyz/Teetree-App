import React from 'react'
import './Footer.css'
import footlogo from '../Footer/logo22.png'
import { Button, HStack, Input, Flex, Box } from '@chakra-ui/react'
const Footertonis = () => {
  return (
    <Box>
      <div className='footer'>
        <div>
          <span className="footdown-1">
            <img src={footlogo} alt="footlogo" />
          </span>
        </div>
        <div className="topframe-1">

          <div className="footframe-1" style={{ flexDirection: 'column' }}>
            <div>
              <span className="company-1">Company</span>
            </div>

            <div className="compframe-1">
              <div>
                <span className="About-1">About us</span>
              </div>
              <div>
                <span className="blog-1">Blog</span>
              </div>
            </div>
          </div>
          {/* <div className="footframe-1" style={{ flexDirection: 'column' }}>
            <div>
              <span className="features-1">Features</span>
            </div>
            <div className="footframe-2">
              <div>
                <span className="api-1">API Documentations</span>
              </div>
              <div>
                <span className="tee-1">TeetreeStations</span>
              </div>
            </div>
          </div>
          <div className="footframe-1" style={{ flexDirection: 'column' }}>
            <div>
              <span className="res-1">Resources</span>
            </div>
            <div className="footframe-3">
              <div>
                <span className="conus-1">Contact us</span>
              </div>
              <div>
                <span className="help-1">Help center</span>
              </div>
              <div>
                <span className="secpri-1">Security and privacy</span>
              </div>
            </div>
          </div>
          <div className="footframe-1" style={{ flexDirection: 'column' }}>
            <div>
              <span className="company-1">Legal</span>
            </div>
            <div>
              <span className="About-1">Terms of Use</span>
            </div>
            <div>
              <span className="blog-1">Privacy Policy</span>
            </div>
          </div> */}
        </div>
      </div>

      <span className='news-1'>Newsletter</span>
      <Flex>
        <HStack>
          <span className='eadd-1'>
            <Input placeholder='Email address' />
          </span>
          <Button
            top={'3487px'}
            left={'617px'}
            bgColor={'pink01'}
          >Subscribe</Button>

        </HStack>
      </Flex>
    </Box>
  )
}

export default Footertonis