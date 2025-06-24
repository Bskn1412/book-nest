import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';
import logoutUser from './logout'; // Or define inline
const user = JSON.parse(localStorage.getItem('user'));
export default function Home() {
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true); // ✅ loading state
  const [user, setUser] = useState(null); // <== NEW

  // ✅ Load user from localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);
 useEffect(() => {
    fetch('http://localhost:5000/api/books')
      .then(res => res.json())
      .then(data => {
        setBooks(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching books:', err);
        setLoading(false);
      });
  }, []);


return (
  <div className="home">
    <header className="home-header">
      <h2>Welcome to BookNest</h2>
      <section>
        <div className="header-buttons">
          {!user ? (
            <>
              <button onClick={() => navigate('/login')}>Login</button>
              <button onClick={() => navigate('/user/signup')}>User</button>
              <button onClick={() => navigate('/seller/signup')}>Seller</button>
            </>
          ) : (
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: "10px"}}>
              <p className='user'>Hello, {user.name}</p>
              <button onClick={() => navigate('/user/cart')}>View Cart</button>
              <button onClick={() => navigate('/user/favorites')}>Favorites</button>
              <button
                onClick={logoutUser}
                style={{
                  marginLeft: '1rem',
                  padding: '6px 12px',
                  backgroundColor: '#f44336',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                Logout
              </button>
            </div>
          )}
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
                <h3
                  onClick={() =>
                    user
                      ? navigate(`/book/${book._id}`)
                      : alert('Please log in to view book details.')
                  }
                  style={{
                    cursor: user ? 'pointer' : 'not-allowed',
                    color: user ? 'blue' : 'gray'
                  }}
                >
                  {book.title}
                </h3>
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