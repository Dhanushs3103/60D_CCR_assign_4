// Packages
import React from 'react'
import {Routes, Route} from 'react-router-dom'

// local imports
import Home from '../Pages/Home'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import Login from '../Pages/Login'
import Tickets from '../Pages/Tickets'
import TicketCreate from '../Pages/TicketCreate'
import TicketView from '../Pages/TicketView'
import TicketEdit from '../Pages/TicketEdit'


export default function AllRoutes() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/tickets" element={<Tickets />} />
      <Route path="/tickets/create" element={<TicketCreate />} />
      <Route path="/tickets/:id" element={<TicketView />} />
      <Route path="/tickets/:id/edit" element={<TicketEdit />} />
    </Routes>
      
    </>
  )
}
