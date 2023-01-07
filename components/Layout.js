import { Box, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import NavBar from './NavBar';

const Layout = ({ children }) => {
  const mainColors = useColorModeValue('gray.50', 'blackAlpha.700');

  return (
    <Box minH={'100vh'} w={'100vw'}   backgroundColor={mainColors}>
      <Box m={'auto'} maxW={'80vw'}>
        <header>
          <NavBar />
        </header>
        <main>{children}</main>
      </Box>
    </Box>
  );
};

export default Layout;
