import { Box } from '@mui/material'
import StartTrading from '../component/StartTrading'
import OTCMarket from '../component/OTCMarket'

const Home = () => {
  return (
   <Box bgcolor={"#202020"} height={"100vh"} overflow={"auto"}>
     <Box maxWidth={{lg:"30%",md:"50%",sm:"70%", sx:"90%" }} m={"auto"}>
    <StartTrading/>
    </Box>
   </Box>
  )
}

export default Home