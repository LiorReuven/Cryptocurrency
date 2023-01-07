import { Box, Flex} from "@chakra-ui/react";
import CoinRanks from "../components/CoinRanks";

export default function Home({coinList}) {

  console.log(coinList)

  return (
    <>
      <Flex justifyContent={'center'}>
        <Box p={6} border={'1px solid #1a1a1a'} borderRadius={'10px'} maxW={'90%'}>
          <CoinRanks coinList={coinList}/>
          </Box>
      </Flex>
    </>
  )
}

export const getStaticProps= async() => {
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
