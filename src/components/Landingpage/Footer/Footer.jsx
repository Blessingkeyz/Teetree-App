import React from 'react'
import Logo from '../Footer/logo22.png'
import Facebok from '../Footer/Facebook.svg'
import Twiter from '../Footer/Twitter.svg'
import Maill from '../Footer/Mail.svg'
import Linked from '../Footer/Linkedin.svg'
import { Button, HStack, Input, Flex, Box, Image, FormControl, Text } from '@chakra-ui/react'
import SubmitSection from './SubmitSection'
import { NavLink } from 'react-router-dom'
const Footer = () => {
  return (
    <Box>
      <Box
        width={{
          base: '373px',
          sm: '1440px'
        }}
        height={{
          base: '328px',
          sm: '478px'
        }}
        position={'absolute'}
        left={{
          base: '0px',
          sm: '0px'
        }}
        top={{
          base: '2713px',
          sm: '3230px'
        }}
        backgroundColor='#150D1B'
      >
        <Image src={Logo} alt='logo'
          width={{
            base: '108px',
            sm: '383px'
          }}
          height={{
            base: '43.71px',
            sm: '155px'
          }}
          position={'absolute'}
          left={{
            base: '231px',
            sm: '89px'
          }}
          top={{
            base: '220px',
            sm: '37px'
          }}
        />

        {/* newsletter */}
        <Text
          display={{
            base: 'none',
            sm: 'yes'
          }}
          position={'absolute'}
          left={{
            base: '23px',
            sm: '120px'
          }}
          top={{
            base: '0px',
            sm: '345px'
          }}
          width={{
            base: '287px',
            sm: '107px'
          }}
          height={{
            base: '34px',
            sm: '88px'
          }}
          fontFamily={'poppins'}
          fontWeight={'500'}
          fontSize={'20px'}
          lineHeight={'30px'}
          textAlign={'center'}
          color={'#FFFFFF'}
        >
          Newsletter
        </Text>
        <Flex
          display={{
            base: 'none',
            sm: 'yes'
          }}
          flex={'none'}
          margin={'-8px 0px'}
          width={{
            base: '327px',
            sm: '481px'
          }}
          top={{
            base: '56px',
            sm: '373px'
          }}
          left={{
            base: '56px',
            sm: '120px'
          }}
          height={{
            base: '56px',
            sm: '93px'
          }}
          order={'1'}
          position={'absolute'}
          flexGrow={'0'}>
          {/* Email */}
          <FormControl >
            <Input
              position={'absolute'}
              background='#FFFFFF'
              alignItems={'center'}
              gap={'8px'}
              left={{
                base: '0.91%',
                sm: '0%'
              }}
              right={'0%'}
              top={{
                base: '42px',
                sm: '13.98%'
              }}
              bottom={{
                base: '63.64%',
                sm: '25.81%'
              }}
              width={{
                base: '327px',
                sm: '481px'
              }}
              height={'56px'} type={'email'}
              // ref={el => inputRef.current['email'] = el}
              required placeholder={'Email Address'}
            />
          </FormControl>

        </Flex>
        <SubmitSection />

        <NavLink to={'/login'}  >
          <Button
            position='absolute'
            width={{
              base: '114px',
              sm: '133px'
            }} color='#440376'
            height={{
              base: '46px',
              sm: '56px'
            }}
            border='1px solid #440376'
            left={{
              base: '19px',
              sm: '581px'
            }} fontFamily='Poppins'
            top={{
              base: '211px',
              sm: '259px'
            }}
            fontWeight={'500'}
            display='flex' borderRadius='10px'
            padding={{
              base: '20px 20px',
              sm: '20px 20px'
            }}
            backgroundColor='#FEFEFE'
          >Login
          </Button>
        </NavLink>

        <NavLink to={'/signup'}  >
          <Button

            position='absolute'
            width={{
              base: '114px',
              sm: '180px'
            }} color='#F8F8F8'
            height={{
              base: '46px',
              sm: '56px'
            }}
            backgroundColor='#440376'
            borderRadius='10px'
            left={{
              base: '19px',
              sm: '725px'
            }}
            top={{
              base: '149px',
              sm: '259px'
            }} display='flex'
            padding='20px 20px'
          >Get Started
          </Button>
        </NavLink>

        {/* Links Section */}
        <Box
          width={{
            base: '337px',
            sm: '754px'
          }}
          height={{
            base: '85px',
            sm: '191px'
          }}
          position={'absolute'}
          left={{
            base: '18px',
            sm: '581px'
          }}
          top={{
            base: '36px',
            sm: '89px'
          }}
        >
          <Box
            width={{
              base: '54px',
              sm: '121px'
            }}
            height={{
              base: '17px',
              sm: '132px'
            }}
            position={'absolute'}
            left={{
              base: '0px',
              sm: '0px'
            }}
            top={{
              base: '0px',
              sm: '0px'
            }}
          >
            <Text
              position={'absolute'}
              left={{
                base: '0px',
                sm: '0px'
              }}
              top={{
                base: '0px',
                sm: '0px'
              }}
              width={{
                base: '54px',
                sm: '121px'
              }}
              height={{
                base: '17px',
                sm: '36px'
              }}
              fontFamily={'poppins'}
              fontWeight={'500'}
              fontSize={{
                base: '10.68px',
                sm: '24px'
              }}
              lineHeight={{
                base: '16px',
                sm: '36px'
              }}
              color={'#FFFFFF'}
            >
              Company
            </Text>
          </Box>
          <Box
            width={{
              base: '40px',
              sm: '89px'
            }}
            height={{
              base: '33.2px',
              sm: '76px'
            }}
            position={'absolute'}
            left={{
              base: '0px',
              sm: '0px'
            }}
            top={{
              base: '26px',
              sm: '56px'
            }}
          >
            <Text
              position={'absolute'}
              left={{
                base: '0px',
                sm: '0px'
              }}
              top={{
                base: '0px',
                sm: '0px'
              }}
              width={{
                base: '40px',
                sm: '89px'
              }}
              height={{
                base: '13px',
                sm: '30px'
              }}
              fontFamily={'poppins'}
              fontWeight={'400'}
              fontSize={{
                base: '8.9px',
                sm: '20px'
              }}
              lineHeight={{
                base: '13px',
                sm: '30px'
              }}
              color={'#FFFFFF'}
            >
              About us
            </Text>
            <Text
              position={'absolute'}
              left={{
                base: '0px',
                sm: '0px'
              }}
              top={{
                base: '20.12px',
                sm: '46px'
              }}
              width={{
                base: '20px',
                sm: '44px'
              }}
              height={{
                base: '13px',
                sm: '30px'
              }}
              fontFamily={'poppins'}
              fontWeight={'400'}
              fontSize={{
                base: '8.9px',
                sm: '20px'
              }}
              lineHeight={{
                base: '13px',
                sm: '30px'
              }}
              color={'#FFFFFF'}
            >
              Blog
            </Text>
          </Box>

          <Box
            width={{
              base: '86px',
              sm: '121px'
            }}
            height={{
              base: '62.58px',
              sm: '132px'
            }}
            position={'absolute'}
            left={{
              base: '74.32px',
              sm: '167px'
            }}
            top={{
              base: '0px',
              sm: '0px'
            }}
          >
            <Text
              position={'absolute'}
              left={{
                base: '0px',
                sm: '0px'
              }}
              top={{
                base: '0px',
                sm: '0px'
              }}
              width={{
                base: '47px',
                sm: '121px'
              }}
              height={{
                base: '17px',
                sm: '36px'
              }}
              fontFamily={'poppins'}
              fontWeight={'500'}
              fontSize={{ base: '10.68', sm: '24px' }}
              lineHeight={{ base: '16.02px', sm: '36px' }}
              color={'#FFFFFF'}
            >
              Features
            </Text>
          </Box>
          <Box
            width={{
              base: '86px',
              sm: '89px'
            }}
            height={{
              base: '40.24px',
              sm: '76px'
            }}
            position={'absolute'}
            left={{
              base: '74.32px',
              sm: '175px'
            }}
            top={{
              base: '25.9px',
              sm: '56px'
            }}
          >
            <Text
              position={'absolute'}
              left={{
                base: '0px',
                sm: '0px'
              }}
              top={{
                base: '0px',
                sm: '0px'
              }}
              width={{
                base: '86px',
                sm: '192px'
              }}
              height={{
                base: '13px',
                sm: '30px'
              }}
              lineHeight={{ base: '13.35px', sm: '30px' }}
              fontSize={{ base: '8.9px', sm: '20px' }}
              fontFamily={'poppins'}
              fontWeight={'400'}
              color={'#FFFFFF'}
            >
              API Documentation
            </Text>
            <Text
              position={'absolute'}
              left={{
                base: '0px',
                sm: '0px'
              }}
              top={{
                base: '23.68px',
                sm: '46px'
              }}
              width={{
                base: '90px',
                sm: '167px'
              }}
              height={{
                base: '13px',
                sm: '30px'
              }}
              lineHeight={{ base: '13.35px', sm: '30px' }}
              fontSize={{ base: '8.9px', sm: '20px' }}
              fontFamily={'poppins'}
              fontWeight={'400'}
              color={'#FFFFFF'}
            >
              Teetree Stations
            </Text>
          </Box>

          <Box
            width={{
              base: '85px',
              sm: '121px'
            }}
            height={{
              base: '85px',
              sm: '132px'
            }}
            position={'absolute'}
            left={{
              base: '178.8px',
              sm: '399px'
            }}
            top={{
              base: '0px',
              sm: '0px'
            }}
          >
            <Text
              position={'absolute'}
              left={{
                base: '0px',
                sm: '0px'
              }}
              top={{
                base: '0px',
                sm: '0px'
              }}
              width={{
                base: '56px',
                sm: '130px'
              }}
              height={{
                base: '17px',
                sm: '36px'
              }}
              fontFamily={'poppins'}
              fontWeight={'500'}
              fontSize={{ base: '10.68px', sm: '24px' }}
              lineHeight={{ base: '16.02px', sm: '36px' }}
              color={'#FFFFFF'}
            >
              Resources
            </Text>
          </Box>
          <Box
            width={{
              base: '92px',
              sm: '89px'
            }}
            height={{
              base: '53.24px',
              sm: '76px'
            }}
            position={'absolute'}
            left={{
              base: '178.8px',
              sm: '399px'
            }}
            top={{
              base: '25.9px',
              sm: '56px'
            }}
          >
            <Text
              position={'absolute'}
              left={{
                base: '0px',
                sm: '0px'
              }}
              top={{
                base: '0px',
                sm: '0px'
              }}
              width={{
                base: '49px',
                sm: '120px'
              }}
              height={{
                base: '13px',
                sm: '30px'
              }}
              fontFamily={'poppins'}
              fontWeight={'400'}
              fontSize={{ base: '8.9px', sm: '20px' }}
              lineHeight={{ base: '13.35px', sm: '30px' }}
              color={'#FFFFFF'}
            >
              Contact us
            </Text>
            <Text
              position={'absolute'}
              left={{
                base: '0px',
                sm: '0px'
              }}
              top={{
                base: '20.12px',
                sm: '46px'
              }}
              width={{
                base: '71px',
                sm: '120px'
              }}
              height={{
                base: '13px',
                sm: '30px'
              }}
              fontFamily={'poppins'}
              fontWeight={'400'}
              fontSize={{ base: '8.9px', sm: '20px' }}
              lineHeight={{ base: '13.35px', sm: '30px' }}
              color={'#FFFFFF'}
            >
              Help Center
            </Text>
            <Text
              position={'absolute'}
              left={{
                base: '0px',
                sm: '0px'
              }}
              top={{
                base: '40.24px',
                sm: '92px'
              }}
              width={{
                base: '92px',
                sm: '205px'
              }}
              height={{
                base: '13px',
                sm: '30px'
              }}
              fontFamily={'poppins'}
              fontWeight={'400'}
              fontSize={{ base: '8.9px', sm: '20px' }}
              lineHeight={{ base: '13.35px', sm: '30px' }}
              color={'#FFFFFF'}
            >
              Security and privacy
            </Text>
          </Box>

          <Box
            width={{
              base: '55.18px',
              sm: '121px'
            }}
            height={{
              base: '61.41px',
              sm: '132px'
            }}
            position={'absolute'}
            left={{
              base: '281.6px',
              sm: '630px'
            }}
            top={{
              base: '0px',
              sm: '0px'
            }}
          >
            <Text
              position={'absolute'}
              left={{
                base: '0px',
                sm: '0px'
              }}
              top={{
                base: '0px',
                sm: '0px'
              }}
              width={{
                base: '29px',
                sm: '121px'
              }}
              height={{
                base: '17px',
                sm: '36px'
              }}
              fontFamily={'poppins'}
              fontWeight={'500'}
              fontSize={{ base: '10.68px', sm: '24px' }}
              lineHeight={{ base: '16px', sm: '36px' }}
              color={'#FFFFFF'}
            >
              Legal
            </Text>
          </Box>
          <Box
            width={{
              base: '61px',
              sm: '89px'
            }}
            height={{
              base: '33.12px',
              sm: '76px'
            }}
            position={'absolute'}
            left={{
              base: '281.6px',
              sm: '630px'
            }}
            top={{
              base: '25.9px',
              sm: '56px'
            }}
          >
            <Text
              position={'absolute'}
              left={{
                base: '0px',
                sm: '0px'
              }}
              top={{
                base: '0px',
                sm: '0px'
              }}
              width={{
                base: '58px',
                sm: '192px'
              }}
              height={{
                base: '13px',
                sm: '30px'
              }}
              fontFamily={'poppins'}
              fontWeight={'400'}
              fontSize={{ base: '8.9px', sm: '20px' }}
              lineHeight={{ base: '13.35px', sm: '30px' }}
              color={'#FFFFFF'}
            >
              Terms of Use
            </Text>
            <Text
              position={'absolute'}
              left={{
                base: '0px',
                sm: '0px'
              }}
              top={{
                base: '20.12px',
                sm: '46px'
              }}
              width={{
                base: '61px',
                sm: '136px'
              }}
              height={{
                base: '13px',
                sm: '30px'
              }}
              fontFamily={'poppins'}
              fontWeight={'400'}
              fontSize={{ base: '8.9px', sm: '20px' }}
              lineHeight={{ base: '13.35px', sm: '30px' }}
              color={'#FFFFFF'}
            >
              Privacy Policy
            </Text>
          </Box>

        </Box>

        {/* social icons */}
        <Box
          width={{
            base: '130px',
            sm: '216px'
          }}
          height={{
            base: '46.8px',
            sm: '86px'
          }}
          position={'absolute'}
          left={{
            base: '231px',
            sm: '1103px'
          }}
          top={{
            base: '146px',
            sm: '346px'
          }}>
          <Text
            position={'absolute'}
            left={{
              base: '1.63px',
              sm: '3px'
            }}
            top={{
              base: '0px',
              sm: '0px'
            }}
            width={{
              base: '50px',
              sm: '91px'
            }}
            height={{
              base: '16px',
              sm: '30px'
            }}
            fontFamily={'poppins'}
            fontWeight={'400'}
            fontSize={{ base: '10.86px', sm: '20px' }}
            lineHeight={{
              base: '16px',
              sm: '30px'
            }}
            textAlign={'center'}
            color={'#FFFFFF'}
          >
            Follow us
          </Text>
          <Image src={Facebok} alt='logo'
            width={{
              base: '26.06px',
              sm: '48px'
            }}
            height={{
              base: '26.06px',
              sm: '48px'
            }}
            position={'absolute'}
            left={{
              base: '0px',
              sm: '0px'
            }}
            top={{
              base: '20.63px',
              sm: '37px'
            }}
          />
          <Image src={Twiter} alt='logo'
            width={{
              base: '26.06px',
              sm: '48px'
            }}
            height={{
              base: '26.06px',
              sm: '48px'
            }}
            position={'absolute'}
            left={{
              base: '30.4px',
              sm: '56px'
            }}
            top={{
              base: '20.63px',
              sm: '37px'
            }}
          />
          <Image src={Linked} alt='logo'
            width={{
              base: '26.06px',
              sm: '48px'
            }}
            height={{
              base: '26.06px',
              sm: '48px'
            }}
            position={'absolute'}
            left={{
              base: '60.8px',
              sm: '112px'
            }}
            top={{
              base: '20.63px',
              sm: '37px'
            }}
          />
          <Image src={Maill} alt='logo'
            width={{
              base: '26.06px',
              sm: '48px'
            }}
            height={{
              base: '26.06px',
              sm: '48px'
            }}
            position={'absolute'}
            left={{
              base: '91.2px',
              sm: '168px'
            }}
            top={{
              base: '20.63px',
              sm: '37px'
            }}
          />


        </Box>

      </Box>

    </Box >
  )
}

export default Footer