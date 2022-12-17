import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import LoginPage from './pages/LoginPage'
import NavbarPage from './pages/Navbar'

function App() {

  return (
    <div className="App">
      <NavbarPage />
      <LoginPage />
    </div>
  )
}

export default App
