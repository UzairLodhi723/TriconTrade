import { Box, Button, Typography } from "@mui/material";
import Grid from '@mui/material/Grid2'
import { useState } from "react";
import SignalUI from "./SignalUI"
interface TimeProps{
    setShowTradingTime :()=> void
    type?:string
    Stock?:string
  }
  const TradingTimeUI:React.FC<TimeProps>=({
    setShowTradingTime,
    type,
    Stock
}) => {
    const [selectedTime,setSelectedTime] = useState(false)
    const [Time,setTime] = useState("")
  const tradingTimes = [
    "1 minute", "2 minutes", "3 minutes",
    "4 minutes", "5 minutes", "10 minutes", "15 minutes"
  ];
  console.log(type, Stock, Time)

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
          Time
        </Typography>
        <Typography variant="body2" color="#888" mt={1}>
          Choose the trading time that suits you the most.
          <br />
          The lower the time value, the less accurate the bot's forecast will be.
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
          SELECT ▶ TRADING TIME
        </Typography>
      </Box>

      <Grid container spacing={2} mb={2}>
        {tradingTimes.map((time) => (
          <Grid size={{xs:4}} key={time}>
            <Button
              fullWidth
              variant="contained"
              sx={{ backgroundColor: "#2c2c2c", color: "#fff" }}
              onClick={() =>{
                setSelectedTime(true)
                setTime(time)
              }}
            >
              {time}
            </Button>
          </Grid>
        ))}
      </Grid>

      <Button
        fullWidth
        variant="contained"
        sx={{ backgroundColor: "#2c2c2c", color: "#fff" }}
        onClick={() => setShowTradingTime()}
      >
        Back
      </Button>
    </Box>
    {
        selectedTime && 
        <SignalUI Time={Time} setSelectedTime = {() => setSelectedTime(!selectedTime)} Stock={Stock} />
    }
    </Box>
  );
}
export default TradingTimeUI;