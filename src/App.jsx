import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';

function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Welcome Home</h2>
      <button onClick={() => navigate('/login')} style={{ margin: '10px' }}>
        Login
      </button>
      <button onClick={() => navigate('/signup')} style={{ margin: '10px' }}>
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
