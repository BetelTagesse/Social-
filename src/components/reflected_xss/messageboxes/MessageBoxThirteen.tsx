import React, { useState, useEffect } from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';

const textLines = [
  "www.haxxed.com?cookie=asdfefefffasdfCsdfnEfefffasdfnEf",
  "www.haxxed.com?cookie=gkelfeniAnlJreklfNkleniAnlJrNkle",
  "www.haxxed.com?cookie=SneklfjsdkleekflaAnefjsdkleeAnef",
  "www.haxxed.com?cookie=asFFEfn222fefeknladffn222fefadff",
  "www.haxxed.com?cookie=ffasdasdfefeffCsdfnEasdfefeffnEa",
  "www.haxxed.com?cookie=engkelfiAnlJreklfNkllfiAnlJrNkll",
  "www.haxxed.com?cookie=22fefeSneklfjsdkleekeSneklfjeeke",
  "www.haxxed.com?cookie=flaAneasFFEfn2knladfeasFFEfnadfe",
  "www.haxxed.com?"
];

const MessageBoxThirteen: React.FC = () => {
  const [displayedText, setDisplayedText] = useState<string>('');

  useEffect(() => {
    let charIndex = 0;
    const fullText = textLines.join('\n');
    
    const intervalId = setInterval(() => {
      if (charIndex < fullText.length) {
        setDisplayedText(prev => prev + fullText[charIndex]);
        charIndex += 1;
      } else {
        clearInterval(intervalId);
      }
    }, 50); 

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Grid item xs={12} md={6}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'start',
          gap: 7,
          width: '100%',
          maxWidth: 600,
          p: 2
        }}
      >
        <img src="/assets/hack-complete.png" alt="hacked" style={{ width: '70%', height: '70%' }} />
        
        <Paper 
          elevation={3}
          sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            borderRadius: 2, 
            mb: 2,
            border: 1,
            borderColor: 'grey.800',
            boxShadow: 3,
            width: '100%'
          }}
        >
          <Box 
            sx={{
              backgroundColor: 'grey.100',
              color: 'grey.600',
              fontSize: '0.75rem',
              py: 1.5,
              fontWeight: 'bold',
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
              textAlign: 'center'
            }}
          >
            <Typography sx={{ px: 2 }}>output.log</Typography>
          </Box>
          <Box 
            sx={{ 
              p: 2,
              fontSize: '0.75rem',
              backgroundColor: 'black',
              color: 'lightgreen',
              minHeight: '4.5rem',  
              borderBottomLeftRadius: 8,
              borderBottomRightRadius: 8,
              // overflowX: 'auto',
              whiteSpace: 'pre-wrap'
            }}
          >
            <Typography component="pre">
              {displayedText}
            </Typography>
          </Box>
        </Paper>
      </Box>
    </Grid>
  );
};

export default MessageBoxThirteen;
