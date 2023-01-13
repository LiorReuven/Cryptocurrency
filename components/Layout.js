import { Box, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import NavBar from './NavBar';

const Layout = ({ children }) => {
  const mainColors = useColorModeValue('gray.50', 'blackAlpha.700');

  return (
    <Box
      minH={'100vh'}
      minW={'100vw'}
      w={'auto'}
      h={'auto'}
      overflowY={'hidden'}
      backgroundColor={mainColors}
    >
      <Box m={'auto'} maxW={{ md: '80vw', base: '100vw' }}>
        <header>
          <NavBar />
        </header>
        <main>{children}</main>
      </Box>
    </Box>
  );
};

export default Layout;
