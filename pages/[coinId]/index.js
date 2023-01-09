import {
  Flex,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';
import FirstBlock from '../../components/CoinDetails/FirstBlock';
import SecondBlock from '../../components/CoinDetails/SecondBlock';

const CoinDetails = ({ coin }) => {
  console.log(coin);


  const blockColor = useColorModeValue('gray.200', 'gray.900');
  const mainColors = useColorModeValue('gray.50', 'blackAlpha.700');

  return (
    <Flex
      mt={'4rem'}
      w={['90%', '90%', '90%', '70%']}
      mx={'auto'}
      direction={'column'}
      alignItems={'center'}
    >
    <FirstBlock coin={coin}/>
    <SecondBlock coin={coin}/>
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
