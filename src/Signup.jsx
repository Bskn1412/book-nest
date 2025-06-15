import React, { useState } from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== retypePassword) {
      alert('Passwords do not match!');
      return;
    }
    alert(`Signed up as: ${name} (${email})`);
  };

  const handleLoginClick = () => {
    navigate('/');
  };

return (
    <>
    <form action="handle" method='post'><br /><br />
        <h1>Sign Up</h1>
        <input type="text" placeholder='name' value={name} onChange={(e) => setName(e.target.value)} required/><br />
        <input type="email" placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} required /><br />
        <input type="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} required /><br />
        <input type="password" placeholder='re-type password' value={retypePassword} onChange={(e) => setRetypePassword(e.target.value)} required /><br />
        <button type='submit'>SignUp</button>
    </form>
      <p>Already have an account?</p>
      <button onClick={handleLoginClick}>Go to Login</button>
    </>
)}