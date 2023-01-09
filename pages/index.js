import { Box, Flex, useColorModeValue} from "@chakra-ui/react";
import Script from "next/script";
import CoinRanks from "../components/CoinRanks";

export default function Home({coinList}) {

  console.log(coinList)

  const TableColor = useColorModeValue('whiteAlpha.500', null)
  


  return (
    <>
      <Flex my={'4rem'} justifyContent={'center'}>
        <Box backgroundColor={TableColor} boxShadow={'2xl'} p={6} border={'1px solid #1a1a1a'} borderRadius={'10px'} maxW={'90%'}>
          <CoinRanks coinList={coinList}/>
          </Box>
      </Flex>
    </>
  )
}

export const getServerSideProps= async() => {
  let coinList
  try {
    const res = await fetch('https://api.coinstats.app/public/v1/coins?skip=0&limit=10', {
    method:'GET',
    redirect:'follow'
  })
  
    coinList = await res.json()

  } catch (error) {
    console.log(error)
  }
  
  return {
    props: {
      coinList: coinList.coins
    }
  }
}
