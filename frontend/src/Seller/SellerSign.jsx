import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './seller.css';
export default function SellerSign() {
  const [name, setName] = useState('');
  const [org, setOrg] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
     const response =  await axios.post('http://localhost:5000/api/seller/signup', {
        name, org, email, password, role: 'seller'
      });
      alert(response.data.message || "Seller Registration Success!");
      navigate('/login');
    } catch (err) {
      alert(err.response?.data?.message || "Seller Signup failed");
    }
  };

const handleLoginClick = () => {
    navigate('/seller/login');
  };

  return (
    <div className='container'>
    <form onSubmit={handleSubmit}>
      <h2>Seller Signup</h2>
      <input type="text" name='name' placeholder='name' value={name} onChange={(e) => setName(e.target.value)} required/><br />
        <input type= "text" value={org} onChange={(e) => setOrg(e.target.value)} placeholder="Organization" required />
        <input type="email" name='email' placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} required /><br />
        <input type="password" name='password' placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} required /><br />
        <button type='submit'>SignUp</button><br /><br />
      <div className='check'>
      <p>Already have an account?</p><br />
      <button onClick={handleLoginClick}>Go to Login</button>
    </div>
    </form>
    </div>
  );
}
