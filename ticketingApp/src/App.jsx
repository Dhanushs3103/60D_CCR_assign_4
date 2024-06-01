// Packages
import React from 'react'

// local imports
import AllRoutes from './Components/AllRoutes' // import AllRoutes
import Navbar from './Components/Navbar' // import Navbar

function App() {
  return (
    <div >
      <Navbar style={{position:"relative"}}/> {/*Navbar component */}
      <AllRoutes /> {/*AllRoutes component */}
    </div>
  )
}

export default App
