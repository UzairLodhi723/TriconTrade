import React, { useState } from "react";
import { Box, Button, Typography, TextField } from "@mui/material";
import Grid from "@mui/material/Grid2";
import TradingTimeUI from "./TradingTimeUI";
import { OTCTimes, tradingTimes } from "../utils/Mock/MockData";
interface marketProps {
  setShowMarket: () => void;
}
const MarketSelectionUI: React.FC<marketProps> = ({ setShowMarket }) => {
  const [showTradingTime, setShowTradingTime] = useState(false);
  const [showStock, setShowStock] = useState({ value: "", type: false });
  const [Stock, setStock] = useState("");
  const [search, setSearch] = useState("");

  const filteredTimes =
    showStock.value === "otc"
      ? OTCTimes.filter((time) =>
          time.toLowerCase().includes(search.toLowerCase())
        )
      : tradingTimes.filter((time) =>
          time.toLowerCase().includes(search.toLowerCase())
        );

  return (
    <Box>
      <Box
        sx={{
          backgroundColor: "#121212",
          color: "#fff",
          p: 3,
          borderRadius: 2,
          textAlign: "center",
          mt: 2,
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
            If the stock market is closed at this time, you will automatically
            switch to the OTC market.
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
          <Grid size={{ xs: 6 }}>
            <Button
              fullWidth
              variant="contained"
              sx={{ backgroundColor: "#2c2c2c", color: "#fff" }}
              onClick={() => setShowStock({ value: "stock", type: true })}
            >
              STOCK
            </Button>
          </Grid>
          <Grid size={{ xs: 6 }}>
            <Button
              fullWidth
              variant="contained"
              sx={{ backgroundColor: "#2c2c2c", color: "#fff" }}
              onClick={() => setShowStock({ value: "otc", type: true })}
            >
              OTC
            </Button>
          </Grid>
        </Grid>
        {showStock.type && (
          <Grid container spacing={2} mb={2}>
            <Grid size={{ xs: 12 }} mb={2}>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Search Stock..."
                value={search}
                sx={{ color: "#fff", borderRadius: 2 }}
                onChange={(e) => setSearch(e.target.value)}
              />
            </Grid>
            <Box
              maxHeight={200}
              overflow="auto"
              display={"flex"}
              flexDirection="row"
              flexWrap="wrap"
              justifyContent={"space-between"}
            >
              {filteredTimes.length > 0 ? (
                filteredTimes.map((time) => (
                  <Grid size={{ xs: 4 }} mt={1} key={time}>
                    <Button
                      fullWidth
                      variant="contained"
                      sx={{ backgroundColor:"#2c2c2c", color: "#fff", borderColor: Stock==time ? "white" :"#2c2c2c", border: Stock === time ? "1px solid" :"none" }}
                      onClick={() => {
                        setShowTradingTime(true);
                        setStock(time);
                      }}
                    >
                      {time}
                    </Button>
                  </Grid>
                ))
              ) : (
                <Typography variant="body2" color="#fff" mt={1} textAlign={"center"}>
                  No {showStock.value.toLocaleUpperCase()} found.
                </Typography>
              )}
            </Box>
          </Grid>
        )}
        <Button
          fullWidth
          variant="contained"
          sx={{ backgroundColor: "#2c2c2c", color: "#fff" }}
          onClick={() => setShowMarket()}
        >
          Back to menu
        </Button>
      </Box>
      {showTradingTime && (
        <TradingTimeUI
          setShowTradingTime={() => setShowTradingTime(!showTradingTime)}
          type={showStock.value}
          Stock={Stock}
        />
      )}
    </Box>
  );
};
export default MarketSelectionUI;
