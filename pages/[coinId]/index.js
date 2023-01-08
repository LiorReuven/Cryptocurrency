import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Stat,
  StatArrow,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';
import {AiOutlineTwitter} from 'react-icons/ai'

const CoinDetails = ({ coin }) => {
  console.log(coin);

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  const numCheck = (number) => {
    const num = Math.sign(number);
    return num;
  };

  const getSiteName = (url) => {
    let domain = new URL(url);
    domain = domain.hostname;
    domain = domain.toString().replace('www.', '');

    return domain;
  };

  const blockColor = useColorModeValue('gray.200', 'gray.900');
  const mainColors = useColorModeValue('gray.50', 'blackAlpha.700');

  return (
    <Flex
      mt={'4rem'}
      w={['90%', '90%', '90%', '70%']}
      mx={'auto'}
      direction={'column'}
    >
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
      <Flex
        borderRadius={'10px'}
        mt={'2rem'}
        p={2}
        backgroundColor={blockColor}
      >
        <Flex direction={'column'}>
        <Heading  size={{base:'xs', md:'sm'}} fontWeight={'semibold'}>
          Website:
          <Button
            p={'4px'}
            ml={'1rem'}
            fontSize={'xs'}
            as={'a'}
            href={coin.websiteUrl}
            target={'blank'}
          >
            {getSiteName(coin.websiteUrl)}
          </Button>
        </Heading>
        <Heading mt={'1rem'} size={{base:'xs', md:'sm'}} fontWeight={'semibold'}>
          Twitter:
          <Button as={'a'} p={'4px'} ml={'1rem'} fontSize={'xs'} href={coin.twitterUrl} target={'_blank'}>
            <AiOutlineTwitter style={{marginRight: '5px'}} color='#3f9ff1' size={'20px'}/> Twitter
          </Button>
        </Heading>
        <Heading mt={'1rem'} size={{base:'xs', md:'sm'}} fontWeight={'semibold'}>
          Explorers:
          <Button as={'a'} p={'4px'} ml={'1rem'} fontSize={'xs'} href={coin.websiteUrl} target={'_blank'}>
            {getSiteName(coin.exp[0])}
          </Button>
             <Menu >
                <MenuButton ml={'0.5rem'}  as={Button} p={0} textAlign={'center'} >
                <ChevronDownIcon />
                </MenuButton>
                <MenuList>
                  { coin.exp.map((explorer, index) => {
                    return (
                  <MenuItem key={index} as={'a'} href={explorer} target={'_blank'}>{getSiteName(explorer)}</MenuItem>
                    )
                  })
                }
                </MenuList>
              </Menu>
        </Heading>
        </Flex>
        <Flex direction={'column'}>
          <Flex direction={'column'}>
          <Text size={{base:'xs', md:'sm'}}>Market Cap</Text>
          <Text>{formatter.format(coin.marketCap)}</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default CoinDetails;

export const getServerSideProps = async (context) => {
  let coin;
  try {
    const res = await fetch(
      `https://api.coinstats.app/public/v1/coins/${context.params.coinId}?currency=USD`,
      {
        method: 'GET',
        redirect: 'follow',
      }
    );

    coin = await res.json();
  } catch (error) {
    console.log(error);
  }

  return {
    props: coin,
  };
};
