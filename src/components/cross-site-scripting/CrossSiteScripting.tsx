import React, { useState } from 'react';
import { Container, Grid, Paper, Typography, Button, Box } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CustomTypography from './CustomTypography';
import MessageBoxOne from './MessageBoxOne';
import MessageBoxTwo from './MessageBoxTwo';
import MessageBoxThree from './MessageBoxThree';
import messages from './messages'; 
import MessageBoxFour from './MessageBoxFour';
import MessageBoxFive from './MessageBoxFive';
import MessageBoxSix from './MessageSix';
import ParentComponent from './MessageBoxSeven';

const CrossSiteScripting: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextButtonClick = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const handleListItemClick = (index: number) => {
    setCurrentIndex(index);
  };

  const isButtonDisabled = currentIndex >= messages.length;

  const renderMessageBox = () => {
    switch (currentIndex) {
      case 0:
        return <MessageBoxOne />;
      case 1:
        return <MessageBoxTwo />;
      case 2:
        return <MessageBoxThree />;
      case 3:
        return <MessageBoxFour />;
        case 4:
          return <MessageBoxFive />;
          case 5:
            return <MessageBoxSix />;
            case 6:
              return <ParentComponent />;
      default:
        return null;
    }
  };

  return (
    <Container>
      <CustomTypography variant="h4" sx={{ my: 4, textAlign: 'center' }}>
        Cross Site Scripting
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

      <Grid container spacing={10} sx={{ display: 'flex', justifyContent: 'center', paddingBottom: 10 }}>
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
      </Grid>

      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {renderMessageBox()}
        </Box>
      </Box>
    </Container>
  );
};

export default CrossSiteScripting;
