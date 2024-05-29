import React, { useEffect } from 'react';
import { Grid } from '@mui/material';
import MessageBoxOne from './MessageBoxOne';

const MessageBoxFive: React.FC = () => {
  useEffect(() => {
    alert("Your croissants are limp and sad");
  }, []);

  return (
    <Grid container spacing={35}>
      <Grid item xs={12} md={6}>
        <MessageBoxOne imageSrc="/assets/vic-baking.png" altText="The victim" />
      </Grid>
      <Grid item xs={12} md={6}>
        <MessageBoxOne
          imageSrc="/assets/hacker.png"
          altText="The hacker"
          reverse
          firstLine="roll_with_it"
          firstContent="I dream of baking this"
          secondLine="I_knead_you_right_now"
          secondContent="I love it so much, I think I might be part duck"
          textareaValue={'<script>alert("Your croissants are limp and sad")</script>'}
        />
      </Grid>
    </Grid>
  );
};

export default MessageBoxFive;
