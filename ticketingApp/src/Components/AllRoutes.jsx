// Packages
import React from 'react'
import {Routes, Route} from 'react-router-dom'

// local imports
import Home from '../Pages/Home'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import Login from '../Pages/Login'
import Tickets from '../Pages/Tickets'


export default function AllRoutes() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/tickets" element={<Tickets />} />
    </Routes>
      
    </>
  )
}
