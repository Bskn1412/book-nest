import React, { useState } from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignupClick = () => {
    navigate('/user/signup');
  };

 const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post('http://localhost:5000/api/login', {
        email,
        password
    });
      const { role } = response.data;

      alert(response.data.message || 'Login successful!');
      //if (role === 'admin') {
       // navigate('/admin/dashboard');
        // alert(role);}
      if (role === 'user') {
        navigate('/');
      }
      else if (role === 'seller') {
        navigate('/seller/dashboard');
      }
      else navigate('/');

    } catch (err) {
      alert('Login failed: ' + (err.response?.data?.error || 'Unknown Error'));
    }
  };

  return (
    <>
    <form onSubmit={handleSubmit}>
       <h1>Login</h1>
      <input type="email" name = "email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} required /> <br />
      <input type="password" name = 'password' placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} required /> <br />
      <button type="submit">Login</button>
    </form>
    <div className='check'>
        <p>Don't have an account?</p>
        <button onClick={handleSignupClick}>Go to Signup</button>
    </div>
  </>
);
}
