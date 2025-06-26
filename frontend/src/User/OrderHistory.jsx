import { useEffect, useState } from 'react';
import axios from 'axios';
import './styles/OrderHistory.css';

export default function OrderHistory() {
  const [orders, setOrders] = useState([]);
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    if (!user) return;
    axios.get(`http://localhost:5000/api/users/${user._id}/orders`)
      .then(res => setOrders(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="order-history-container">
      <h2>My Orders</h2>
      {orders.length === 0 ? (
        <p>No past orders.</p>
      ) : (
        orders.map((order, idx) => (
          order.items.map(book => (
            <div className="order-card" key={book._id + idx}>
              <img src={book.image} alt={book.title} className="order-image" />
              <div className="order-details">
                <div><strong>ProductName:</strong> {book.title}</div>
                <div><strong>OrderId:</strong> {order._id.slice(-6)}</div>
                <div><strong>Address:</strong> {user.address || 'Not Provided'}</div>
                <div><strong>Seller:</strong> syed</div>
                <div><strong>BookingDate:</strong> {new Date(order.date).toLocaleDateString()}</div>
                <div><strong>Delivery By:</strong> {
                  new Date(new Date(order.date).setDate(new Date(order.date).getDate() + 7)).toLocaleDateString()
                }</div>
                <div><strong>Price:</strong> ₹{book.price}</div>
                <div><strong>Status:</strong> {order.status || 'on the way'}</div>
              </div>
            </div>
          ))
        ))
      )}
    </div>
  );
}
