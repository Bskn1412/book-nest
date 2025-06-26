// Cart.jsx
import { useEffect, useState } from 'react';
import axios from 'axios';
import './styles/cart.css';
export default function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const user = JSON.parse(localStorage.getItem('user'));
const [cart, setCart] = useState([]);

  useEffect(() => {
    if (!user) return;

    axios.get(`http://localhost:5000/api/users/${user._id}/cart`)
      .then(res => setCartItems(res.data))
      .catch(err => console.error('Error fetching cart:', err));
  }, [user]);

  const handleRemoveFromCart = async (bookId) => {
  try {
    await axios.delete(`http://localhost:5000/api/users/${user._id}/cart/${bookId}`);
    setCartItems(cartItems.filter(book => book._id !== bookId));
  } catch (err) {
    console.error('Error removing from cart:', err);
  }
};

const handlePurchase = async (bookId) => {
  const user = JSON.parse(localStorage.getItem('user'));
  if (!user) return alert('Please login first');

  try {
    const res = await axios.post(`http://localhost:5000/api/users/${user._id}/purchase`, {
      bookId
    });
    alert(res.data.message || 'Purchase successful');
    setCart(prev => prev.filter(b => b._id !== bookId)); // remove from UI
  } catch (err) {
    console.error('Purchase failed:', err);
    alert('Purchase failed');
  }
};

  if (!user) return <p>Please login to view your cart.</p>;

  return (
    <div className = "ff" style={{ padding: '2rem' }}>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="book-grid">
          {cartItems.map(book => (
            <div key={book._id} className="book-card">
              <img src={book.image} alt={book.title} />
              <div className="book-info">
                <h3>{book.title}</h3>
                <p>₹ {book.price.toFixed(2)}</p>
                <button onClick={() => handleRemoveFromCart(book._id)}>Remove</button>
              </div>
               <button className="btn success" onClick={() => handlePurchase(book._id)}>Purchase</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
