"use client";
import {
  Container,
  Grid,
  Paper,
  Typography,
  Box,
  Card,
  TextField,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import FoodBankIcon from "@mui/icons-material/FoodBank";

import CustomTypography from "./CustomTypography";
import CustomButton from "./CustomButton";

import messages from "./cssTexts";

import { useState } from "react";

const CrossSiteScripting = () => {
  const handleButtonClick = () => {
    console.log("Button clicked!");
  };
  //   const [clicked, setClicked] = useState(false);

  //   const handleButtonClick = () => {
  //     setClicked(true);
  //   };
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextButtonClick = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      if (nextIndex >= messages.length) {
        throw new Error("No more messages available");
      }
      return nextIndex;
    });
  };

  const isButtonDisabled = currentIndex >= messages.length;

  return (
    <div>
      <Container>
        <CustomTypography variant="h4" sx={{ my: 4, textAlign: "center" }}>
          Cross-Site Scripting
        </CustomTypography>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Paper elevation={3} sx={{ p: 2, maxWidth: 500, width: "80%" }}>
            <CustomTypography sx={{ mt: 2 }}>
              {Object.values(messages[currentIndex])[0]}
            </CustomTypography>

            <CustomButton
              variant="outlined"
              size="small"
              onClick={handleNextButtonClick}
              disabled={isButtonDisabled}
              sx={{ position: "absolute", top: 8, right: 8 }}
            >
              <ArrowForwardIcon />
            </CustomButton>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper
            elevation={3}
            sx={{ p: 2, backgroundColor: "black", maxWidth: 400 }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                gap: 1,
                width: "100%", // Adjust the width as needed
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  // width: "70%", // Adjust the width as needed
                }}
              >
                <FoodBankIcon sx={{ fontSize: 30, color: "white" }} />
                <Typography variant="body2" sx={{ color: "white" }}>
                  How much do you folks like bread?
                </Typography>
              </Box>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "rgba(169,169,189)",
                  width: "100%",
                }}
              >
                <Typography>roll_with_it</Typography>
                <Typography>I dream of baking tins.</Typography>
              </Card>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "rgba(169,169,189)",
                  width: "100%",
                }}
              >
                <Typography>I_knead_you_right_now</Typography>
                <Typography>
                  I love it so much, I think I might be part of the duck
                </Typography>
              </Card>
              <TextField
                fullWidth
                label=""
                id="fullWidth"
                sx={{
                  backgroundColor: "rgba(169,169,189)",
                  "& input": {
                    color: "white",
                  },
                  // height: "68px",
                }}
              />
            </Box>
          </Paper>
        </Grid>
      </Container>
    </div>
  );
};

export default CrossSiteScripting;
