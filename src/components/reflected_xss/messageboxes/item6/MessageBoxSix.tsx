import React from 'react';
import MessageBoxFour from '../MessageBoxFour'; 
import { Box, Typography } from '@mui/material';
import { blue } from '@mui/material/colors';
import NotificationMessage  from './notification';

const MessageBoxSix: React.FC = () => {
  return (
    <Box>
   {/* {notificationMessage} */}
   <NotificationMessage/>
      <MessageBoxFour imageSrc="/assets/hacker.png" />
    </Box>
  );
};

export default MessageBoxSix;
