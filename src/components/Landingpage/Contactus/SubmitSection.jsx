import { Box, Button, FormControl } from '@chakra-ui/react'
import React from 'react'
import { memo } from 'react'

const SubmitSection = memo(({ handleChange }) => {
    return (
        <Box
            flexDirection={'column'}
            position={'absolute'}
            padding={'0px'}
            alignItems={'center'}
            width={{
                base: '280px',
                sm: '486px'
            }}
            height={{
                base: '55px',
                sm: '222px'
            }}
            top={{
                base: '1980px',
                sm: '2100px'
            }}
            left={{
                base: '48px',
                sm: '872px'
            }}
            gap={{
                base: '50px',
                sm: '26px'
            }}
        >
            {/* Submit */}
            <FormControl>
                <Button
                    width={{
                        base: '280px',
                        sm: '381px'
                    }}
                    height={{
                        base: '55px',
                        sm: '76px'
                    }}
                    borderRadius={'10px'}
                    padding={'16px 120px'}
                    color={'#F8F8F8'}
                    fontFamily={'poppins'}
                    fontStyle={'normal'}
                    fontWeight={'500'}
                    fontSize={{
                        base: '16px',
                        sm: '20px'
                    }}
                    lineHeight={'36px'}
                    bgColor={'#440376'}
                    type={'submit'}
                    onClick={handleChange}
                >
                    Send mail
                </Button>
            </FormControl>
        </Box>
    )
}
)
export default SubmitSection