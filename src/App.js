import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SignIn from './components/SignIn';
import Register from './components/Register';
import Sidebar from './components/Sidebar';
import OTP from './components/OTP';
import Loomorderdetails from './Loompages/Loomorderdetails';
import Traderorderdetails from './TradersPages/Traderorderdetails'


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Track authentication state
  const [userRole, setUserRole] = useState(null); // Track user role
  // Function to handle authentication state
  const handleAuthentication = (isAuth, role) => {
    setIsAuthenticated(isAuth);
    setUserRole(role);
  };

  return (
    <Router>
      {/* Conditionally render the Sidebar component */}


      <Routes>
        {/* Public routes */}
        <Route path="/register" element={<Register handleAuthentication={handleAuthentication} />} />
        <Route path="/otp" element={<OTP />} />
        <Route path="/login" element={<SignIn handleAuthentication={handleAuthentication} />} />


        {/* Protected routes */}
        <Route
          path="/*"
          element={isAuthenticated ? <Sidebar /> : <Navigate to="/login" replace />}
        />



        <Route path="/orderdetails/:orderNo" element={<Loomorderdetails />} /> {/* Route for Orderdetails */}
        <Route path="/orderdetails/:orderNo" element={<Traderorderdetails />} /> {/* Route for Orderdetails */}


      </Routes>
    </Router>
  );
}


export default App;



