import React from 'react'
import './App.css'
import LoginPage from './pages/LoginPage'
import DashboardLayout from './pages/Navbar'
import SignUpPage from './pages/Signup'

function App() {

  return (
    <div className="App">
      <DashboardLayout />
      <SignUpPage />
      {/* <LoginPage /> */}
    </div>
  )
}

export default App

