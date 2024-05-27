// Second file: MessageBoEightx.tsx
import React from 'react';
import { Box, Card, Grid, Paper, TextField, Typography } from '@mui/material';
import FoodBankIcon from '@mui/icons-material/FoodBank';
import searchpage from '../../assets/searchpage.png'

const MessageBoxEight: React.FC = () => {
  return (
    <Grid item xs={12} md={6}>
      <Paper elevation={3} sx={{ p: 2, backgroundColor: 'black', maxWidth: 400 }}>
     
          <img src="/assets/victim.png" alt=" victim" style={{ width: '100%', height: '100%' }} />
          
         
         
      </Paper>
    </Grid>
  );
};

export default MessageBoxEight;
