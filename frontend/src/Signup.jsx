// import React, { useState } from 'react';
// import './App.css';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// export default function Signup() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [retypePassword, setRetypePassword] = useState('');
//   const [role, setRole] = useState('user');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (password !== retypePassword) {
//       alert('Passwords do not match!');
//       return;
//     }
//   //   alert(`Signed up as: ${name} (${email})`);
//   // };

//  try {
//   const response = await axios.post('http://localhost:5000/api/signup', {
//     name, email, password,role
//   });
//   alert(response.data.message || 'Signup successful!');
//   navigate('/login'); // or '/' depending on your route setup
//   } 
//   catch (error) {
//     if (error.response?.status === 409) {
//       alert('Email already registered. Please login instead.');
//     } else {
//       alert('Signup failed: ' + (error.response?.data?.error || 'Unknown error'));
//     }
//   }
// };
//   const handleLoginClick = () => {
//     navigate('/');
//   };

// return (
//     <>
//     <form onSubmit = {handleSubmit} >
//         <h1>Sign Up</h1>
//       <select value={role} onChange={(e) => setRole(e.target.value)} >
//         <option value="user" name= 'user'>User</option>
//         <option value="seller" name = 'seller'>Seller</option>
//         {/* <option value="admin" name = 'admin'>Admin</option> */}
//       </select>
//         <input type="text" name='name' placeholder='name' value={name} onChange={(e) => setName(e.target.value)} required/><br />
//         <input type="email" name='email' placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} required /><br />
//         <input type="password" name='password' placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} required /><br />
//         <input type="password" name='re-password' placeholder='re-type password' value={retypePassword} onChange={(e) => setRetypePassword(e.target.value)} required /><br />
//         <button type='submit'>SignUp</button>
//     </form>
//     <div className='check'>
//       <p>Already have an account?</p>
//       <button onClick={handleLoginClick}>Go to Login</button>
//     </div>
//     </>
// )}