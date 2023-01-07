import {
  Button,
  Flex,
  HStack,
  useColorMode,
  IconButton,
  VStack,
  useColorModeValue,
  Slide
} from '@chakra-ui/react';
import { BsSun, BsMoonStarsFill } from 'react-icons/bs';
import React, { useState } from 'react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import Link from 'next/link';


const NavBar = () => {
  const colorModeValue = useColorModeValue('#edeeee', '#1b202c');



  let activeStyle = {
    background: '#417fcc',
    borderRadius: '5px',
    color:colorModeValue
  }

  return (
    <>
      <Flex
        display={['none', 'none', 'flex', 'flex']}
        as={'nav'}
        mx={'auto'}
        pt={'3rem'}
        w={'100%'}
        justifyContent="flex-end"
        alignItems={'center'}
      >
        <HStack spacing={'12px'}>
            <Button as={Link} href="/" >
               Home
            </Button>
            <Button as={Link} href="about" >
               About
            </Button>
          <ColorModeToggle></ColorModeToggle>
        </HStack>
      </Flex>
      <MobileNav/>
    </>
  );
};

function ColorModeToggle(props) {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button
      aria-label="Toggle Color Mode"
      onClick={toggleColorMode}
      _focus={{ boxShadow: 'none' }}
      w="fit-content"
      {...props}
    >
      {colorMode === 'light' ? <BsMoonStarsFill /> : <BsSun />}
    </Button>
  );
}

function MobileNav({}) {
  const [isOpen, setIsOpen] = useState(false)
  const colorModeValue = useColorModeValue('#edeeee', '#1b202c');
  const buttonBackground = useColorModeValue('gray.300', 'whiteAlpha.200');


  let activeStyle = {
    background: '#417fcc',
    borderRadius: '5px',
    color:colorModeValue
  }

  return (
    <>
      <Flex display={['flex', 'flex', 'none', 'none']} direction={'column'}>
        <Flex
          w={'100%'}
          pt={'2rem'}
          justifyContent={'flex-end'}
          alignItems={'center'}
          as={'header'}
          zIndex={21}
        >
          <HStack spacing={'1rem'}>
            <ColorModeToggle></ColorModeToggle>
            <IconButton
              onClick={() => {  setIsOpen((prev) => !prev)}}
              aria-label="open menu"
              size="lg"
              icon={isOpen ? <CloseIcon/> : <HamburgerIcon boxSize={'2rem'} />}
            />
          </HStack>
        </Flex>
        
        <Slide style={{ zIndex: 20 }} direction='right' in={isOpen} unmountOnExit={true} >
        <Flex
         overflowY={'auto'}
          left={'0'}
          position={'fixed'}
          zIndex={'20'}
          w='100vw'
          h="100vh"
          backgroundColor={colorModeValue}
          opacity={'0.9'}
          justifyContent={'center'}
          pt={'7rem'}
        >
          <VStack spacing={'70px'}>
              <Button backgroundColor={buttonBackground} w={'150px'} onClick={() => {setIsOpen(false)}} as={Link} href="/" >
               Home
              </Button>
              <Button backgroundColor={buttonBackground} w={'150px'} onClick={() => {setIsOpen(false)}} as={Link} href="about" >
                About
              </Button>
              <Button  backgroundColor={buttonBackground} w={'150px'} onClick={() => {setIsOpen(false)}} as={Link} href="sample_projects" >
               Sample Projects
              </Button>
              <Button backgroundColor={buttonBackground} w={'150px'} onClick={() => {setIsOpen(false)}} as={Link} href="main_projects" >
               Main Projects
              </Button>
              <Button backgroundColor={buttonBackground} w={'150px'} onClick={() => {setIsOpen(false)}} as={Link} href="contact" >
              Contact
              </Button>
          </VStack>
        </Flex>
        </Slide>
      </Flex>
    </>
  );
}

export default NavBar;
