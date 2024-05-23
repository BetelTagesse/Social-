"use client";
import React, {useState} from "react";
import { Container, Grid, Paper, Typography, Button, Box, TextField } from '@mui/material';

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import HomeIcon from "@mui/icons-material/Home";

import CustomButton from "./CustomButton";
import CustomTypography from "./CustomTypography";
import CodeReview from "./CodeReview";
import messages from './messages'; // Assuming this is an array of messages
import securebank from '../../assets/securebank.png'


const SqlInjection: React.FC = () => {
  const handleButtonClick = () => {
    // Handle button click logic here
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showSecondBox, setShowSecondBox] = useState(false);


  const handleNextButtonClick = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      // if (nextIndex >= messages.length) {
      //   throw new Error('No more messages available');
      // }
      if (nextIndex === 2) {
        setShowSecondBox(true);
      }
      return nextIndex;
    });
  };


  const handleListItemClick = (index: number) => {
    setCurrentIndex(index);
    if (index >= 2) {
      setShowSecondBox(true);
    } else {
      setShowSecondBox(false);
    }
  };

  const isButtonDisabled = currentIndex >= messages.length;


  return (
    <Container>
      <CustomTypography variant="h4" sx={{ my: 4, textAlign: "center" }}>
        SQL INJECTION
      </CustomTypography>
      <Box sx={{ display: 'flex', justifyContent: 'center', paddingRight: 5 }}>
    <ol style={{ display: 'flex', listStyle: 'none', padding: 0 }}>
      {messages.map((_, index) => (
        <li key={index} style={{ position: 'relative', paddingRight: '20px' }}>
          {index < messages.length - 1 && (
            <div style={{ position: 'absolute', inset: '0', display: 'flex', alignItems: 'center' }}>
              <div style={{ height: '2px', width: '100%', backgroundColor: 'gray' }}></div>
            </div>
          )}
          <span
            onClick={() => handleListItemClick(index)}
            style={{
              position: 'relative',
              display: 'flex',
              height: '16px',
              width: '16px',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '50%',
              border: '2px solid gray',
              backgroundColor: 'white',
              cursor: 'pointer',
            }}
          >
            <span style={{ height: '8px', width: '8px', borderRadius: '50%', backgroundColor: 'gray' }}></span>
          </span>
        </li>
      ))}
    </ol>
  </Box>
      <Grid container spacing={2}>
        <Grid item spacing={10} xs={12} md={6}>
          {/* <Paper elevation={3} sx={{ p: 2 }}> */}
          
   
  <Grid  spacing={10} sx={{ display: 'flex', justifyContent: 'center',paddingBottom:10 }}>
    {/* <Grid item xs={12} md={6}> */}
      <Paper elevation={5}  sx={{ p: 2, maxWidth: 500, width: '100%' }}>
        <Typography sx={{ mt: 2 }}>
          {Object.values(messages[currentIndex])[0]}
        </Typography>
        <Button
          variant="outlined"
          size="small"
          onClick={handleNextButtonClick}
          disabled={isButtonDisabled}
          sx={{ mt: 2 }}
        >
          <ArrowForwardIcon />
        </Button>
      {/* </Paper> */}
      </Paper>
  </Grid>
           
           
          
      
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "column", lg: "row" },
                gap: 3,
              }}
            >
              <form>
                <TextField label="Username" fullWidth sx={{ my: 1 }} />
                <TextField label="Password" fullWidth sx={{ my: 1 }} />
                <CustomButton variant = "contained"  fullWidth sx={{ mt: 2 }}>
                  Log in
                </CustomButton>
              </form>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                        <img src="/assets/searchpage.png" alt="Search Page" style={{ width: '100%', height: '100%' }} />

                  <HomeIcon sx={{ mr: 1 }} />

                  <CustomTypography variant="h5">SECURE BANK</CustomTypography>
                </Box>

                <CustomTypography>
                  You can trust us with your money, we almost never get hacked.
                </CustomTypography>
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SqlInjection;
