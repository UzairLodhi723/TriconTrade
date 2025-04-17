import { Box, Typography, Button, Card, CardContent, Divider } from "@mui/material";
import { useState } from "react";
import MarketSelectionUI from "./MarketSelectionUI";

interface props{
  ResData:any
}

export default function OTCMarket({ResData}:any) {
    const [showMarket , setShowMarket] = useState(false)
  console.log(ResData,"ResData")
  return (
    <Box>
    <Box sx={{ backgroundColor: "#121212", color: "#fff", p: 2, borderRadius: 2, width: "100%", maxWidth: 500, mt:2 }}>
      <Typography variant="h6" color="#bb86fc">OTC MARKET</Typography>
      <Typography variant="h3" fontWeight={700} color={ResData?.value==="LOWER"?"#e91e63":"#23A57A"}>{ResData?.value==="LOWER"?"LOWER":"HIGHER"}</Typography>

      {/* <Card sx={{ backgroundColor: "#1e1e1e", my: 2 }}>
        <CardContent>
          <Typography variant="body2" color="#bb86fc">
            AUD/USD OTC Forecast (+0.1%)
          </Typography>
          <Typography variant="body2" color="#e91e63">
            LOWER ↓ | [Moderate]
          </Typography>
        </CardContent>
      </Card> */}

      {/* Market Overview */}
      <Typography variant="h6" gutterBottom>Market Overview:</Typography>
      <Typography variant="body2">• Volatility: <span style={{ color: "#ff1744" }}>{ResData?.MarketSummary?.Volatility}</span></Typography>
      <Typography variant="body2">• Sentiment: <span style={{ color: "#ff1744" }}>{ResData?.MarketSummary?.Sentiment}</span></Typography>
      <Typography variant="body2">• Volume: <span style={{ color: "#ff1744" }}>{ResData?.MarketSummary?.Volume}</span></Typography>

      {/* Market Snapshot */}
      <Typography variant="h6" gutterBottom mt={2}>Market Snapshot:</Typography>
      <Typography variant="body2">• Current Value: <span style={{ color: "#ff1744" }}>{ResData?.MarketSnapshot?.CurrentValue}</span></Typography>
      <Typography variant="body2">• Support(S1): <span style={{ color: "#ff1744" }}>{ResData?.MarketSnapshot?.Support}</span></Typography>
      <Typography variant="body2">• Resistance(R1): <span style={{ color: "#ff1744" }}>{ResData?.MarketSnapshot?.Resistance}</span></Typography>

      {/* Additional Metrics */}
      <Typography variant="h6" gutterBottom mt={2}>Additional Metrics:</Typography>
      <Typography variant="body2">• Volume Profile: <span style={{ color: "#ff1744" }}>{ResData?.MarketSnapshot?.VolumeProfile}</span></Typography>
      <Typography variant="body2">• Order Flow: <span style={{ color: "#ff1744" }}>{ResData?.MarketSnapshot?.OrderFlow}</span></Typography>

      {/* Technical Analysis */}
      <Typography variant="h6" gutterBottom mt={2}>Technical Analysis:</Typography>
      <Typography variant="body2">• RSI (14): <span style={{ color: "#ff1744" }}>{ResData?.TechnicalAnalysis?.RSI}</span></Typography>
      <Typography variant="body2">• MACD: <span style={{ color: "#ff1744" }}>{ResData?.TechnicalAnalysis?.MACD}</span></Typography>
      <Typography variant="body2">• Bollinger Bands: <span style={{ color: "#ff1744" }}>{ResData?.TechnicalAnalysis?.BollingerBand}</span></Typography>
      <Typography variant="body2">• Pattern: <span style={{ color: "#ff1744" }}>{ResData?.TechnicalAnalysis?.Pattern}</span></Typography>

      {/* Retry Button */}
      <Button
        variant="contained"
        sx={{ mt: 2, backgroundColor: "#e91e63", '&:hover': { backgroundColor: "#c2185b" } }}
        fullWidth
        onClick={() => {setShowMarket(!showMarket)}}
      >
        Retry
      </Button>
    </Box>
        {
            showMarket && 
            <MarketSelectionUI setShowMarket={() => setShowMarket(!showMarket)}/>
        }
    </Box>
  );
}
