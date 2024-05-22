"use client";
import React, { useState } from 'react';
import { Container, Grid, Paper, Typography, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CustomTypography from './CustomTypography';
import MessageBox from './MessageBox';
import messages from './cssTexts'; // Assuming this is an array of messages

const CrossSiteScripting: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showSecondBox, setShowSecondBox] = useState(false);

  const handleNextButtonClick = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      if (nextIndex >= messages.length) {
        throw new Error('No more messages available');
      }
      if (nextIndex === 2) {
        setShowSecondBox(true);
      }
      return nextIndex;
    });
  };

  const isButtonDisabled = currentIndex >= messages.length;

  return (
    <div>
      <Container>
        <CustomTypography variant="h4" sx={{ my: 4, textAlign: 'center' }}>
          Cross-Site Scripting
        </CustomTypography>

        <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 2, maxWidth: 500, width: '100%' }}>
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
            </Paper>
          </Grid>
          <MessageBox />
          {showSecondBox && <MessageBox />}
        </Grid>
      </Container>
    </div>
  );
};

export default CrossSiteScripting;
