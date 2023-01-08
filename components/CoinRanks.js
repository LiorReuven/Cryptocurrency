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
  useColorModeValue,
  
} from '@chakra-ui/react';
import * as NextLink from 'next/link';
import { useRouter } from 'next/router';

const CoinCard = ({ coinList }) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });


  const hoverColor = useColorModeValue('gray.100', 'gray.800')

  const statColor = useColorModeValue('black', 'white')

  const router = useRouter()

  

  return (
    <TableContainer>
      <Table size={'lg'} variant="simple" >
        <Thead>
          <Tr>
            <Th>Rank</Th>
            <Th>Name</Th>
            <Th isNumeric>Price</Th>
            <Th isNumeric>24h Change</Th>
            <Th>1 Week Change</Th>
          </Tr>
        </Thead>
        <Tbody>
          {coinList.map((coin) => {
            const numberCheck = Math.sign(coin.priceChange1d);
            const numberCheck1w = Math.sign(coin.priceChange1w);
            const onRowClick = () => {
              router.push({pathname:`${coin.id}`})
            }
            return (
              <Tr
                key={coin.id}
                cursor={'pointer'}
                _hover={{ backgroundColor: hoverColor }}
                onClick={onRowClick}
                
              >
                <Td>{coin.rank}</Td>
                <Td>
                  <Stack align={'center'} direction={'row'} pr={{md:40, base:0}}>
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
                          : statColor
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
                <Td isNumeric>
                <Stat>
                    <StatHelpText
                      fontWeight={'semibold'}
                      color={
                        numberCheck1w === 1
                          ? '#16c784'
                          : numberCheck1w === -1
                          ? 'red'
                          : statColor
                      }
                    >
                      {(numberCheck1w === 1 || numberCheck1w === -1) && 
                          <StatArrow
                            color={numberCheck1w === 1 && '#16c784'}
                            type={
                              numberCheck1w === 1
                                ? 'increase'
                                : numberCheck1w === -1
                                ? 'decrease'
                                : ''
                            }
                          />
                        }
                      {coin.priceChange1w}%
                    </StatHelpText>
                  </Stat>
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
