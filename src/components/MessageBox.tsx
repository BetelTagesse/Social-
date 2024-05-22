import React from 'react';
import { Box, Card, Grid, Paper, TextField, Typography } from '@mui/material';
import FoodBankIcon from '@mui/icons-material/FoodBank';

const MessageBox: React.FC = () => {
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
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <FoodBankIcon sx={{ fontSize: 30, color: 'white' }} />
            <Typography variant="body2" sx={{ color: 'white' }}>
              How much do you folks like bread?
            </Typography>
          </Box>
          <Card sx={{ display: 'flex', flexDirection: 'column', backgroundColor: 'rgba(169,169,189)', width: '100%' }}>
            <Typography>roll_with_it</Typography>
            <Typography>I dream of baking tins.</Typography>
          </Card>
          <Card sx={{ display: 'flex', flexDirection: 'column', backgroundColor: 'rgba(169,169,189)', width: '100%' }}>
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
              backgroundColor: 'rgba(169,169,189)',
              '& input': {
                color: 'white',
              },
            }}
          />
        </Box>
      </Paper>
    </Grid>
  );
};

export default MessageBox;
