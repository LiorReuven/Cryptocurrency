import { Container, Divider, Flex, useColorModeValue } from '@chakra-ui/react';
import React from 'react'
import  DOMPurify from 'isomorphic-dompurify';
import { InfoIcon } from '@chakra-ui/icons';

const FourthBlock = ({coinDescription}) => {
  const blockColor = useColorModeValue('gray.200', 'gray.900');

  return (
    <Flex
    w={{ base: '100%', md: '100%' }}
    borderRadius={'10px'}
    mt={'2rem'}
    p={2}
    backgroundColor={blockColor}
    direction={'column'}
    alignItems={'center'}
  >
    <InfoIcon boxSize={10} my={'1rem'} color={'orange'}/>
    <Divider mb={'1rem'}/>
<Container whiteSpace={'pre-wrap'} maxW='90%' dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(coinDescription ? coinDescription : '')}}>
</Container>
  </Flex>
  )
}

export default FourthBlock