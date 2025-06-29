import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './sellerDash.css';

export default function SellerDashboard() {
  const navigate = useNavigate();
  const [seller, setSeller] = useState(null);
  const [books, setBooks] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [book, setBook] = useState({
    title: '',
    price: '',
    description: '',
    image: ''
  });

  useEffect(() => {
    const storedUser = localStorage.getItem('seller');
    if (storedUser) {
      const parsedSeller = JSON.parse(storedUser);
      setSeller(parsedSeller);
    }
  }, []);

  useEffect(() => {
    if (seller) {
      fetchMyBooks();
    }
  }, [seller]);

  const fetchMyBooks = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/books/seller/${seller._id}`);
      const data = await response.json();
      setBooks(data);
    } catch (err) {
      console.error('Failed to fetch books', err);
    }
  };

  const logout = () => {
    localStorage.removeItem('seller');
    navigate('/');
  };

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = new FormData();
  formData.append('title', book.title);
  formData.append('price', book.price);
  formData.append('description', book.description);
  formData.append('image', book.image); // ✅ file object
  formData.append('sellerId', seller._id); // ✅ sellerId

  try {
    await axios.post('http://localhost:5000/api/books', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    alert('Book added successfully');
    setBook({ title: '', price: '', description: '', image: '' });
    setShowForm(false);
  } catch (err) {
    console.error(err);
    alert('Failed to add book');
  }
};

  return (
    <>
        <header className="dashboard-header">
        <h2>Welcome, {seller?.name || 'Seller'}!</h2>
        <div>
          <button onClick={() => setShowForm(!showForm)} className="btn primary">
            {showForm ? 'Cancel' : 'Add Book'}
          </button>
          <button onClick={logout} className="btn danger">Logout</button>
          <button onClick={() => navigate('/seller/books')} className="btn primary" style={{ marginLeft: '1rem' }}>
            View My Books
          </button>
        </div>
      </header>

      {showForm && (
        <div className="seller-form-wrapper">
          <form onSubmit={handleSubmit} className="book-form">
            <input name="title" value={book.title} onChange={handleChange} placeholder="Title" required />
            <input name="price" value={book.price} onChange={handleChange} placeholder="Price" required type="number" />
            <input type="file" name="image" accept="image/*" onChange={(e) => setBook({ ...book, image: e.target.files[0] })} required/>
            <textarea name="description" value={book.description} onChange={handleChange} placeholder="Description" />
            <button type="submit" className="submit-btn">Submit</button>
          </form>
        </div>
      )}
    </>
  );
}
