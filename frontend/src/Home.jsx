import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';

export default function Home() {
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true); // ✅ loading state

  useEffect(() => {
    fetch('http://localhost:5000/api/books')
      .then(res => res.json())
      .then(data => {
        setBooks(data);
        setLoading(false); // ✅ turn off loading
      })
      .catch(err => {
        console.error('Error fetching books:', err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="home">
      <header className="home-header">
        <h2>Welcome Home</h2>
        <section>
        <div className="header-buttons">
          <button onClick={() => navigate('/login')}>Login</button>
          <button onClick={() => navigate('/user/signup')}>User</button>
          <button onClick={() => navigate('/seller/signup')}>Seller</button>
        </div>
        </section>
      </header>

      {loading ? (
        <p style={{ textAlign: 'center' }}>Loading books...</p>
      ) : (
        <main className="book-grid">
          {books.length > 0 ? (
            books.map(book => (
              <div className="book-card" key={book._id}>
                <img src={book.image} alt={book.title} />
                <div className="book-info">
                  <h3>{book.title}</h3>
                  <p>${book.price.toFixed(2)}</p>
                </div>
              </div>
            ))
          ) : (
            <p>No books available.</p>
          )}
        </main>
      )}
    </div>
  );
}
