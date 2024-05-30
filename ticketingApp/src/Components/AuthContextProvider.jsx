//Packages
import React from 'react'
import { createContext, useState } from 'react'

export let AuthContext = createContext();

export default function AuthContextProvider({children}) {
    let [isLogedIn, setIsLogedIn] = useState(false);

    function login () {
        setIsLogedIn(true)
    }

    function logout () {
        setIsLogedIn(false)
    }

    let authValues = {
        loginStatus : isLogedIn,
        login,
        logout,
    }

  return (
    <AuthContext.Provider value={authValues}>
      {children}
    </AuthContext.Provider>
  )
}
