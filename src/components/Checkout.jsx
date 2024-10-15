import React from 'react';
import { Card, CardContent, CardActions, Button, Typography } from '@mui/material';
import './Checkout.css';

const ServiceCard = ({ serviceName, rating, fareBreakdown, specialRemarks, paymentMethod }) => {
  return (
    <Card className="service-card">
      <CardContent>
        <Typography variant="h5">{serviceName}</Typography>
        <Typography variant="body2">{rating}</Typography>
        <FareBreakdown breakdown={fareBreakdown} />
        <Typography variant="body2">Special remarks: {specialRemarks}</Typography>
      </CardContent>
      <CardActions>
        <PaymentMethod method={paymentMethod} />
        <Button variant="contained">Confirm and Pay</Button>
      </CardActions>
    </Card>
  );
};

const FareBreakdown = ({ breakdown }) => {
  return (
    <div>
      <Typography variant="h6">Fare breakdown</Typography>
      {Object.entries(breakdown).map(([key, value]) => (
        <Typography key={key}>{key}: ${value}</Typography>
      ))}
    </div>
  );
};

const PaymentMethod = ({ method }) => {
  return (
    <Typography variant="body2">Payment method: {method}</Typography>
  );
};

export const PaymentCheckout = () => {
  const services = [
    {
      serviceName: 'Car Inspection',
      rating: '4.5 (6 reviews)',
      fareBreakdown: {
        'Base fare': 120,
        'Spare parts': 150,
        'Additional fees': 10,
        'Total': 280
      },
      specialRemarks: 'The car is in good shape overall, but the tires need to be replaced soon.',
      paymentMethod: 'Visa (**** 1234)',
    },
    {
      serviceName: 'Mechanic Service',
      rating: '2hr 15min - $235/hr',
      fareBreakdown: {
        'Base fare': 0,
        'Time-based charges': 0,
        'Spare parts': 0,
        'Additional fees': 0,
        'Total': 0
      },
      specialRemarks: 'Your car is in good shape, no additional service needed.',
      paymentMethod: 'Visa ending in 4321',
    }
  ];

  return (
    <div className="payment-checkout">
      {services.map((service, index) => (
        <ServiceCard key={index} {...service} />
      ))}
    </div>
  );
};