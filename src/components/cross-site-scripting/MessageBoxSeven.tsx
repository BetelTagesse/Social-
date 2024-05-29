import React from 'react';
import { Box } from '@mui/material';
import MessageBoxOne from './MessageBoxOne';

const MessageBoxSeven: React.FC = () => {
  return (
    <Box  sx= {{display:'flex', flexDirection:'row',alignItems:'center', width:'100%', gap:5}}>
     
      
      <img src="/assets/vic-baking-hacked.png " alt=" hacked" style={{ width: '55%', maxHeight: 370 }}  />
      <Box  sx= {{display:'flex', flexDirection:'column'}}>
        <img src = '/assets/haxxed.png' style={{ width: '100%'}} />
        <img src="/assets/haxxed.gif " alt="The hacker" style={{ width: '100%', minHeight: 370 }}  />

</Box>
        <img src="/assets/mal-succeed.png " alt="The hacker"  style={{ width: '55%', maxHeight: 370 }} />

      </Box>
    
  );
};

export default MessageBoxSeven;
