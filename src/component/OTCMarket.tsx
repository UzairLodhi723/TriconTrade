import { Box, Typography, Button, Card, CardContent, Divider } from "@mui/material";
import { useState } from "react";

interface props{
  ResData:any
}

export default function OTCMarket(ResData:props) {
  console.log(ResData,"ResData")
    const [Lower , setLower] = useState(true)
  return (
    <Box sx={{ backgroundColor: "#121212", color: "#fff", p: 2, borderRadius: 2, width: "100%", maxWidth: 500, mt:2 }}>
      <Typography variant="h6" color="#bb86fc">OTC MARKET</Typography>
      <Typography variant="h3" fontWeight={700} color={Lower?"#e91e63":"#23A57A"}>{Lower?"LOWER":"HIGHER"}</Typography>

      <Card sx={{ backgroundColor: "#1e1e1e", my: 2 }}>
        <CardContent>
          <Typography variant="body2" color="#bb86fc">
            AUD/USD OTC Forecast (+0.1%)
          </Typography>
          <Typography variant="body2" color="#e91e63">
            LOWER ↓ | [Moderate]
          </Typography>
        </CardContent>
      </Card>

      {/* Market Overview */}
      <Typography variant="h6" gutterBottom>Market Overview:</Typography>
      <Typography variant="body2">• Volatility: <span style={{ color: "#ff1744" }}>Active</span></Typography>
      <Typography variant="body2">• Sentiment: <span style={{ color: "#ff1744" }}>Risk-Off</span></Typography>
      <Typography variant="body2">• Volume: <span style={{ color: "#ff1744" }}>Spiked</span></Typography>

      {/* Market Snapshot */}
      <Typography variant="h6" gutterBottom mt={2}>Market Snapshot:</Typography>
      <Typography variant="body2">• Not available on OTC Markets</Typography>

      {/* Additional Metrics */}
      <Typography variant="h6" gutterBottom mt={2}>Additional Metrics:</Typography>
      <Typography variant="body2">• Bid-Ask Spread: <span style={{ color: "#ff1744" }}>Narrow, high liquidity</span></Typography>
      <Typography variant="body2">• Volume Profile: <span style={{ color: "#ff1744" }}>High volume, supports price</span></Typography>
      <Typography variant="body2">• Order Flow: <span style={{ color: "#ff1744" }}>Decrease in buying, potential reversal</span></Typography>

      {/* Technical Analysis */}
      <Typography variant="h6" gutterBottom mt={2}>Technical Analysis:</Typography>
      <Typography variant="body2">• RSI (14): <span style={{ color: "#ff1744" }}>Overbought and Stalling</span></Typography>
      <Typography variant="body2">• MACD: <span style={{ color: "#ff1744" }}>Declining from High Levels</span></Typography>
      <Typography variant="body2">• Bollinger Bands: <span style={{ color: "#ff1744" }}>Oscillating Around Middle Band</span></Typography>
      <Typography variant="body2">• Pattern: <span style={{ color: "#ff1744" }}>Hesitation</span></Typography>

      {/* Retry Button */}
      <Button
        variant="contained"
        sx={{ mt: 2, backgroundColor: "#e91e63", '&:hover': { backgroundColor: "#c2185b" } }}
        fullWidth
        onClick={() => {
            setLower(!Lower)
        }}
      >
        Retry
      </Button>
    </Box>
  );
}
