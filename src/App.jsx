import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import './index.css';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <h2>Welcome Home</h2>
      <button onClick={() => navigate('/login')} >
        Login
      </button>
      <button onClick={() => navigate('/signup')} >
        Signup
      </button>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}
