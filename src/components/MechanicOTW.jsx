import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import './MechanicOTW.css';

const MechanicOTW = () => {
  return (
    <Card className="mechanic-on-the-way">
      <CardContent>
        <div className="profile-header">
          <img src="path/to/profile-image.png" alt="Mechanic" className="profile-image" />
          <Typography variant="h5">James M.</Typography>
          <Typography variant="body2">Specialist in brakes, 4.9 rating</Typography>
          <Typography variant="body2">ETA 12:35 PM</Typography>
        </div>
        <div className="map-container">
          <img src="path/to/map-image.png" alt="Map" className="map-image" />
        </div>
        <Button variant="contained" className="call-button">Call James</Button>
        <Typography variant="body2">2017 Tesla Model S</Typography>
      </CardContent>
    </Card>
  );
};

export default MechanicOTW;