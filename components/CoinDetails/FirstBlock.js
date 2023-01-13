import React from 'react';

import {
  Flex,
  Heading,
  Image,
  Stat,
  StatArrow,
  StatHelpText,
  StatNumber,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

const FirstBlock = ({ coin }) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  const numCheck = (number) => {
    const num = Math.sign(number);
    return num;
  };

  const blockColor = useColorModeValue('gray.200', 'gray.900');
  const mainColors = useColorModeValue('gray.50', 'blackAlpha.700');

  return (
    <Flex
      direction={'column'}
      minW={'100%'}
      p={2}
      backgroundColor={blockColor}
      borderRadius={'10px'}
    >
      <Heading
        minW={'0'}
        textAlign={'center'}
        p={'5px'}
        borderRadius={'6px'}
        color={'black'}
        backgroundColor={'orange'}
        fontSize={{ md: 'md', base: 'xs' }}
        w={['30%', '20%', '15%', '13%']}
        mx={'auto'}
      >
        Rank #{coin.rank}
      </Heading>
      <Flex
        minW={'0'}
        alignItems={'center'}
        p={{ md: 6, base: 2 }}
        justifyContent={'space-between'}
      >
        <Image
          boxSize={{ base: '30px', md: '50px' }}
          mr={'1rem'}
          src={coin.icon}
        />
        <Heading letterSpacing={'wide'} size={{ md: 'xl', base: 'sm' }}>
          {coin.name}
          <Text mx={'0.7rem'} as={'span'} color={'gray.500'}>
            ({coin.symbol})
          </Text>
        </Heading>
        <Stat minW={'0'} size={{ base: 'sm', md: 'md' }} textAlign={'end'}>
          <StatNumber>{formatter.format(coin.price)}</StatNumber>
          <StatHelpText
            fontSize={{ base: 'sm', md: 'md' }}
            fontWeight={'semibold'}
            color={
              numCheck(coin.priceChange1d) === 1
                ? 'green.300'
                : numCheck(coin.priceChange1d) === -1
                ? 'red'
                : 'white'
            }
          >
            {!(numCheck(coin.priceChange1d) === 0) && (
              <StatArrow
                type={
                  numCheck(coin.priceChange1d) === 1
                    ? 'increase'
                    : numCheck(coin.priceChange1d) === -1
                    ? 'decrease'
                    : ''
                }
              />
            )}
            {coin.priceChange1d}%
          </StatHelpText>
        </Stat>
      </Flex>
    </Flex>
  );
};

export default FirstBlock;
