import { useEffect, useState } from 'react';
import axios from 'axios';

export default function MyBooks() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const seller = JSON.parse(localStorage.getItem('seller'));
    if (!seller) return;

    axios.get(`http://localhost:5000/api/books/seller/${seller._id}`)
      .then(res => setBooks(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ padding: '1rem' }}>
      <h2>My Books</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {books.length === 0 && <p>No books found.</p>}
        {books.map(book => (
          <div key={book._id} style={{ border: '1px solid #ccc', padding: '1rem', width: '200px' }}>
            <img src={`http://localhost:5000${book.image}`} alt={book.title} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
            <h3>{book.title}</h3>
            <p>${book.price}</p>
            <p>{book.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
