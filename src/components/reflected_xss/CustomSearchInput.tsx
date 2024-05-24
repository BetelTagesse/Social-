import React from 'react';
import { Box, TextField } from '@mui/material';

const CustomSearchInput: React.FC = () => {
  return (
    <Box sx={{ mx: 5, mt: 2, mb: 2 }}>
      <TextField
        variant="outlined"
        placeholder="Enter your search..."
        sx={{
          '& .MuiOutlinedInput-root': {
            fontSize: '0.75rem', // Smaller font size
            borderRadius: '1rem', // Smaller border radius
            borderColor: 'gray', // Border color
            px: 2, // Smaller horizontal padding
            py: 1, // Smaller vertical padding
            '& fieldset': {
              borderColor: '#4b5563', // Border color on fieldset
              borderWidth: '1px', // Smaller border width
            },
            '&:hover fieldset': {
              borderColor: '#4b5563', // Border color on hover
            },
            '&.Mui-focused fieldset': {
              borderColor: '#4b5563', // Border color on focus
            },
          },
          width: '100%',
        }}
      />
    </Box>
  );
};

export default CustomSearchInput;
