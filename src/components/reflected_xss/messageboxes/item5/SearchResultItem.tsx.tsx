import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

const SearchResultItem: React.FC<{ name: string; description: string }> = ({ name, description }) => (
  <Box sx={{ display: 'flex', pt: 2 }}>
    <img src="/assets/taco.png" alt="A taco" style={{ height: '7rem' }} />
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', pl: 7 }}>
      <Typography sx={{ fontWeight: 'bold', color: 'gray', pt: 2 }}>{name}</Typography>
      <img src="/assets/rating.png" alt="A rating" style={{ maxHeight: '2.5rem' }} />
      <Typography sx={{ pt: 3 }}>{description}</Typography>
    </Box>
  </Box>
);

const SearchResults: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', px: 6, pt: 5, fontSize: '0.875rem' }}>
      <Typography sx={{ fontWeight: 'bold' }}>Search results for "taco"</Typography>
      <SearchResultItem name="Dynamite Taco" description="This place sells tacos, I reckon." />
      <SearchResultItem name="Tacos Deluxe" description="Yup. Tacos here too." />
    </Box>
  );
};

export default SearchResults;
