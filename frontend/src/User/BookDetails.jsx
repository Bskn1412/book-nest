import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './styles/BookDetails.css';

export default function BookDetail() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [isInCart, setIsInCart] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    axios.get(`http://localhost:5000/api/books/${id}`)
      .then(res => setBook(res.data))
      .catch(err => console.error(err));

    // Check if the book is already in the cart
    if (user) {
      axios.get(`http://localhost:5000/api/users/${user._id}/cart`)
        .then(res => {
          const isPresent = res.data.some(item => item._id === id);
          setIsInCart(isPresent);
        });
    }

    if (user) {
      axios.get(`http://localhost:5000/api/users/${user._id}/favorites`)
        .then(res => {
          const fav = res.data.some(item => item._id === id);
          setIsFavorite(fav);
        });
    }
  }, [id]);

  const handleCartToggle = async () => {
    if (!user) return alert('Please login first');

    try {
      if (isInCart) {
        await axios.delete(`http://localhost:5000/api/users/${user._id}/cart/${book._id}`);
        setIsInCart(false);
      } else {
        await axios.post(`http://localhost:5000/api/users/${user._id}/cart`, {
          bookId: book._id
        });
        setIsInCart(true);
      }
    } catch (err) {
      console.error(err);
      alert('Action failed.');
    }
  };

  const handleFavoriteToggle = async () => {
  if (!user) return alert('Please login first');
  try {
    if (isFavorite) {
      await axios.delete(`http://localhost:5000/api/users/${user._id}/favorites/${book._id}`);
      setIsFavorite(false);
    } else {
      await axios.post(`http://localhost:5000/api/users/${user._id}/favorites`, {
        bookId: book._id
      });
      setIsFavorite(true);
    }
  } catch (err) {
    console.error(err);
    alert('Error updating favorites');
  }
};

  if (!book) return <p className="loading-text">Loading book...</p>;

  return (
    <div className="book-detail-container">
      <div className="book-detail-card">
        <img src={book.image} alt={book.title} className="book-image" />
        <div className="book-info">
          <h2>{book.title}</h2>
          <p className="price">₹ {book.price.toFixed(2)}</p>
          <p className="desc">{book.description || 'No description available.'}</p>
          <div className="buttons">
            <button className="btn primary" onClick={handleCartToggle}>
              {isInCart ? 'Remove from Cart' : 'Add to Cart'}
            </button>
            <button className="btn secondary" onClick={handleFavoriteToggle}>
              {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
