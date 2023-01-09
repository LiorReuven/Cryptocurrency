import { Container, Flex, Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react'

const FourthBlock = ({coinDescription}) => {

  const blockColor = useColorModeValue('gray.200', 'gray.900');

  return (
    <Flex
    w={{ base: '100%', md: '100%' }}
    borderRadius={'10px'}
    mt={'2rem'}
    p={2}
    backgroundColor={blockColor}
    >
<Container >
    {coinDescription}
</Container>
  </Flex>
  )
}

export default FourthBlock