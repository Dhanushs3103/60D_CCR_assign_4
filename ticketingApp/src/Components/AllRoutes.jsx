// Packages
import React from 'react'
import {Routes, Route} from 'react-router-dom'

// local imports
import Home from '../Pages/Home' // import Home.jsx
import About from '../Pages/About' // import About.jsx
import Contact from '../Pages/Contact' // import Contact.jsx
import Login from '../Pages/Login' // import Login.jsx
import Tickets from '../Pages/Tickets' // import Tickets.jsx
import TicketView from '../Pages/TicketView' // import TicketView.jsx
import TicketCreate from '../Pages/TicketCreate' // import TicketCreate.jsx
import TicketEdit from '../Pages/TicketEdit' // import TicketEdit.jsx


export default function AllRoutes() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} /> {/* Route for home page*/}
      <Route path="/about" element={<About />} />  {/* Route for about page*/}
      <Route path="/contact" element={<Contact />} /> {/* Route for contact page*/}
      <Route path="/login" element={<Login />} /> {/* Route for login page*/}
      <Route path="/tickets" element={<Tickets />} /> {/* Route for tickets page*/}
      <Route path="/tickets/view/:ticketId" element={<TicketView />} /> {/* Route for ticket View page*/}
      <Route path="/tickets/createTicket" element={<TicketCreate />} /> {/* Route for ticket create page*/}
      <Route path="tickets/view/edit/:ticketId" element={<TicketEdit />} /> {/* Route for ticket edit page*/}
    </Routes>
      
    </>
  )
}
