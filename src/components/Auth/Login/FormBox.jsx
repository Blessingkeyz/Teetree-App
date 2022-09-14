import { Box } from '@chakra-ui/react'
import React from 'react'
import ForgotPassword from './ForgotPassword'
import GoogleSection from './GoogleSection'
import HaveAccount from './HaveAccount'
import HeadingSection from './HeadingSection'
import InputFields from './InputFields'
import SubmitSection from './SubmitSection'

const FormBox = ({ inputRef, handleChange, handleSubmit, formValid }) => {
    return (
        <Box
            display={'flex'}
            width={{
                base: '330px',
                sm: '834px'
            }}
            height={{
                base: '561px',
                sm: '678px'
            }}
            bgColor={'#FEFEFE'}
            border={{
                base: 'none',
                sm: '1px solid #440376'
            }}
            borderRadius={'20px'}
            position={'absolute'}
            left={{
                base: '21px',
                sm: '303px'
            }}
            top={{
                base: '190px',
                sm: '187px'
            }}
            boxSizing={'border-box'}
            as={'form'}
            onSubmit={handleSubmit}
        >

            {/* Heading */}
            <HeadingSection />

            {/* inputs */}
            <InputFields
                inputRef={inputRef}
            />

            {/* forgot password */}
            <ForgotPassword />

            {/* submit */}
            <SubmitSection
                handleChange={handleChange}
                formValid={formValid}
            />

            {/* Don't have an account */}
            <HaveAccount />

            {/* google */}
            <GoogleSection />

        </Box >
    )
}

export default FormBox