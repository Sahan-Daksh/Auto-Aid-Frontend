import React from 'react';
import { Card, CardContent, Typography, Button, Grid } from '@mui/material';
import './UserProfile.css';

const Profile = () => {
  return (
    <div className="user-profile">
      <Card className="profile-card">
        <CardContent>
          <img src="./profile-pic.png" alt="Profile" className="profile-pic" />
          <Typography variant="h5">Katherine</Typography>
          <Typography variant="body2">Joined 2019</Typography>
          <Button variant="outlined">Edit profile</Button>
        </CardContent>
      </Card>
      <Vehicles />
      <Membership />
      <ServiceHistory />
      <Mechanics />
      <OtherVehicles />
    </div>
  );
};

const Vehicles = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">Vehicles</Typography>
        <Typography variant="body1">2008 Honda CR-V</Typography>
        <Typography variant="body2">Toyota</Typography>
        <Typography variant="body2">License Plate: 72NE110</Typography>
        <Button variant="outlined">Add a new vehicle</Button>
      </CardContent>
    </Card>
  );
};

const Membership = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">Membership</Typography>
        <Typography variant="body1">Your membership</Typography>
        <Typography variant="body2">Learn more about your benefits</Typography>
      </CardContent>
    </Card>
  );
};

const ServiceHistory = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">Service history</Typography>
        <Typography variant="body1">Last service</Typography>
        <Typography variant="body2">May 4, 2023</Typography>
        <Typography variant="body2">Oil change: 2,000 miles</Typography>
      </CardContent>
    </Card>
  );
};

const Mechanics = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">My mechanics</Typography>
        <Typography variant="body1">Favorite Mechanic</Typography>
        <Typography variant="body2">5 stars</Typography>
        <Typography variant="body2">Jerry, San Francisco</Typography>
      </CardContent>
    </Card>
  );
};

const OtherVehicles = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">Other vehicles</Typography>
        <Typography variant="body1">1999 Toyota Camry</Typography>
        <Typography variant="body2">Toyota</Typography>
      </CardContent>
    </Card>
  );
};

export default Profile;