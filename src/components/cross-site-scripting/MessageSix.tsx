import React, { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import MessageBoxOne from './MessageBoxOne';

interface MessageBoxSixProps {
  navigateToNext: () => void;
}

const MessageBoxSix: React.FC<MessageBoxSixProps> = ({ navigateToNext }) => {
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    if (completed) {
      navigateToNext(); // Navigate to the next step when completed
    }
  }, [completed, navigateToNext]);

  const handleCompletion = () => {
    setCompleted(true);
  };

  return (
    <Grid container spacing={35}>
      <Grid item xs={12} md={6}>
        <MessageBoxOne imageSrc="/assets/vic-baking.png" altText="The victim" onCompletion={handleCompletion} />
      </Grid>
      <Grid item xs={12} md={6}>
        <MessageBoxOne
          imageSrc="/assets/mal-pensive.png"
          altText="The hacker"
          reverse
          firstLine="roll_with_it"
          firstContent="I dream of baking this"
          secondLine="I_knead_you_right_now"
          secondContent="I love it so much, I think I might be part duck"
          textareaValue={'<script>alert("Your croissants are limp and sad")</script>'}
          onCompletion={handleCompletion} // Set completed to true when textareaValue is done
        />
      </Grid>
    </Grid>
  );
};

export default MessageBoxSix;
