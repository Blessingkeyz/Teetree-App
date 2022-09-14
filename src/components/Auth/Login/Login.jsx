import { Box } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "@fontsource/poppins"
import Logobox from './Logobox';
import FormBox from './FormBox';

const Login = () => {

    //Hooks
    const navigate = useNavigate();


    // setting states
    const [userData, setUserData] = useState({});
    const [userInfo, setUserInfo] = useState({});
    const [formValid, setFormValid] = useState(false);
    const inputRef = useRef({});

    console.log(userData);

    //initialValue
    const handleChange = () => {
        const values = {
            email: inputRef.current['email'].value,
            password: inputRef.current['password'].value,
        };
        setUserData(values);
    };

    //useEffect for focus
    useEffect(() => {
        inputRef.current['email'].focus()
    }, []);
    //useEffect for validation
    useEffect(() => {
        if (
            !userData.email &&
            !userData.password
        ) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [
        userData.email,
        userData.password
    ])

    // handlers

    const handleSubmit = (e) => {
        e.preventDefault();
        //validating for userDetails in session storage
        userInfo?.email === userData.email &&
            userInfo?.password === userData.password
            ? [sessionStorage.setItem(userInfo.fullname, userData.email), alert('SUCCESS!    REDIRECTING TO YOUR DASHBOARD'), navigate('/dashboard')]
            : alert('INCORRECT DETAILS,  PLEASE CHECK AND TRY AGAIN');
    };
    // useEffect
    useEffect(() => {
        const registerData = sessionStorage.getItem('user');
        const userInfoparser = JSON.parse(registerData);
        setUserInfo(userInfoparser);
    }, [])

    return (
        <Box
            background={'#FEFEFE'}
            height={{
                base: '812px',
                sm: '1024px'
            }}
            width={{
                base: '375px',
                sm: '1440px'
            }}
            left={{
                base: '8007px',
                sm: '-1511px'
            }}
            top={'208px'}
            border-radius={'0px'}
        >
            {/* logo */}
            <Logobox />

            <FormBox
                handleChange={handleChange}
                formValid={formValid}
                handleSubmit={handleSubmit}
                inputRef={inputRef}
            />
        </Box>
    )
}

export default Login