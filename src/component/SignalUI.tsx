import { Box, Button, Typography, Divider } from "@mui/material";
import { useState } from "react";
import OTCMarket from "./OTCMarket";
import axios from "axios";
import CircularProgress from '@mui/material/CircularProgress';
interface SignalProps{
    setSelectedTime :()=> void
    Time:String
    Stock?:string
    type?:string
  }
 const SignalUI:React.FC<SignalProps> = ({
    Time,
    setSelectedTime,
    Stock,
    type
 }) => {
    const [ShowOTC , setShowOTC] = useState(false)
    const [ResData , setResData] = useState(null)
    const [loader , setloader] = useState(false)
    const date = new Date()
      const handleSelectTime = () => {
        console.log(Stock, Time+"m","api adtaa")
        setloader(true)
        var config = {
          method: "get",
          url:`http://192.168.18.249:4000/api/v1/stock/?stock=${Stock}&time=${Time+"m"}&type=${type}`,
          headers: { "Content-Type": "application/json" },
        };
        
        axios(config).then(function (response:any) {
          console.log(response.data);
          if (response.data) {
            setResData(response?.data?.Prediction)
            setShowOTC(true)
            setloader(false)
          }
        })
        .catch(function (error:any) {
          console.log(error);
          setloader(false)
        })
      }
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
        <Typography variant="body2" fontWeight="bold" color="#888" textTransform={"uppercase"}>
          {type} MARKET
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
          {Time}  {Time==="1"?"minute":"minutes"}
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
          onClick={() => {
            !loader &&
            handleSelectTime()
          } 
        }
        >
          {loader?<CircularProgress size={20}/>:"GET A SIGNAL"}
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
        <OTCMarket ResData={ResData} />
    }
    </Box>
  );
}
export default SignalUI;
