import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './seller.css';

export default function SellerLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/seller/login', {
        email,
        password,
      });

      localStorage.setItem('seller', JSON.stringify(res.data.seller));
      localStorage.removeItem('user'); // Clear any user login
      alert('Seller login successful');
      navigate('/seller/dashboard');
    } catch (err) {
      alert('Seller login failed: ' + (err.response?.data?.error || 'Server Error'));
    }
  };

  return (
    <div className="login-container">
      <h2>Seller Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Seller Email"
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
