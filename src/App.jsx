import React from 'react'
import './App.css'
import HomeScreen from './components/HomeScreen'
import NearbyServiceStations from './components/NearbyServiceStations'
import ServiceDetail from './components/ServiceStationDetail'
import { SupportChoices } from './components/SupportChoices'
import MechanicOTW from './components/MechanicOTW'
import Profile from './components/UserProfile'
// import { Appointment } from './components/Appointment'
import PaymentCheckout from './components/Checkout'
import IncomingJob from './components/IncommingJob'
import ActiveJob from './components/ActiveJob'
import JobCompletion from './components/JobCompletion'
import PaymentConfirmation from './components/PaymentConfirmation'
import MachanicProfile from './components/MachanicProfile'
import ProfileScreen from './components/UserProfile2'
import NavBar from './components/NavBar'
import BookingAppointment from './components/BookingAppointment'

function App() {
  return (
    <>
      <HomeScreen/>
      <NearbyServiceStations/>
      <ServiceDetail/>
      <SupportChoices/>
      <MechanicOTW/>
      <ProfileScreen/>
      {/* <Profile/> */}
      {/* <Appointment/> */}
      <PaymentCheckout/>
      <IncomingJob/>
      <ActiveJob/>
      <JobCompletion/>
      <PaymentConfirmation/>
      <MachanicProfile/>
      {/* <NavBar/> */}
      <BookingAppointment/>
    </>
  )
}

export default App
