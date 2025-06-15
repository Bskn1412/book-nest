import React, { useState } from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Logged in as: ${name}`);
  };

  const handleSignupClick = () => {
    navigate('/signup');
  };


  return (
    <>
    <form onSubmit={handleSubmit} method='post'>
       <h1>Login</h1>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required /> <br />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required /> <br />
      <button type="submit">Login</button>
    </form>
  
      <p>Don't have an account?</p>
      <button onClick={handleSignupClick}>Go to Signup</button>
  </>
);


}
