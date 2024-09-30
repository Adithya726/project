// src/App.js
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import './App.css'; 
import { BrowserRouter } from 'react-router-dom';
import Navroutes from './Routes/Navroutes';

const App = () => {
  const [showSignup, setShowSignup] = useState(false);

  const handleSignupClick = () => {
    setShowSignup(true);
  };

  return (
    <BrowserRouter>
      <div>
        <Navbar onSignupClick={handleSignupClick} />
        {showSignup && <Signup />}
        <Navroutes />
      </div>
    </BrowserRouter>
  );
};

export default App;
