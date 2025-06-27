import { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
 const seller = JSON.parse(localStorage.getItem('seller'));
export default function SellerDashboard() {
  const navigate = useNavigate();
  const [seller, setSeller] = useState(); 
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
      setSeller(JSON.parse(storedUser));
    }
  }, []);



  const logout = () => {
    localStorage.removeItem('seller');
    navigate('/');
  };

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:5000/api/books', {
        ...book,
        seller: seller._id
      });
      alert('Book added successfully');
      setBook({ title: '', price: '', description: '', image: '' });
      setShowForm(false);
    } catch (err) {
      alert('Failed to add book');
    }
  };
  return (
    <div className="seller-dashboard" style={{ padding: '1rem' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>Welcome, {seller?.name || 'Seller'}!</h2>
        <div>
          <button onClick={() => setShowForm(!showForm)} style={styles.button}>
            {showForm ? 'Cancel' : 'Add Book'}
          </button>
          <button onClick={logout} style={{ ...styles.button, backgroundColor: '#f44336' }}>Logout</button>
        </div>
      </header>

      {showForm && (
        <div className='seller'>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input name="title" value={book.title} onChange={handleChange} placeholder="Title" required />
          <input name="price" value={book.price} onChange={handleChange} placeholder="Price" required type="number" />
          <textarea name="description" value={book.description} onChange={handleChange} placeholder="Description" />
          <input type = "file" name="image" value={book.image} onChange={handleChange} placeholder="Image URL" required />
          <button type="submit" style={styles.submit}>Submit</button>
        </form>
         </div>
      )}
    </div>
  );
}

const styles = {
  seller: {
     alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
    padding: '1rem'
  },
  button: {
    marginLeft: '1rem',
    padding: '6px 12px',
    backgroundColor: '#2196f3',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '1rem',
    maxWidth: '400px',
    gap: '10px'
  },
  submit: {
    padding: '8px',
    backgroundColor: 'green',
    color: 'white',
    border: 'none',
    cursor: 'pointer'
  }
};
