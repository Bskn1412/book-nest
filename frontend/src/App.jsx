import Home from './Home';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Login from './Login';
import './index.css';
import UserSign from './User/UserSign';
// import AdminDashboard from './Admin/AdminDashboard';
import SellerDashboard from './Seller/SellerDashboard';
import SellerSign from './Seller/SellerSign';
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user/signup" element={<UserSign />} />
        <Route path="/seller/signup" element={<SellerSign />} />
        {/* <Route path="/admin/dashboard" element={<AdminDashboard />} />  */}
        <Route path="/seller/dashboard" element={<SellerDashboard />} />
      </Routes>
    </Router>
  );
}
