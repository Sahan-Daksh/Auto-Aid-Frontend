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

function App() {
  return (
    <>
      <HomeScreen/>
      <NearbyServiceStations/>
      <ServiceDetail/>
      <SupportChoices/>
      <MechanicOTW/>
      <Profile/>
      {/* <Appointment/> */}
      <PaymentCheckout/>
    </>
  )
}

export default App
