// Packages
import React from 'react'
import { Link } from 'react-router-dom'
import {Flex, Spacer} from '@chakra-ui/react'

// local imports
import "../styles/Navbar.css"

export default function Navbar() {
  return (
    <Flex id="navbar" p={4} >
      <Spacer />
      <Link to='/'>Home </Link>
      <Spacer />
      <Link to='/about'>About </Link>
      <Spacer />
      <Link to='/contact'>Contact </Link>
      <Spacer />
      <Link to='/tickets'>Tickets </Link>
      <Spacer />
      <Link to='/login'>Login </Link>
      <Spacer />
    </Flex>
  )
}
