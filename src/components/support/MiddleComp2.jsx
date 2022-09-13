import { Text, Box, Flex, Image } from '@chakra-ui/react'
import Texticon from '../../assets/images/texticon.svg'
import Star from '../../assets/images/star.svg'
import React from 'react'

const MiddleComp2 = () => {
    return (
        <Flex>
            <Box
                position={'absolute'}
                background={'#FEFEFE'}
                height={{
                    base: '812px',
                    sm: '370px'
                }}
                width={{
                    base: '375px',
                    sm: '308px'
                }}
                left={{
                    base: '7573',
                    sm: '373px'
                }}
                top={'175px'}
            >
                {/*  image */}
                <Image src={Texticon} alt='logo'
                    position={'absolute'}
                    width={{
                        base: '39px',
                        sm: '41.4px'
                    }}
                    height={{
                        base: '57.47px',
                        sm: '50px'
                    }}
                    left={{
                        base: '116px',
                        sm: '138.17px'
                    }}
                    top={{
                        base: '74px',
                        sm: '-3px'
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
                        sm: '55px'
                    }}
                    height={{
                        base: '20px',
                        sm: '30px'
                    }}
                    left={'10px'}
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
                >Teetree User Guide
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
                        sm: '158px'
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
                        sm: '197px'
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
                        sm: '238px'
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
                        sm: '295px'
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
                            sm: '158px'
                        }}
                        height={{
                            base: '20px',
                            sm: '52px'
                        }}
                        left={'34px'}
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
                    >How to get started on Teetree
                    </Text>
                    <Text
                        position={'absolute'}
                        width={{
                            base: '296px',
                            sm: '246px'
                        }}
                        top={{
                            base: '0',
                            sm: '197px'
                        }}
                        height={{
                            base: '20px',
                            sm: '52px'
                        }}
                        left={'34px'}
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
                    >Sharing your Teetree link
                    </Text>
                    <Text
                        position={'absolute'}
                        width={{
                            base: '296px',
                            sm: '275px'
                        }}
                        top={{
                            base: '0',
                            sm: '235px'
                        }}
                        height={{
                            base: '20px',
                            sm: '48px'
                        }}
                        left={'34px'}
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
                    >Changing your Teetree email address
                    </Text>
                    <Text
                        position={'absolute'}
                        width={{
                            base: '296px',
                            sm: '282px'
                        }}
                        top={{
                            base: '0',
                            sm: '295px'
                        }}
                        height={{
                            base: '20px',
                            sm: '48px'
                        }}
                        left={'34px'}
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
                    >Be part of Teetree community
                    </Text>
                    <Text
                        position={'absolute'}
                        width={{
                            base: '62px',
                            sm: '62px'
                        }}
                        top={{
                            base: '0',
                            sm: '344px'
                        }}
                        height={{
                            base: '20px',
                            sm: '24px'
                        }}
                        left={'4px'}
                        fontFamily={'poppins'}
                        fontWeight={'600'}
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
                    >
                        More
                    </Text>
                    <Text
                        position={'absolute'}
                        width={{
                            base: '62px',
                            sm: '116px'
                        }}
                        top={{
                            base: '0',
                            sm: '106px'
                        }}
                        height={{
                            base: '20px',
                            sm: '22px'
                        }}
                        left={'12px'}
                        fontFamily={'poppins'}
                        fontWeight={'500'}
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
                    >
                        Most popular
                    </Text>
                </Box>

            </Box>




        </Flex>

    )
}

export default MiddleComp2