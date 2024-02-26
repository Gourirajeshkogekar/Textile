import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SignIn from './components/SignIn';
import Register from './components/Register';
import Sidebar from './components/Sidebar';
import OTP from './components/OTP';
import Home from './pages/Home';
import Loomowner from './pages/Loomowner';
import Traders from './pages/Traders';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Track authentication state

  // Function to handle authentication state
  const handleAuthentication = (isAuth) => {
    setIsAuthenticated(isAuth);
  };

  return (
    <Router>
      {/* Conditionally render the Sidebar component */}
      {isAuthenticated && <Sidebar />}

      <Routes>
        {/* Public routes */}
        <Route path="/register" element={<Register handleAuthentication={handleAuthentication} />} />
        <Route path="/otp" element={<OTP />} />
        <Route path="/login" element={<SignIn handleAuthentication={handleAuthentication} />} />

        {/* Protected routes */}
        <Route
          path="/*"
          element={isAuthenticated ? <AuthenticatedRoutes /> : <Navigate to="/login" replace />}
        />
      </Routes>
    </Router>
  );
}

function AuthenticatedRoutes() {
  return (
    <Routes>
      {/* Nested routes for authenticated users */}
      <Route path="/home" element={<Home />} />
      <Route path="/loomowner" element={<Loomowner />} />
      <Route path="/traders" element={<Traders />} />
    </Routes>
  );
}

export default App;
