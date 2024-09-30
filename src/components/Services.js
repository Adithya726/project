import React, { useState } from 'react';
import './Signup.css';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook

const Signup = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize navigate

  const handleSubmit = (e) => {
    e.preventDefault();

    // Email validation happens automatically since input type="email"
    if (!email || !password) {
      alert('Please fill in both fields.');
      return;
    }

    // Mock login/signup logic
    console.log(isLogin ? 'Logging in' : 'Signing up', { email, password });

    // Redirect to home screen after form submission
    navigate('/home');
  };

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
        </form>
        <p>
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <span onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? 'Sign Up' : 'Login'}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
