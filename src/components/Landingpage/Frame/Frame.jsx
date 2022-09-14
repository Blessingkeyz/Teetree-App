import React from 'react'
import './Frame.css'
import ellipse5 from '../Frame/ellipse5.png'
import ellipse6 from '../Frame/ellipse6.png'
import ellipse7 from '../Frame/ellipse7.png'
import { Box, Flex } from '@chakra-ui/react'

const Frame = () => {
  return (
    <>

      <div style={{
        boxSizing: 'border-box',
        position: 'absolute',
        width: '1440px',
        height: '908.87px',
        top: '2322px',
        background: 'rgba(193, 171, 209, 0.23)',
        backdropFilter: 'blur(17.3886px)',
      }}>
        <div className="peosay-1" >

          <span>What people say about us</span>
        </div>
      </div>
      <div className="peosay-2">
        <span> See what our clients say about us. This Means alot to us and we plan to never<br></br>
          stop at nothing; but to do more with great people.</span>
      </div>
      <div>
        <span className="frame-1"></span>
        <span className="oslo-adiana-1">Adiana Oslo</span>
        <span className="oslo-tl-1">@Oslo.tl</span>
        <span className="frist-frame-1">
          Text Free is an application made by<br></br> Pinger that allows users to text and
          call<br></br> over the internet for free or for a price.<br></br> The application runs on
          iOS, Android,<br></br> Microsoft Windows and Macintosh<br></br> devices.
        </span>
        <div>
          <img className="first-img-1" src={ellipse5} />
        </div>
      </div>
      <div>
        <span className="frame-2"></span>
        <span className="Jaiye-Tella-1">Jaiye Tella </span>
        <span className="jella-tl-1">@jella</span>
        <span className="second-frame-1">
          Text Free is an application made by<br></br>
          Pinger that allows users to text and<br></br>call over the internet for free or for a<br></br>
          price. The application runs on iOS,<br></br>
          Android, Microsoft Windows and<br></br> Macintosh devices.
        </span>
        <div>
          <img className="second-img-2" src={ellipse6} />
        </div>
      </div>
      <div>
        <span className="frame-3"></span>
        <span className="Adriane-Mane-1">Adriane Mane</span>
        <span className="manadn-1">@man.adn</span>
        <span className="third-frame-1">
          Tee Free is an application- that allows<br></br>
          users to text and call over the internet<br></br>
          for free or for a price. The application<br></br> runs on iOS, Android,
          Microsoft<br></br> Windows and Macintosh devices.
        </span>
        <div>
          <img className="third-img-3" src={ellipse7} />
        </div>
      </div>
    </>
  )
}

export default Frame