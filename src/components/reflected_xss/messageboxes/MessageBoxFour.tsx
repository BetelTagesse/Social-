import React from 'react';
import { Box, Grid, Paper, TextField, Typography } from '@mui/material';
import CustomSearchInput from '../CustomSearchInput';

interface MessageBoxProps {
  imageSrc?: string;
}

const MessageBoxFour: React.FC<MessageBoxProps> = ({ imageSrc }) => {
  return (
    <Grid item xs={12} md={6}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'start',
          width: '100%',
        }}
      >
<img src={imageSrc || '/assets/mal-pensive.png'} alt="Welp page"  style={{ maxHeight: '300px', maxWidth: '300px' }} />
        <Paper elevation={3}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'start',
              width: '100%',
            }}
          >
            <img src="/assets/welp-com.png" alt="Welp " style={{  width: '100%', height: '100%' }} />
            <Box
              sx={{
                backgroundColor: 'rgb(255, 0, 0)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                width: '100%',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  width: '100%',
                }}
              >
                <img src="/assets/welp.png" alt="The logo" style={{ maxHeight: '5rem', width: '100%', height: '100%' }} />
                <img src="/assets/welp-shrug.png" alt="A shrug" style={{ maxHeight: '5rem', width: '100%', height: '100%' }} />
              </Box>
              <Typography sx={{ fontSize: '1rem', color: 'white', pl: 3, py: 2 }}>
                The indifferent restaurant review site
              </Typography>
            </Box>
            <Typography sx={{ fontWeight: 'semi-bold', px: 3 }}>I guess you should search for food or something</Typography>
            <TextField
              variant="outlined"
              size="small"
              placeholder="Enter your search..."
              sx={{
                width: '100%',
                px: 0.5,
                py: 3,
              }}
              InputProps={{
                style: {
                  borderRadius: '0.75rem',
                  borderColor: '#6b7280',
                },
              }}
            />
          </Box>
        </Paper>
      </Box>
    </Grid>
  );
};

export default MessageBoxFour;
