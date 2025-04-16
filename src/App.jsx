import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Section1 from './components/Section1'
import Section2 from './components/Section2'
import Section3 from './components/Section3'
import Section4 from './components/Section4'
import Section5 from './components/Section5'
import Section6 from './components/Section6'
import WhatsAppButton from './components/WhatsAppButton'
import ContactPage from './components/ContactPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={
          <div className="app">
            <style jsx global>
              {`
                * {
                  font-family: 'Poppins', sans-serif;
                }
              `}
            </style>
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Section6 />
            <WhatsAppButton />
          </div>
        } />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  )
}

export default App
