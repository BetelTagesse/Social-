import React, { useEffect, useState } from 'react';
import { Box, Paper, Typography, TextareaAutosize } from '@mui/material';

interface MessageBoxOneProps {
  imageSrc?: string;
  altText?: string;
  reverse?: boolean;
  firstLine?: string;
  firstContent?: string;
  secondLine?: string;
  secondContent?: string;
  textareaValue?: string;
  onCompletion?: () => void; // Callback function to be called on completion
}

const MessageBoxOne: React.FC<MessageBoxOneProps> = ({
  imageSrc,
  altText,
  reverse = false,
  firstLine,
  firstContent,
  secondLine,
  secondContent,
  textareaValue = '',
  onCompletion,
}) => {
  const [typedValue, setTypedValue] = useState<string>('');

  useEffect(() => {
    if (textareaValue) {
      // Simulate typing effect
      let index = 0;
      const intervalId = setInterval(() => {
        setTypedValue((prev) => prev + textareaValue[index]);
        index++;
        if (index === textareaValue.length) {
          clearInterval(intervalId);
          // Call the onCompletion callback function when the typing is completed
          if (onCompletion) {
            onCompletion();
          }
        }
      }, 100);
      return () => clearInterval(intervalId);
    }
  }, [textareaValue, onCompletion]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: reverse ? 'row-reverse' : 'row',
        alignItems: 'start',
        gap: 2,
        width: '100%',
      }}
    >
      <img src={imageSrc || '/vic-baking.png'} alt={altText || 'Default Alt Text'} style={{ width: '55%', maxHeight: 370 }} />
      <Paper elevation={3} sx={{ backgroundColor: 'black', maxWidth: '100%' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <img src="/assets/searchpage.png" alt="Search Page" style={{ width: '100%', height: 'auto' }} />
          <Box sx={{ backgroundColor: 'black', fontSize: '0.875rem', paddingY: 0.125, borderRadius: '0.5rem' }}>
            <Box sx={{ display: 'flex', my: 2 }}>
              <Box pr={3}>
                <img src="/assets/bread.png" alt="A loaf" />
              </Box>
              <Typography fontWeight="bold" color="white">
                How Much do you folks like bread?
              </Typography>
            </Box>
            <Box sx={{ mx: 3, my: 1, px: 2, py: 1, backgroundColor: '#4A5568', color: 'white', borderRadius: '0.25rem', mb: 1 }}>
              <Typography variant="body2" fontWeight="bold" paddingBottom="0.125rem">
                {firstLine || 'I_knead_you_right_now'}
              </Typography>
              <Typography variant="body2">
                {firstContent || 'I love it so much, I think I might be part duck'}
              </Typography>
            </Box>
            <Box sx={{ mx: 3, my: 1, px: 2, py: 1, backgroundColor: '#4A5568', color: 'white', borderRadius: '0.25rem', mb: 1 }}>
              <Typography variant="body2" fontWeight="bold" paddingBottom="0.125rem">
                {secondLine || 'butter_you_than_me'}
              </Typography>
              <Typography variant="body2">
                {secondContent || '...'}
              </Typography>
            </Box>
            <Box sx={{ mx: 1, mt: 2, mb: 1, px: 2, py: 1 }}>
              <TextareaAutosize
                minRows={4}
                style={{
                  width: '100%',
                  backgroundColor: '#2D3748',
                  color: 'white',
                  fontSize: '0.75rem',
                  padding: '0.5rem 0.25rem',
                  resize: 'none',
                  border: 'none',
                  outline: 'none',
                }}
                value={typedValue}
                readOnly
              />
            </Box>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default MessageBoxOne;
