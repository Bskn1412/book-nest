// import React, { useState } from 'react';
// import './App.css';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// export default function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSignupClick = () => {
//     navigate('/user/signup');
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:5000/api/login', {
//         email,
//         password
//       });

//       const { user, message } = response.data;
//       const { role, name } = user;

//       // Store user info for use in other components (e.g., profile, navbar)
//      localStorage.setItem('user', JSON.stringify(response.data.user));

//      console.log('User data stored in localStorage:', response.data.user);

//       alert(message || 'Login successful!');

//       // Navigate based on role
//       if (role === 'user') {
//         localStorage.setItem('user', JSON.stringify(user)); // Store full user info
//         navigate('/'); 
//       } else if (role === 'seller') {
//         navigate('/seller/dashboard');
//       } else {
//         navigate('/');
//       }
//     } catch (err) {
//       alert('Login failed: ' + (err.response?.data?.error || 'Unknown Error'));
//     }
//   };

//   return (
//     <>
//   <div className='container'>
//       <form onSubmit={handleSubmit}>
//         <h1>Login</h1>
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <br />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <br />
//         <button type="submit">Login</button>
//           <div className="check">
//         <p>Don't have an account?</p>
//         <button onClick={handleSignupClick}>Go to Signup</button>
//       </div>
//       </form>
//      </div>
//     </>
//   );
// }
