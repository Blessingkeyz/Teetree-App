import { Box, Button, FormControl } from '@chakra-ui/react'
import React from 'react'
import { memo } from 'react'

const SubmitSection = memo(({ handleChange, formValid }) => {
    console.log("render : submit");
    return (
        <Box
            flexDirection={'row'}
            position={'absolute'}
            padding={'0px'}
            alignItems={'center'}
            width={{
                base: '327px',
                sm: '486px'
            }}
            height={{
                base: '55px',
                sm: '222px'
            }}
            top={{
                base: '285px',
                sm: '375.5px'
            }}
            left={{
                base: '1px',
                sm: '174px'
            }}
            gap={{
                base: '50px',
                sm: '26px'
            }}
        >
            {/* Submit button */}
            <FormControl>
                <Button
                    width={{
                        base: '327px',
                        sm: '486px'
                    }}
                    height={{
                        base: '55px',
                        sm: '67px'
                    }}
                    borderRadius={'10px'}
                    padding={{
                        base: '16px 120px',
                        sm: '20px 200px'
                    }}
                    color={'#F8F8F8'}
                    fontFamily={'poppins'}
                    fontStyle={'normal'}
                    fontWeight={'500'}
                    fontSize={{
                        base: '16px',
                        sm: '24px'
                    }}
                    lineHeight={'36px'}
                    bgColor={formValid ? '#440376' : 'rgba(68, 3, 118, 0.8)'}
                    type={'submit'}
                    onClick={handleChange}
                >
                    Login
                </Button>
            </FormControl>
        </Box>
    )
}
)
export default SubmitSection