import React from 'react'
import './Frame.css'
import ellipse5 from '../Frame/ellipse5.png'
import ellipse6 from '../Frame/ellipse6.png'
import ellipse7 from '../Frame/ellipse7.png'
import { Box, Flex } from '@chakra-ui/react'

const Frame = () => {
  return (
    <div className='framee'>

      <div className='drop'>
        <div className="peosay-1" >

          <span>What people say about us</span>
        </div>
      </div>
      <div className="peosay-2">
        <span> See what our clients say about us. This Means alot to us and we plan to never<br></br>
          stop at nothing; but to do more with great people.</span>
      </div>
      <div className="frame-1">
        <span className="oslo-adiana-1">Adiana Oslo</span>
        <span className="oslo-tl-1">@Oslo.tl</span>
        <span className="frist-frame-1">
          Nice shortlink BIO that i've used.
          Keep up the good work!
        </span>
        <div>
          <img className="first-img-1" src={ellipse5} />
        </div>
      </div>
      <div className="frame-2">
        <span className="Jaiye-Tella-1">Jaiye Tella </span>
        <span className="jella-tl-1">@jella</span>
        <span className="second-frame-1">
          Wow Love it. So much sexier than LinkTree as an output too. It was a little touchy at first but they have smoothed the tech out and it's super smooth now. Fantastic tool for one url, multiple destinations
        </span>
        <div>
          <img className="second-img-2" src={ellipse6} />
        </div>
      </div>
      <div className="frame-3">
        <span className="Adriane-Mane-1">Adriane Mane</span>
        <span className="manadn-1">@man.adn</span>
        <span className="third-frame-1">
          It's easy to use and very complete. Like a little website where you can show all your work and social media (even FAQ). I'm so happy with this service (and I used other services) 100% recommended!
        </span>
        <div>
          <img className="third-img-3" src={ellipse7} />
        </div>
      </div>
    </div>
  )
}

export default Frame