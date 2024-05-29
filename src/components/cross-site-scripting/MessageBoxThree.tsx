// MessageBoxThree.tsx
import React from 'react';
import { Grid } from '@mui/material';
import MessageBoxOne from './MessageBoxOne';

const MessageBoxThree: React.FC = () => {
  return (
    <Grid container spacing={35}>
      <Grid item xs={12} md={6}>
        <MessageBoxOne imageSrc="/assets/vic-baking.png "   altText="The victim" />
      </Grid>
      <Grid item xs={12} md={6}>
        <MessageBoxOne imageSrc="/assets/mal-pensive.png " altText="The hacker" reverse />
      </Grid>
    </Grid>
  );
};

export default MessageBoxThree;
