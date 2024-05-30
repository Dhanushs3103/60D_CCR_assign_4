// Packages
import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import {Flex, Spacer,Button} from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";

// local imports
import "../styles/Tickets.css" // import Tickets.css
import { AuthContext } from "./AuthContextProvider";

export default function Navbar() {
  let {loginStatus,logout} = useContext(AuthContext);
  let navigate = useNavigate(); // invocking the useNavigate hook for the purpose of navigation.
  return (
    <Flex id="navbar" p={4} fontSize={"20px"}  >
      <Spacer />
      <Link to='/'>Home </Link> {/* Link to Home page*/}
      <Spacer />
      <Link to='/about'>About </Link> {/* Link to About page*/}
      <Spacer />
      <Link to='/contact'>Contact </Link> {/* Link to Contact page*/}
      <Spacer />
      <Link to='/tickets'>Tickets </Link> {/* Link to Tickets page*/}
      <Spacer />
      {/* Checking the login status and rendering accordingly */}
      {
        loginStatus ? (<Button colorScheme='red' size='sm' fontSize={"18px"} padding={"18px 15px "} onClick={()=>{
          logout()
          navigate(`/login`)
        }}>
        Logout
      </Button>) : (<Button colorScheme='blue' size='sm' fontSize={"18px"} padding={"18px 15px "} onClick={()=>{
          navigate(`/login`)
        }}>
        Login
      </Button>)
      }
      <Spacer />
    </Flex>
  )
}
