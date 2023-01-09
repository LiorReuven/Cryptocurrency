import { Flex, useColorModeValue } from '@chakra-ui/react';
import Script from 'next/script';
import React from 'react';
import FirstBlock from '../../components/CoinDetails/FirstBlock';
import FourthBlock from '../../components/CoinDetails/fourthBlock';
import SecondBlock from '../../components/CoinDetails/SecondBlock';
import ThirdBlock from '../../components/CoinDetails/ThirdBlock';

const CoinDetails = ({ coin, coinDescription }) => {

  const blockColor = useColorModeValue('gray.200', 'gray.900');
  const mainColors = useColorModeValue('gray.50', 'blackAlpha.700');

  return (
    <>
      <Script
        src="https://static.coinstats.app/widgets/coin-chart-widget.js"
        async
      />

      <Flex
        mt={'4rem'}
        w={['90%', '90%', '90%', '70%']}
        mx={'auto'}
        direction={'column'}
        alignItems={'center'}
      >
        <FirstBlock coin={coin} />
        <SecondBlock coin={coin} />
        <ThirdBlock coin={coin} />
        <FourthBlock coinDescription={coinDescription} />
      </Flex>
    </>
  );
};

export default CoinDetails;

export const getServerSideProps = async (context) => {
  let coin;
  let coinDescription;
  try {
    const [coinRes, coinDescriptionRes] = await Promise.all([
      fetch(
        `https://api.coinstats.app/public/v1/coins/${context.params.coinId}?currency=USD`,
        {
          method: 'GET',
          redirect: 'follow',
        }
      ), 
      fetch(
        `https://api.coingecko.com/api/v3/coins/${context.params.coinId}`,
        {
          method: 'GET',
          redirect: 'follow',
        }
      )
    ]);
    
    const [coinJs, coinDesc] = await Promise.all([
      coinRes.json(), 
      coinDescriptionRes.json()
    ]);
    

    coinDescription = coinDesc.description.en
    coin = coinJs.coin
  } catch (error) {
    console.log(error);
  }

  return {
    props: {coin:coin,coinDescription:coinDescription}
  };
};
