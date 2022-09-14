import { Text, Box, Image } from '@chakra-ui/react'
import Question from '../../assets/images/question.svg'
import Star from '../../assets/images/star.svg'
import React from 'react'

const MiddleComp = () => {
    return (
        <Box
            position={'absolute'}
            background={'#FEFEFE'}
            height={{
                base: '812px',
                sm: '461px'
            }}
            width={{
                base: '375px',
                sm: '310px'
            }}
            left={{
                base: '7573',
                sm: '31px'
            }}
            top={'175px'}
        >
            {/*  image */}
            <Image src={Question} alt='logo'
                position={'absolute'}
                width={{
                    base: '39px',
                    sm: '39px'
                }}
                height={{
                    base: '57.47px',
                    sm: '39px'
                }}
                left={{
                    base: '116px',
                    sm: '89px'
                }}
                top={{
                    base: '74px',
                    sm: '12px'
                }}
            />
            <Text
                position={'absolute'}
                width={{
                    base: '296px',
                    sm: '202px'
                }}
                top={{
                    base: '0',
                    sm: '51px'
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
            >Teetree Discussions
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
                    sm: '182.25px'
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
                    sm: '248.25px'
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
                    sm: '309.25px'
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
                    sm: '366.25px'
                }}
            />
            <Box
                position={'absolute'}
                height={{
                    base: '812px',
                    sm: '461px'
                }}
                width={{
                    base: '375px',
                    sm: '310px'
                }}
                left={{
                    base: '7573',
                    sm: '6px'
                }}

                top={'124px'}
            >
                <Text
                    position={'absolute'}
                    width={{
                        base: '296px',
                        sm: '246px'
                    }}
                    top={{
                        base: '0',
                        sm: '52px'
                    }}
                    height={{
                        base: '20px',
                        sm: '52px'
                    }}
                    left={'22px'}
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
                >Changing my profile picture
                    on Teetree
                </Text>
                <Text
                    position={'absolute'}
                    width={{
                        base: '296px',
                        sm: '246px'
                    }}
                    top={{
                        base: '0',
                        sm: '120px'
                    }}
                    height={{
                        base: '20px',
                        sm: '52px'
                    }}
                    left={'22px'}
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
                >Adding a bio description to your Teetree account
                </Text>
                <Text
                    position={'absolute'}
                    width={{
                        base: '296px',
                        sm: '275px'
                    }}
                    top={{
                        base: '0',
                        sm: '180px'
                    }}
                    height={{
                        base: '20px',
                        sm: '48px'
                    }}
                    left={'22px'}
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
                >Becoming a community advocate on Teetree
                </Text>
                <Text
                    position={'absolute'}
                    width={{
                        base: '296px',
                        sm: '282px'
                    }}
                    top={{
                        base: '0',
                        sm: '240px'
                    }}
                    height={{
                        base: '20px',
                        sm: '48px'
                    }}
                    left={'22px'}
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
                >Adding a new theme to my Teetree
                    background
                </Text>
                <Text
                    position={'absolute'}
                    width={{
                        base: '62px',
                        sm: '62px'
                    }}
                    top={{
                        base: '0',
                        sm: '313px'
                    }}
                    height={{
                        base: '20px',
                        sm: '24px'
                    }}
                    left={'0px'}
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
                        sm: '0px'
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
    )
}

export default MiddleComp