import { Flex, useColorModeValue } from '@chakra-ui/react';
import Script from 'next/script';
import React, { useState } from 'react';

const ThirdBlock = ({ coin }) => {
  const blockColor = useColorModeValue('gray.200', 'gray.900');

  return (
    <>
      <Flex
        w={{ base: '100%', md: '100%' }}
        borderRadius={'10px'}
        mt={'2rem'}
        p={2}
        backgroundColor={blockColor}
        justifyContent={'center'}
      >
        <coin-stats-chart-widget
          type="large"
          coin-id={coin.id}
          width="650"
          chart-height="300"
          currency="USD"
          locale="en"
          bg-color="black"
          text-color="#FFFFFF"
          status-up-color="#74D492"
          status-down-color="#FE4747"
          buttons-color="#1C1B1B"
          chart-color="#FFA959"
          chart-gradient-from="rgba(255,255,255,0.07)"
          chart-gradient-to="rgba(0,0,0,0)"
          chart-label-background="#000000"
          candle-grids-color="rgba(255,255,255,0.1)"
          border-color="rgba(255,255,255,0.15)"
          font="Roboto, Arial, Helvetica"
          btc-color="#6DD400"
          eth-color="#67B5FF"
        />
      </Flex>
    </>
  );
};

export default ThirdBlock;
