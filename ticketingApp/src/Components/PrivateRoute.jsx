//packages
import React from "react";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// local imports
import { AuthContext } from "./AuthContextProvider";

export default function PrivateRoute({ children }) {
  let navigate = useNavigate(); // invocking the useNavigate hook for the purpose of navigation.
  let { loginStatus } = useContext(AuthContext); // destructuring the AuthContext values form AuthContext.

  useEffect(()=>{
    if(!loginStatus) { //cheaking the loginStatus
      navigate(`/login`)
    }
  },[loginStatus,navigate])

  return <>{children}</>;
}
