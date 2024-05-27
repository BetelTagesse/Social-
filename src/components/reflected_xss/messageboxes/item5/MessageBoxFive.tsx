// Second file: MessageBoxFive.tsx
import React from 'react';
import { Box, Card, Grid, Paper, TextField, Typography } from '@mui/material';
import FoodBankIcon from '@mui/icons-material/FoodBank';
import searchpage from '../../assets/searchpage.png'
import CustomSearchInput from '../../CustomSearchInput';
import SearchResults from './SearchResultItem.tsx';

const MessageBoxFive: React.FC = () => {
  return (
    <Grid item xs={12} md={6}>
      
      <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'start',
            // gap: 1,
            width: '100%',
          }}
        >
                              <img src="/assets/mal-pensive.png" alt="hacker " style={{ maxHeight: '' ,width: '100%', height: '100%'  }} />
                              <Paper elevation={3} >
                              <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            // gap: 1,
            width: '100%',
          }}
        >

                    <img src="/assets/welp-com.png" alt="Welp Page" style={{ maxHeight: '5rem' ,width: '100%', height: '100%'  }} />

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
        

        <img
          src="/assets/welp.png"
          alt="The logo"
          style={{ maxHeight: '5rem' ,width: '100%', height: '100%' }}
        />
        <img
          src="/assets/welp-shrug.png"
          alt="A shrug"
          style={{ maxHeight: '5rem' ,width: '100%', height: '100%'  }}
        />
      </Box>
      <Typography
        sx={{
          fontSize: '1rem',
          color: 'white',
          pl: 3,
          py: 2,
        }}
      >
        The indifferent restaurant review site
      </Typography>
  
    </Box>
 
     <SearchResults/>
        </Box>
        </Paper>
        </Box>
   
       
    
    </Grid>
  );
};

export default MessageBoxFive;
