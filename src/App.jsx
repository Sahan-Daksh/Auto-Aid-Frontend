import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from './components/HomeScreen';
import NearbyServiceStations from './components/NearbyServiceStations';
import ServiceDetail from './components/ServiceStationDetail';
import { SupportChoices } from './components/SupportChoices';
import MechanicOTW from './components/MechanicOTW';
import ProfileScreen from './components/UserProfile2';  // Replacing Profile
import PaymentCheckout from './components/Checkout';
import IncomingJob from './components/IncommingJob';
import ActiveJob from './components/ActiveJob';
import JobCompletion from './components/JobCompletion';
import PaymentConfirmation from './components/PaymentConfirmation';
import MechanicProfile from './components/MachanicProfile';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/HomeScreen" element={<HomeScreen />} />
        <Route path="/NearbyServiceStations" element={<NearbyServiceStations />} />
        <Route path="/ServiceDetail" element={<ServiceDetail />} />
        <Route path="/SupportChoices" element={<SupportChoices />} />
        <Route path="/MechanicOTW" element={<MechanicOTW />} />
        <Route path="/ProfileScreen" element={<ProfileScreen />} />
        <Route path="/PaymentCheckout" element={<PaymentCheckout />} />
        <Route path="/IncomingJob" element={<IncomingJob />} />
        <Route path="/ActiveJob" element={<ActiveJob />} />
        <Route path="/JobCompletion" element={<JobCompletion />} />
        <Route path="/PaymentConfirmation" element={<PaymentConfirmation />} />
        <Route path="/MechanicProfile" element={<MechanicProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
