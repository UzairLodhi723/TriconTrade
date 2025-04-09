import { Box, Button, Typography, Divider } from "@mui/material";
import { useState } from "react";
import OTCMarket from "./OTCMarket";
interface SignalProps{
    setSelectedTime :()=> void
    Time:String
    Stock?:string
  }
 const SignalUI:React.FC<SignalProps> = ({
    Time,
    setSelectedTime,
    Stock
 }) => {
    const [ShowOTC , setShowOTC] = useState(false)
    const date = new Date()
  return (
    <Box>
    <Box
      sx={{
        backgroundColor: "#121212",
        color: "#fff",
        p: 3,
        borderRadius: 2,
        textAlign: "left",
        maxWidth: 400,
        mx: "auto",
        mt:2
      }}
    >
      <Typography variant="h6" fontWeight="bold" mb={2}>
        WORKSPACE
      </Typography>

      <Box mb={2}>
        <Typography variant="body2" color="#888">
          CATEGORY
        </Typography>
        <Typography variant="body1" fontWeight="bold">
          CURRENCIES
        </Typography>
        <Typography variant="body2" fontWeight="bold" color="#888">
          STOCK MARKET
        </Typography>
      </Box>

      <Divider sx={{ backgroundColor: "#333", mb: 2 }} />

      <Box mb={2}>
        <Typography variant="body2" color="#888">
          PAIR
        </Typography>
        <Typography variant="body1">
          <span style={{ color: "#ff5252" }}>{Stock}</span> | {date.toLocaleTimeString()} | {date.toLocaleDateString()} UTC-4
        </Typography>
      </Box>

      <Box mb={2}>
        <Typography variant="body2" color="#888">
          T. TIME
        </Typography>
        <Typography variant="body1" fontWeight="bold">
          {Time}
        </Typography>
      </Box>

      <Divider sx={{ backgroundColor: "#333", mb: 2 }} />

      <Typography variant="body2" fontWeight="bold" mb={1}>
        KATCHER AI BETA
      </Typography>
      <Typography variant="body2" color="#888">
        INFORMATION
      </Typography>
      <Typography variant="body2" fontWeight="bold">
        IS RELEVANT WITHIN
      </Typography>
      <Typography variant="body2" fontWeight="bold">
        A MINUTE AFTER RECEIVING
      </Typography>
      <Typography
        variant="body2"
        sx={{ color: "#ff5252", cursor: "pointer", textDecoration: "underline" }}
      >
        CONTACT SUPPORT ›
      </Typography>

      <Box sx={{ display: "flex", gap: 2, mt: 3 }}>
        <Button
          fullWidth
          variant="contained"
          sx={{ backgroundColor: "#2c2c2c", color: "#fff" }}
          onClick={() => setShowOTC(true)}
        >
          GET A SIGNAL
        </Button>
        <Button
          fullWidth
          variant="contained"
          sx={{ backgroundColor: "#2c2c2c", color: "#fff" }}
          onClick = {() => setSelectedTime()}
        >
          CHANGE SETTINGS
        </Button>
      </Box>
    </Box>
    {
        ShowOTC && 
        <OTCMarket />
    }
    </Box>
  );
}
export default SignalUI;
