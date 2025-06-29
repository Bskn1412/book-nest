import Home from './Home';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
//import Login from './Login';
import UserLogin from './User/UserLogin';
import SellerLogin from './Seller/SellerLogin';
import UserSign from './User/UserSign';
import UserProfile from './User/UserProf';
// import AdminDashboard from './Admin/AdminDashboard';
import SellerDashboard from './Seller/SellerDashboard';
import SellerSign from './Seller/SellerSign';
import BookDetails from './User/BookDetails';
import Cart from './User/Cart';
import Favorites from './User/Favorites';
import OrderHistory from './User/OrderHistory';
import MyBooks from './Seller/MyBooks';
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/user/signup" element={<UserSign />} />
        <Route path="/user/profile" element={<UserProfile />} />
        <Route path="/seller/signup" element={<SellerSign />} />
        {/* <Route path="/admin/dashboard" element={<AdminDashboard />} />  */}
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/user/cart" element={<Cart />} />
        <Route path="/user/favorites" element={<Favorites />} />
        <Route path="/orders" element={<OrderHistory />} />

          <Route path="/seller/dashboard" element={<SellerDashboard />} />
          <Route path="/user/login" element={<UserLogin />} />
          <Route path="/seller/login" element={<SellerLogin />} />
          <Route path="/seller/books" element={<MyBooks />} />

      </Routes>
    </Router>
  );
}
