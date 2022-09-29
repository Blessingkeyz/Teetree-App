import React from 'react'
import { Flex, FormControl, Input, Textarea } from '@chakra-ui/react'
const InputFields = ({ inputRef }) => {

  return (

    <Flex
      flexDirection={'column'}
      position={'absolute'}
      padding={'0px'}
      alignItems={'center'}
      width={{
        base: '335px',
        sm: '480px'
      }}
      height={{
        base: '374.08px',
        sm: '536px'
      }}
      top={{
        base: '1592.7px',
        sm: '1635px'
      }}
      left={{
        base: '20px',
        sm: '832px'
      }}

    >

      <Flex
        flex={'none'}
        margin={'-8px 0px'}
        width={{
          base: '327px',
          sm: '481px'
        }}
        height={{
          base: '56px',
          sm: '93px'
        }}
        order={'0'}
        flexGrow={'0'}
      >
        {/* Full Name */}
        <FormControl>
          <Input
            position={'absolute'}
            alignItems={'center'}
            gap={'8px'}
            left={{
              base: '0.91%',
              sm: '0%'
            }}
            right={'0%'}
            top={{
              base: '12.83%',
              sm: '13.98%'
            }}
            bottom={{
              base: '77.18%',
              sm: '25.81%'
            }}
            width={{
              base: '327px',
              sm: '481px'
            }}
            height={'56px'}
            type={'text'}
            ref={el => inputRef.current['fullname'] = el}
            required placeholder={'Full Name'}
          />
        </FormControl>
      </Flex>

      <Flex
        flex={'none'}
        margin={'-8px 0px'}
        width={{
          base: '327px',
          sm: '481px'
        }}
        height={{
          base: '56px',
          sm: '93px'
        }}
        order={'1'}
        flexGrow={'0'}>
        {/* Email */}
        <FormControl >
          <Input
            position={'absolute'}
            alignItems={'center'}
            gap={'8px'}
            left={{
              base: '0.91%',
              sm: '0%'
            }}
            right={'0%'}
            top={{
              base: '42px',
              sm: '18%'
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
            ref={el => inputRef.current['email'] = el}
            required placeholder={'Email Address'}
          />
        </FormControl>

      </Flex>

      <Flex
        flex={'none'}
        width={{
          base: '327px',
          sm: '481px'
        }}
        height={{
          base: '56px',
          sm: '93px'
        }}
        order={'2'}
        flexGrow={'0'}>

        {/* Subject */}
        <FormControl>
          <Input
            alignItems={'center'}
            padding={'16px 90px 16px 16px'}
            gap={'20px'}
            position={'absolute'}
            left={{
              base: '3px',
              sm: '0%'
            }}
            right={'0%'}
            top={{
              base: '66px',
              sm: '13.98%'
            }}
            bottom={'25.81%'}
            width={{
              base: '327px',
              sm: '481px'
            }}
            height={'56px'}
            type={'text'}
            ref={el => inputRef.current['subject'] = el}
            required placeholder={'Subject'}
          />
        </FormControl>

      </Flex>
      <Flex
        flex={'none'}
        width={{
          base: '327px',
          sm: '481px'
        }}
        height={{
          base: '56px',
          sm: '93px'
        }}
        order={'2'}
        flexGrow={'0'}>

        {/* Message */}
        <FormControl>
          <Textarea
            alignItems={'flexStart'}
            padding={'16px, 0px, 16px, 16px'}
            gap={'8px'}
            position={'absolute'}
            left={{
              base: '3px',
              sm: '0%'
            }}
            right={'0%'}
            top={{
              base: '100px',
              sm: '13.98%'
            }}
            bottom={'25.81%'}
            width={{
              base: '327px',
              sm: '480px'
            }}
            height={'133.08px'}
            type={'text'}
            ref={el => inputRef.current['messagetext'] = el}
            required placeholder={'Message'}
          ></Textarea>
        </FormControl>

      </Flex>

    </Flex>
  )
}

export default InputFields