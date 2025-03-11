import { Box, Button, Typography } from "@mui/material";
import Grid from '@mui/material/Grid2'
import { useState } from "react";
import { Link } from "react-router-dom";
import MarketSelectionUI from "./MarketSelectionUI";
const  start = require("./start.png")

export default function StartTrading() {
    const [showMarket , setShowMarket] = useState(false)
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
          px: 5,
          py:2,
          mb: 1,
        }}
      >
        <Box
          component="img"
          src={start} // Replace with your logo
          alt="Bot Logo"
          sx={{ width: 80, height: 80, mb: 2 }}
        />
        <Typography variant="subtitle2" color="#888">
          YOU ARE CONNECTED
        </Typography>
        <Typography variant="h5" fontWeight="bold" mt={1}>
          Let's Start Trading
        </Typography>
      </Box>

      <Button
        fullWidth
        variant="contained"
        sx={{ backgroundColor: "#2c2c2c", mb: 2, color: "#fff" }}
        onClick={() => setShowMarket(true)}
      >
        How the bot works ?
      </Button>

      <Grid container spacing={1} mb={1}>
        <Grid size={{xs:6}}>
            <a href="https://www.youtube.com/watch?v=Evsh4cbGa8Q" target="_blank">
          <Button
            fullWidth
            variant="contained"
            sx={{ backgroundColor: "#2c2c2c", color: "#fff" }}
          >
            YouTube ↗
          </Button>
            </a>
        </Grid>
        <Grid size={{xs:6}}>
        <a href="https://www.tradingview.com/community/" target="_blank">
          <Button
            fullWidth
            variant="contained"
            sx={{ backgroundColor: "#2c2c2c", color: "#fff" }}
          >
            Community ↗
          </Button>
          </a>
        </Grid>
      </Grid>

      <Button
        fullWidth
        variant="contained"
        sx={{ backgroundColor: "#2c2c2c", color: "#fff" }}
        onClick={() => setShowMarket(true)}
      >
        WORKSPACE 💻
      </Button>
    </Box>
    {
        showMarket && 
        <MarketSelectionUI setShowMarket={() => setShowMarket(!showMarket)}/>
    }
    </Box>
  );
}
