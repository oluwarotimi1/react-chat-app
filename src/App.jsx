import React from "react";
import "./App.css";
// import Button from "./components/button/Button";
// import HomePage from './pages/HomePage'
import LoginPage from "./pages/LoginPage";
import DashboardLayout from "./pages/Navbar";
import SignupPage from "./pages/SignupPage";
// import {Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      {/* <Button bgColor={"#000"} textColor="#fff" btnText={"click me"} /> */}
      <DashboardLayout />
      <SignupPage />
      <LoginPage />
      {/* <HomePage /> */}

      {/* <Routes>
        <Route>
          <React.Fragment>
            <Route exact path="/" element={<HomePage />}/>
            <Route exact path="/signup" element={<SignupPage />}/>
            <Route exact path="/signup" element={<LoginPage />}/>
          </React.Fragment>
        </Route>
      </Routes> */}
    </div>
  );
}

export default App;
