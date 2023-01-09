import React from 'react';
import {
  Button,
  Flex,
  Heading,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
  Tooltip,
  useColorModeValue,
} from '@chakra-ui/react';
import { AiOutlineTwitter } from 'react-icons/ai';
import { ChevronDownIcon, InfoIcon } from '@chakra-ui/icons';

const SecondBlock = ({ coin }) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  const getSiteName = (url) => {
    let domain;
    try {
    domain = new URL(url);
    domain = domain.hostname;
    domain = domain.toString().replace('www.', '');
    } catch (error) {
      console.log(error)
    }
    

    return domain;
  };

  const blockColor = useColorModeValue('gray.200', 'gray.900');
  const mainColorsRev = useColorModeValue('black', 'gray.50');
  const headlinesColor = useColorModeValue('gray.600', 'gray.400');

  return (
    <Flex
      w={{ base: '100%', md: '100%' }}
      borderRadius={'10px'}
      mt={'2rem'}
      p={2}
      backgroundColor={blockColor}
      justifyContent={'space-between'}
    >
      <Flex direction={'column'} ml={'1rem'}>
        <Stack spacing={6}>
          <Flex
            align={{ base: 'flex-start', md: 'center' }}
            direction={{ base: 'column', md: 'row' }}
          >
            <Heading
              size={{ base: 'xs', md: 'sm' }}
              fontWeight={'semibold'}
              color={headlinesColor}
            >
              Website:
            </Heading>
            <Button
              p={'4px'}
              ml={{ base: '0', md: '1rem' }}
              fontSize={'xs'}
              as={'a'}
              href={coin.websiteUrl}
              target={'blank'}
              color={mainColorsRev}
              size={{ base: 'sm', md: 'md' }}
            >
              {getSiteName(coin.websiteUrl)}
            </Button>
          </Flex>
          <Flex
            align={{ base: 'flex-start', md: 'center' }}
            direction={{ base: 'column', md: 'row' }}
          >
            <Heading
              size={{ base: 'xs', md: 'sm' }}
              fontWeight={'semibold'}
              color={headlinesColor}
            >
              Twitter:
            </Heading>
            <Button
              as={'a'}
              p={'4px'}
              ml={{ base: '0', md: '1rem' }}
              fontSize={'xs'}
              href={coin.twitterUrl}
              target={'_blank'}
              color={mainColorsRev}
              size={{ base: 'sm', md: 'md' }}
            >
              <AiOutlineTwitter
                style={{ marginRight: '5px' }}
                color="#3f9ff1"
                size={'20px'}
              />
              Twitter
            </Button>
          </Flex>
          <Flex
            align={{ base: 'flex-start', md: 'center' }}
            direction={{ base: 'column', md: 'row' }}
          >
            <Heading
              size={{ base: 'xs', md: 'sm' }}
              fontWeight={'semibold'}
              color={headlinesColor}
            >
              Explorers:
            </Heading>
            <Button
              as={'a'}
              p={'4px'}
              ml={{ base: '0', md: '1rem' }}
              fontSize={'xs'}
              href={coin.websiteUrl}
              target={'_blank'}
              color={mainColorsRev}
              size={{ base: 'sm', md: 'md' }}
            >
              {getSiteName(coin.exp[0])}
            </Button>
            <Menu>
              <MenuButton ml={'0.5rem'} as={Button} p={0} textAlign={'center'}>
                <ChevronDownIcon />
              </MenuButton>
              <MenuList>
                {coin.exp.map((explorer, index) => {
                  return (
                    <MenuItem
                      key={index}
                      as={'a'}
                      href={explorer}
                      target={'_blank'}
                      color={mainColorsRev}
                    >
                      {getSiteName(explorer)}
                    </MenuItem>
                  );
                })}
              </MenuList>
            </Menu>
          </Flex>
        </Stack>
      </Flex>
      <Flex direction={{ base: 'column', md: 'row' }} p={2} justifyContent={'space-evenly'}>
        <Flex mr={{md:'15px',base:'0'}} direction={'column'} justifyContent={'space-between'} >
          <Flex direction={'column'}>
            <Flex align={'center'} justifyContent={'center'}>
              <Text
                color={headlinesColor}
                fontWeight={'semibold'}
                size={{ base: 'xs', md: 'sm' }}
              >
                Market Cap
              </Text>
              <Tooltip
                label="For a cryptocurrency like Bitcoin, market capitalization (or market cap) is the total value of all the coins that have been mined. It’s calculated by multiplying the number of coins in circulation by the current market price of a single coin."
                fontSize="sm"
              >
                <InfoIcon color={headlinesColor} boxSize={'15px'} ml={'8px'} />
              </Tooltip>
            </Flex>
            <Text fontWeight={'semibold'} fontSize={'lg'} textAlign={'center'}>
              {coin.marketCap > 1000000000
                ? `$${Math.round(coin.marketCap / 1000000000)} B`
                : formatter.format(coin.marketCap)}
            </Text>
          </Flex>
          <Flex direction={'column'} >
            <Flex align={'center'} justifyContent={'center'}>
              <Text
                color={headlinesColor}
                fontWeight={'semibold'}
                size={{ base: 'xs', md: 'sm' }}
              >
                Total Supply
              </Text>
              <Tooltip
                label="Total supply refers to the number of coins or tokens that currently exists and are either in circulation or locked somehow. It is the sum of coins that were already mined (or issued) minus the total of coins that were burned or destroyed."
                fontSize="sm"
              >
                <InfoIcon color={headlinesColor} boxSize={'15px'} ml={'8px'} />
              </Tooltip>
            </Flex>
            <Text fontWeight={'semibold'} fontSize={'lg'} textAlign={'center'}>
            {coin.totalSupply > 1000000000
                ? `$${Math.round(coin.totalSupply / 1000000000)} B`
                : formatter.format(coin.totalSupply)}
            </Text>
          </Flex>
        </Flex>
        <Flex  direction={'column'} justifyContent={'space-between'} >
          <Flex direction={'column'}>
            <Flex align={'center'} >
              <Text
                color={headlinesColor}
                fontWeight={'semibold'}
                size={{ base: 'xs', md: 'sm' }}
              >
                Available Supply
              </Text>
              <Tooltip
                label="A cryptocurrency's maximum supply is the total number of tokens that will ever be mined, and it is usually defined when the genesis block is created. Bitcoin's maximum supply is capped at 21 million, and although anything is possible, its strict protocol and code are built so that no more BTC can ever be mined."
                fontSize="sm"
              >
                <InfoIcon color={headlinesColor} boxSize={'15px'} ml={'8px'} />
              </Tooltip>
            </Flex>
            <Text fontWeight={'semibold'} fontSize={'lg'} textAlign={'center'}>
              {(coin.availableSupply > 1000000000)
                ? `$${Math.round(coin.availableSupply / 1000000000)} B`
                : formatter.format(coin.availableSupply)}
            </Text>
          </Flex>
          <Flex direction={'column'} >
            <Flex align={'center'} justifyContent={'center'}>
              <Text
                color={headlinesColor}
                fontWeight={'semibold'}
                size={{ base: 'xs', md: 'sm' }}
              >
                Volume
              </Text>
              <Tooltip
                label="Volume refers to how much - in monetary terms - a given cryptocurrency has traded over a period of time. Volume is important because it has such a significant impact on price from both an absolute and relative perspective."
                fontSize="sm"
              >
                <InfoIcon color={headlinesColor} boxSize={'15px'} ml={'8px'} />
              </Tooltip>
            </Flex>
            <Text fontWeight={'semibold'} fontSize={'lg'} textAlign={'center'}>
            {(coin.volume > 1000000000)
                ? `$${Math.round(coin.volume / 1000000000)} B`
                : formatter.format(coin.volume)}
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SecondBlock;
