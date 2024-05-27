// Second file: MessageBoxSeven.tsx
import React from 'react';
import { Box, Card, Grid, Paper, TextField, Typography } from '@mui/material';

interface MessageBoxProps {
  imageSrc3?: string;
  // imageSrc2?string;
}

const MessageBoxSeven: React.FC<MessageBoxProps> = ({imageSrc3}) => {
  return (
    <Grid item xs={12} md={6}>
      {/* <Paper elevation={3} sx={{  maxWidth: 400 }}> */}
      <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'start',
            gap: 1,
            width: '100%',
          }}
        >

      <img src = {imageSrc3 || "/assets/mal-pensive.png" } alt="mal-pensive" style={{ width: '50%', height: '50%' }} />
      <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            gap: 1,
            // width: '100%',
          }}
        >
              <Box sx={{ display: 'flex',flexDirection: 'column', alignItems: 'center' }}>
          <img src="/assets/haxxed.png" alt="haxxed page" style={{ width: '80%', height: '80%' }} />
          <img src="/assets/ur-hacked-background.gif" alt="ur hacked " style={{ width: '80%', height: '80%' }} />

          </Box>
     
        </Box>
        </Box>
   
      {/* </Paper> */}
    </Grid>
  );
};

export default MessageBoxSeven;
