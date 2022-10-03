import { Box, Button, FormControl } from '@chakra-ui/react'
import React from 'react'
import { memo } from 'react'

const SubmitSection = memo(({ handleChange }) => {
    return (
        <Box
            flexDirection={'row'}
            position={'absolute'}
            padding={'0px'}
            alignItems={'center'}
            width={{
                base: '280px',
                sm: '180px'
            }}
            height={{
                base: '55px',
                sm: '56px'
            }}
            top={{
                base: '1980px',
                sm: '377px'
            }}
            left={{
                base: '48px',
                sm: '617px'
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
                        sm: '180px'
                    }}
                    height={{
                        base: '55px',
                        sm: '56px'
                    }}
                    borderRadius={'10px'}
                    padding={'20px 20px'}
                    color={'#F8F8F8'}
                    fontFamily={'poppins'}
                    fontStyle={'normal'}
                    fontWeight={'400'}
                    fontSize={{
                        base: '16px',
                        sm: '20px'
                    }}
                    lineHeight={'36px'}
                    bgColor={'#C1ABD1'}
                    type={'submit'}
                    onClick={handleChange}
                >
                    Subscribe
                </Button>
            </FormControl>
        </Box>
    )
}
)
export default SubmitSection