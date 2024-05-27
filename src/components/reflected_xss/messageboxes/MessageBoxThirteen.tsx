// Second file: MessageBox.tsx
import React from 'react';
import { Box, Card, Grid, Paper, TextField, Typography } from '@mui/material';
import FoodBankIcon from '@mui/icons-material/FoodBank';
import searchpage from '../../assets/searchpage.png'

const MessageBoxThirteen: React.FC = () => {
  return (
    <Grid item xs={12} md={6}>
      <Paper elevation={3} sx={{ p: 2, backgroundColor: 'black', maxWidth: 400 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            gap: 1,
            width: '100%',
          }}
        >
          <Box sx={{ display: 'flex',flexDirection: 'column', alignItems: 'center', gap: 1 }}>
          <img src="/assets/searchpage.png" alt="Search Page" style={{ width: '100%', height: '100%' }} />
            <FoodBankIcon sx={{ fontSize: 30, color: 'white' }} />
            <Typography variant="body2" sx={{ color: 'white' }}>
              How much do you folks like bread?
            </Typography>
          </Box>
        
        
        </Box>
      </Paper>
    </Grid>
  );
};

export default MessageBoxThirteen;
