import React from 'react';
import { Box, Button, Typography } from '@mui/material';

const EmailNotification: React.FC = () => {
  return (
    <Box 
      
      sx={{backgroundColor:'white',
      
        borderWidth: 1, 
        borderStyle: 'solid', 
        borderColor: 'rgb(238, 238, 238) rgb(170, 170, 170) rgb(170, 170, 170) rgb(204, 204, 204)',
        borderTopLeftRadius: '0.5rem',
        borderTopRightRadius: '0.5rem'
      }}
    >

      
        
                          <img src="/assets/email.png" alt="Email page" className="mx-auto w-1/2" />

          <Box sx={{display:'flex',
            flexDirection:'row',
            gap:2
          }}>
            <Typography sx={{fontWeight:'bold'}}>Subject:</Typography>
            <Typography>Free Tacos, every Tuesday</Typography>
          
            </Box>
            <Box sx={{display:'flex',
            flexDirection:'row',
            gap:7
          }}>
            <Typography sx={{fontWeight:'bold'}}>To:</Typography>
            <Typography>Vic</Typography>
          
            </Box>
           
          <Box >
            <img src="/assets/taco.png" alt="A taco" className="mx-auto w-1/2" />
          </Box>
      
   
        <Box sx = {{backgroundColor: 'black', color:'white', fontWeight:'bold', p:2}}>
        LIMITED TIME OFFER - CLICK HERE
        </Box>

    
    </Box>
  );
};

export default EmailNotification;
