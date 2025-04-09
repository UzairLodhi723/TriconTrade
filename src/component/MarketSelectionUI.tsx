import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import Grid from '@mui/material/Grid2'
import TradingTimeUI from "./TradingTimeUI";
interface marketProps{
  setShowMarket :()=> void
}
const MarketSelectionUI:React.FC<marketProps>=({
  setShowMarket
}) => {
  const tradingTimes = [
    "BHD/CNY OTC ", "AED/CNY OTC ", "SAR/CNY OTC",
    "QAR/CNY OTC ", "OMR/CNY OTC", "OD/CNY OTC",
  ];
      const [showTradingTime , setShowTradingTime] = useState(false)
      const [showStock , setShowStock] = useState({value:"",type:false})
      const [Stock , setStock] = useState("")

  return (
    <Box>
    <Box
      sx={{
        backgroundColor: "#121212",
        color: "#fff",
        p: 3,
        borderRadius: 2,
        textAlign: "center",
        mt:2
      }}
    >
      <Box
        sx={{
          backgroundColor: "#1e1e1e",
          borderRadius: 2,
          p: 5,
          mb: 2,
        }}
      >
        <Typography variant="h6" fontWeight="bold" mb={1}>
          🏢 Workspace
        </Typography>
        <Typography variant="h3" fontWeight="bold" mt={1}>
          Market
        </Typography>
        <Typography variant="body2" color="#888" mt={1}>
          Choose the type of market where you plan to trade.
          <br />
          If the stock market is closed at this time, you will automatically switch to the OTC market.
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Typography variant="body2" color="#888">
          SELECT ▶ MARKET TYPE
        </Typography>
      </Box>

      <Grid container spacing={2} mb={2}>
        <Grid size={{xs:6}}>
          <Button
            fullWidth
            variant="contained"
            sx={{ backgroundColor: "#2c2c2c", color: "#fff" }}
            onClick={() => setShowStock({value:"stock",type:true})}
            >
            STOCK
          </Button>
        </Grid>
        <Grid size={{xs:6}}>
          <Button
            fullWidth
            variant="contained"
            sx={{ backgroundColor: "#2c2c2c", color: "#fff" }}
            onClick={() => setShowStock({value:"otc",type:false})}
          >
            OTC
          </Button>
        </Grid>
      </Grid>
      {
        showStock.type && (
      <Grid container spacing={2} mb={2}>
        {tradingTimes.map((time) => (
          <Grid size={{xs:4}} key={time}>
            <Button
              fullWidth
              variant="contained"
              sx={{ backgroundColor: "#2c2c2c", color: "#fff" }}
              onClick={() =>{
                setShowTradingTime(true)
                setStock(time)
              }}
            >
              {time}
            </Button>
          </Grid>
        ))}
      </Grid>
        )
      }
      <Button
        fullWidth
        variant="contained"
        sx={{ backgroundColor: "#2c2c2c", color: "#fff" }}
        onClick={()=> setShowMarket()}
      >
        Back to menu
      </Button>
    </Box>
    {
      showTradingTime && 
      <TradingTimeUI setShowTradingTime={()=> setShowTradingTime(!showTradingTime)} type = {showStock.value} Stock = {Stock}  />
    }
    </Box>
  );
}
export default MarketSelectionUI;