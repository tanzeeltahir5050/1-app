import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Mid from './components/Mid'
import Features from './components/Features'
import Pricing from './components/Pricing'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Mid />
      <Features />
      <Pricing />
    </>
  )
}

export default App