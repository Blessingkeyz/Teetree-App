import { Image, Box, Flex, Text } from '@chakra-ui/react'
import Speaker from '../../assets/images/speaker.svg'
import Resource from '../../assets/images/resource.svg'
import Star from '../../assets/images/star.svg'
import React from 'react'

const BottomComp = () => {
    return (
        <Flex>
            <Box
                position={'absolute'}
                background={'#FEFEFE'}
                height={{
                    base: '812px',
                    sm: '322px'
                }}
                width={{
                    base: '375px',
                    sm: '253px'
                }}
                left={{
                    base: '7573',
                    sm: '31px'
                }}
                top={'693px'}
            >
                {/*  image */}
                <Image src={Speaker} alt='logo'
                    position={'absolute'}
                    width={{
                        base: '39px',
                        sm: '52.54px'
                    }}
                    height={{
                        base: '57.47px',
                        sm: '50px'
                    }}
                    left={{
                        base: '116px',
                        sm: '73px'
                    }}
                    top={{
                        base: '74px',
                        sm: '0px'
                    }}
                />
                <Text
                    position={'absolute'}
                    width={{
                        base: '296px',
                        sm: '192px'
                    }}
                    top={{
                        base: '0',
                        sm: '52px'
                    }}
                    height={{
                        base: '20px',
                        sm: '30px'
                    }}
                    left={'27px'}
                    fontFamily={'poppins'}
                    fontWeight={'600'}
                    color={'#000000'}
                    fontSize={{
                        base: '13px',
                        sm: '20px'
                    }}
                    fontStyle={'normal'}
                    lineHeight={{
                        base: '19.5px',
                        sm: '30px'
                    }}
                >Announcements
                </Text>

                {/* Star images */}
                <Image src={Star} alt='logo'
                    position={'absolute'}
                    width={{
                        base: '39px',
                        sm: '24px'
                    }}
                    height={{
                        base: '57.47px',
                        sm: '24px'
                    }}
                    left={{
                        base: '0px',
                        sm: '1.25px'
                    }}
                    top={{
                        base: '74px',
                        sm: '103.25px'
                    }}
                />
                <Image src={Star} alt='logo'
                    position={'absolute'}
                    width={{
                        base: '39px',
                        sm: '24px'
                    }}
                    height={{
                        base: '57.47px',
                        sm: '24px'
                    }}
                    left={{
                        base: '0px',
                        sm: '1.25px'
                    }}
                    top={{
                        base: '74px',
                        sm: '152.25px'
                    }}
                />
                <Image src={Star} alt='logo'
                    position={'absolute'}
                    width={{
                        base: '39px',
                        sm: '24px'
                    }}
                    height={{
                        base: '57.47px',
                        sm: '24px'
                    }}
                    left={{
                        base: '0px',
                        sm: '1.25px'
                    }}
                    top={{
                        base: '74px',
                        sm: '247.25px'
                    }}
                />

                <Box>
                    <Text
                        position={'absolute'}
                        width={{
                            base: '296px',
                            sm: '246px'
                        }}
                        top={{
                            base: '0',
                            sm: '101px'
                        }}
                        height={{
                            base: '20px',
                            sm: '52px'
                        }}
                        left={'37px'}
                        fontFamily={'poppins'}
                        fontWeight={'400'}
                        color={'#2C2B2B'}
                        fontSize={{
                            base: '13px',
                            sm: '16px'
                        }}
                        fontStyle={'normal'}
                        lineHeight={{
                            base: '19.5px',
                            sm: '24px'
                        }}
                    >New landing page!
                    </Text>
                    <Text
                        position={'absolute'}
                        width={{
                            base: '296px',
                            sm: '216px'
                        }}
                        top={{
                            base: '0',
                            sm: '146px'
                        }}
                        height={{
                            base: '20px',
                            sm: '82px'
                        }}
                        left={'37px'}
                        fontFamily={'poppins'}
                        fontWeight={'400'}
                        color={'#2C2B2B'}
                        fontSize={{
                            base: '13px',
                            sm: '16px'
                        }}
                        fontStyle={'normal'}
                        lineHeight={{
                            base: '19.5px',
                            sm: '24px'
                        }}
                    >You can now add more than one email address to your Teetree
                    </Text>
                    <Text
                        position={'absolute'}
                        width={{
                            base: '296px',
                            sm: '216px'
                        }}
                        top={{
                            base: '0',
                            sm: '245px'
                        }}
                        height={{
                            base: '20px',
                            sm: '48px'
                        }}
                        left={'37px'}
                        fontFamily={'poppins'}
                        fontWeight={'400'}
                        color={'#2C2B2B'}
                        fontSize={{
                            base: '13px',
                            sm: '16px'
                        }}
                        fontStyle={'normal'}
                        lineHeight={{
                            base: '19.5px',
                            sm: '24px'
                        }}
                    >Get a referal link to invite your friends to Teetree
                    </Text>
                </Box>

            </Box>

            <Box
                position={'absolute'}
                background={'#FEFEFE'}
                height={{
                    base: '812px',
                    sm: '322px'
                }}
                width={{
                    base: '375px',
                    sm: '253px'
                }}
                left={{
                    base: '7573',
                    sm: '373px'
                }}
                top={'693px'}
            >
                {/*  image */}
                <Image src={Resource} alt='logo'
                    position={'absolute'}
                    width={{
                        base: '39px',
                        sm: '40px'
                    }}
                    height={{
                        base: '57.47px',
                        sm: '40px'
                    }}
                    left={{
                        base: '116px',
                        sm: '53px'
                    }}
                    top={{
                        base: '74px',
                        sm: '0px'
                    }}
                />
                <Text
                    position={'absolute'}
                    width={{
                        base: '296px',
                        sm: '192px'
                    }}
                    top={{
                        base: '0',
                        sm: '56px'
                    }}
                    height={{
                        base: '20px',
                        sm: '30px'
                    }}
                    left={'27px'}
                    fontFamily={'poppins'}
                    fontWeight={'600'}
                    color={'#000000'}
                    fontSize={{
                        base: '13px',
                        sm: '20px'
                    }}
                    fontStyle={'normal'}
                    lineHeight={{
                        base: '19.5px',
                        sm: '30px'
                    }}
                >Resources
                </Text>

                {/* Star images */}
                <Image src={Star} alt='logo'
                    position={'absolute'}
                    width={{
                        base: '39px',
                        sm: '24px'
                    }}
                    height={{
                        base: '57.47px',
                        sm: '24px'
                    }}
                    left={{
                        base: '0px',
                        sm: '1.25px'
                    }}
                    top={{
                        base: '74px',
                        sm: '111.25px'
                    }}
                />
                <Image src={Star} alt='logo'
                    position={'absolute'}
                    width={{
                        base: '39px',
                        sm: '24px'
                    }}
                    height={{
                        base: '57.47px',
                        sm: '24px'
                    }}
                    left={{
                        base: '0px',
                        sm: '1.25px'
                    }}
                    top={{
                        base: '74px',
                        sm: '159.25px'
                    }}
                />
                <Image src={Star} alt='logo'
                    position={'absolute'}
                    width={{
                        base: '39px',
                        sm: '24px'
                    }}
                    height={{
                        base: '57.47px',
                        sm: '24px'
                    }}
                    left={{
                        base: '0px',
                        sm: '1.25px'
                    }}
                    top={{
                        base: '74px',
                        sm: '201.25px'
                    }}
                />
                <Image src={Star} alt='logo'
                    position={'absolute'}
                    width={{
                        base: '39px',
                        sm: '24px'
                    }}
                    height={{
                        base: '57.47px',
                        sm: '24px'
                    }}
                    left={{
                        base: '0px',
                        sm: '1.25px'
                    }}
                    top={{
                        base: '74px',
                        sm: '234.25px'
                    }}
                />


                <Box>
                    <Text
                        position={'absolute'}
                        width={{
                            base: '296px',
                            sm: '246px'
                        }}
                        top={{
                            base: '0',
                            sm: '113px'
                        }}
                        height={{
                            base: '20px',
                            sm: '52px'
                        }}
                        left={'33px'}
                        fontFamily={'poppins'}
                        fontWeight={'400'}
                        color={'#2C2B2B'}
                        fontSize={{
                            base: '13px',
                            sm: '16px'
                        }}
                        fontStyle={'normal'}
                        lineHeight={{
                            base: '19.5px',
                            sm: '24px'
                        }}
                    >Report a link error
                    </Text>
                    <Text
                        position={'absolute'}
                        width={{
                            base: '296px',
                            sm: '216px'
                        }}
                        top={{
                            base: '0',
                            sm: '155px'
                        }}
                        height={{
                            base: '20px',
                            sm: '82px'
                        }}
                        left={'33px'}
                        fontFamily={'poppins'}
                        fontWeight={'400'}
                        color={'#2C2B2B'}
                        fontSize={{
                            base: '13px',
                            sm: '16px'
                        }}
                        fontStyle={'normal'}
                        lineHeight={{
                            base: '19.5px',
                            sm: '24px'
                        }}
                    >Glossary
                    </Text>
                    <Text
                        position={'absolute'}
                        width={{
                            base: '296px',
                            sm: '216px'
                        }}
                        top={{
                            base: '0',
                            sm: '198px'
                        }}
                        height={{
                            base: '20px',
                            sm: '82px'
                        }}
                        left={'33px'}
                        fontFamily={'poppins'}
                        fontWeight={'400'}
                        color={'#2C2B2B'}
                        fontSize={{
                            base: '13px',
                            sm: '16px'
                        }}
                        fontStyle={'normal'}
                        lineHeight={{
                            base: '19.5px',
                            sm: '24px'
                        }}
                    >Download the Teetree app
                    </Text>
                    <Text
                        position={'absolute'}
                        width={{
                            base: '296px',
                            sm: '216px'
                        }}
                        top={{
                            base: '0',
                            sm: '233px'
                        }}
                        height={{
                            base: '20px',
                            sm: '48px'
                        }}
                        left={'33px'}
                        fontFamily={'poppins'}
                        fontWeight={'400'}
                        color={'#2C2B2B'}
                        fontSize={{
                            base: '13px',
                            sm: '16px'
                        }}
                        fontStyle={'normal'}
                        lineHeight={{
                            base: '19.5px',
                            sm: '24px'
                        }}
                    >Contact us
                    </Text>
                </Box>

            </Box>
        </Flex>
    )
}

export default BottomComp