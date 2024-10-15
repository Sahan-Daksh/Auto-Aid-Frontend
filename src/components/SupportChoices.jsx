import React from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import './SupportChoices.css';

export const SupportChoices = () => {
  return (
    <Box className="mechanic-support">
      <Typography variant="h5">Mechanic Support</Typography>
      <TextField label="Vehicle Number" variant="outlined" fullWidth margin="normal" />
      <TextField label="Manufactured Year" variant="outlined" fullWidth margin="normal" />
      <TextField label="Vehicle Brand" variant="outlined" fullWidth margin="normal" />
      <TextField label="Vehicle Model" variant="outlined" fullWidth margin="normal" />
      <TextField label="Fuel Type" variant="outlined" fullWidth margin="normal" />
      <TextField label="Problem Type" variant="outlined" fullWidth margin="normal" />
      <Button variant="contained" color="primary" fullWidth>
        Available Mechanics (5)
      </Button>
    </Box>
  );
};