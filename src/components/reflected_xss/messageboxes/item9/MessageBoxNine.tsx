import React from 'react';
import { Box, Card, Grid, Paper, TextField, Typography } from '@mui/material';
import FoodBankIcon from '@mui/icons-material/FoodBank';
import searchpage from '../../assets/searchpage.png'
import EmailNotification from './EmailNotification';
import MessageBoxEight from '../MessageBoxEight';

const MessageBoxNine: React.FC = () => {
  return (
    <Grid item xs={12} md={6}>
    

      <Box sx={{display:'flex',
            flexDirection:'row',
            gap:7
          }}>
     
          <EmailNotification/>
          <MessageBoxEight/>
          </Box>
         
         
     
    </Grid>
  );
};

export default MessageBoxNine;
