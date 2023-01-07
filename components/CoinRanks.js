import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Image,
  Icon,
  Link,
  Flex,
  Text,
  Stack,
  StatArrow,
  StatHelpText,
  Stat,
  Box,
} from '@chakra-ui/react';
import * as NextLink from 'next/link';

const CoinCard = ({ coinList }) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return (
    <TableContainer>
      <Table size={'lg'} variant="simple">
        <Thead>
          <Tr>
            <Th>Rank</Th>
            <Th>Name</Th>
            <Th isNumeric>Price</Th>
            <Th isNumeric>24h Change</Th>
            <Th>Price Graph(7D)</Th>
          </Tr>
        </Thead>
        <Tbody>
          {coinList.map((coin) => {
            const numberCheck = Math.sign(coin.priceChange1d);
            return (
              <Tr
                key={coin.id}
                cursor={'pointer'}
                _hover={{ backgroundColor: 'gray.800' }}
              >
                <Td>{coin.rank}</Td>
                <Td>
                  <Stack align={'center'} direction={'row'} pr={40}>
                    <Image boxSize={8} objectFit={'contain'} src={coin.icon} />
                    <Text as={'span'}>{coin.name}</Text>
                    <Text color={'gray.500'} as={'span'}>
                      •
                    </Text>
                    <Text color={'gray.500'} as={'span'}>
                      {coin.symbol}
                    </Text>
                  </Stack>
                </Td>
                <Td isNumeric fontWeight={'semibold'}>
                  {formatter.format(coin.price)}
                </Td>
                <Td isNumeric>
                  <Stat>
                    <StatHelpText
                      fontWeight={'semibold'}
                      color={
                        numberCheck === 1
                          ? '#16c784'
                          : numberCheck === -1
                          ? 'red'
                          : 'white'
                      }
                    >
                      {(numberCheck === 1 || numberCheck === -1) && 
                          <StatArrow
                            color={numberCheck === 1 && '#16c784'}
                            type={
                              numberCheck === 1
                                ? 'increase'
                                : numberCheck === -1
                                ? 'decrease'
                                : ''
                            }
                          />
                        }
                      {coin.priceChange1d}%
                    </StatHelpText>
                  </Stat>
                </Td>
                <Td>
                  <NextLink href="/">graph</NextLink>
                </Td>
              </Tr>
            );
          })}
        </Tbody>
        <Tfoot></Tfoot>
      </Table>
    </TableContainer>
  );
};

export default CoinCard;
