// import React from 'react';
// import { Button, TextField, Card, CardContent, Grid } from '@mui/material';
// import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'; // Import the date adapter
// import './Appointment.css';

// export const Appointment = () => {
//   return (
//     <LocalizationProvider dateAdapter={AdapterDateFns}> {/* Wrap with LocalizationProvider */}
//       <div className="service-station">
//         <Card elevation={3}>
//           <CardContent>
//             <h1>Service Station Appointment</h1>
//             <p>Continue to book your appointment</p>
//             <h2>Help</h2>
//             <Grid container spacing={2}>
//               <Grid item xs={4}>
//                 <Button variant="contained" onClick={() => alert('Call Us')}>Call Us</Button>
//               </Grid>
//               <Grid item xs={4}>
//                 <Button variant="contained" onClick={() => alert('Email Us')}>Email Us</Button>
//               </Grid>
//               <Grid item xs={4}>
//                 <Button variant="contained" onClick={() => alert('Search FAQs')}>Search FAQs</Button>
//               </Grid>
//             </Grid>
//             <Grid container spacing={2}>
//               <Grid item xs={12}>
//                 <TextField label="Vehicle Type" variant="outlined" fullWidth />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField label="Mobile number" variant="outlined" fullWidth />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField label="Email address" variant="outlined" fullWidth />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField label="Short Description of vehicle issue..." variant="outlined" fullWidth multiline rows={4} />
//               </Grid>
//               <Grid item xs={12}>
//                 <DatePicker label="Select a date" onChange={(date) => console.log(date)} renderInput={(params) => <TextField {...params} />} />
//               </Grid>
//             </Grid>
//           </CardContent>
//         </Card>
//       </div>
//     </LocalizationProvider>
//   );
// };
