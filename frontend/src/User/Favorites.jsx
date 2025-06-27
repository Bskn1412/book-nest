import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './styles/Favorites.css'; // optional styling

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    if (user) {
      axios.get(`http://localhost:5000/api/users/${user._id}/favorites`)
        .then(res => setFavorites(res.data))
        .catch(err => console.error('Error fetching favorites:', err));
    }
  }, [user]);

  const handleRemove = async (bookId) => {
    try {
      await axios.delete(`http://localhost:5000/api/users/${user._id}/favorites/${bookId}`);
      setFavorites(prev => prev.filter(book => book._id !== bookId));
    } catch (err) {
      console.error('Error removing from favorites:', err);
    }
  };

  if (!user) return <p style={{ textAlign: 'center' }}>Please login to view your favorites.</p>;

  return (
     <div className="header">
          <h2>Your Favorites</h2>
    <div className="favorites-page">
      {favorites.length === 0 ? (
        <p>No favorite books yet.</p>
      ) : (
        <div className="favorites-grid">
          {favorites.map(book => (
            <div className="favorite-card" key={book._id}>
              <img src={book.image} alt={book.title} />
              <div className="book-info">
                <h3>{book.title}</h3>
                <p>₹ {book.price.toFixed(2)}</p>
                <button onClick={() => handleRemove(book._id)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
    </div>
  );
}

