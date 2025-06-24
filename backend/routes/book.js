import express from 'express';
import Book from '../models/Book.js';

const app = express.Router();

// Fetch all books
app.get('/', async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch books' });
  }
});
// Seed books (optional utility)
app.post('/seed', async (req, res) => {
  try {
    await Book.deleteMany();
    await Book.insertMany([
      {
        title: 'Atomic Habits',
        author: 'James Clear',
        description: 'Build good habits and break bad ones',
        image: 'https://images-na.ssl-images-amazon.com/images/I/91bYsX41DVL.jpg',
        price: 18.99
      },
      {
        title: 'The Alchemist',
        author: 'Paulo Coelho',
        description: 'A story about following dreams',
        image: 'https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg',
        price: 14.99
      },
      {
        title: 'The Alchemist',
        author: 'Paulo Coelho',
        description: 'A story about following dreams',
        image: 'https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg',
        price: 14.99
      },
      {
        title: 'The Alchemist',
        author: 'Paulo Coelho',
        description: 'A story about following dreams',
        image: 'https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg',
        price: 14.99
      },
      {
        title: 'The Alchemist',
        author: 'Paulo Coelho',
        description: 'A story about following dreams',
        image: 'https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg',
        price: 14.99
      },
      {
        title: 'The Alchemist',
        author: 'Paulo Coelho',
        description: 'A story about following dreams',
        image: 'https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg',
        price: 14.99
      },
      {
        title: 'The Alchemist',
        author: 'Paulo Coelho',
        description: 'A story about following dreams',
        image: 'https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg',
        price: 14.99
      },
      {
        title: 'The Alchemist',
        author: 'Paulo Coelho',
        description: 'A story about following dreams',
        image: 'https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg',
        price: 14.99
      },
      {
        title: 'Atomic Habits',
        author: 'James Clear',
        description: 'Build good habits and break bad ones',
        image: 'https://images-na.ssl-images-amazon.com/images/I/91bYsX41DVL.jpg',
        price: 18.99
      },
      {
        title: 'The Alchemist',
        author: 'Paulo Coelho',
        description: 'A story about following dreams',
        image: 'https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg',
        price: 14.99
      },
      {
        title: 'The Alchemist',
        author: 'Paulo Coelho',
        description: 'A story about following dreams',
        image: 'https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg',
        price: 14.99
      },
      {
        title: 'The Alchemist',
        author: 'Paulo Coelho',
        description: 'A story about following dreams',
        image: 'https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg',
        price: 14.99
      },
      {
        title: 'The Alchemist',
        author: 'Paulo Coelho',
        description: 'A story about following dreams',
        image: 'https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg',
        price: 14.99
      },
      {
        title: 'The Alchemist',
        author: 'Paulo Coelho',
        description: 'A story about following dreams',
        image: 'https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg',
        price: 14.99
      },
      {
        title: 'The Alchemist',
        author: 'Paulo Coelho',
        description: 'A story about following dreams',
        image: 'https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg',
        price: 14.99
      },
      {
        title: 'The Alchemist',
        author: 'Paulo Coelho',
        description: 'A story about following dreams',
        image: 'https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg',
        price: 14.99
      },
      {
        title: 'Atomic Habits',
        author: 'James Clear',
        description: 'Build good habits and break bad ones',
        image: 'https://images-na.ssl-images-amazon.com/images/I/91bYsX41DVL.jpg',
        price: 18.99
      },
      {
        title: 'The Alchemist',
        author: 'Paulo Coelho',
        description: 'A story about following dreams',
        image: 'https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg',
        price: 14.99
      },
      {
        title: 'The Alchemist',
        author: 'Paulo Coelho',
        description: 'A story about following dreams',
        image: 'https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg',
        price: 14.99
      },
      {
        title: 'The Alchemist',
        author: 'Paulo Coelho',
        description: 'A story about following dreams',
        image: 'https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg',
        price: 14.99
      },
      {
        title: 'The Alchemist',
        author: 'Paulo Coelho',
        description: 'A story about following dreams',
        image: 'https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg',
        price: 14.99
      },
      {
        title: 'The Alchemist',
        author: 'Paulo Coelho',
        description: 'A story about following dreams',
        image: 'https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg',
        price: 14.99
      },
      {
        title: 'The Alchemist',
        author: 'Paulo Coelho',
        description: 'A story about following dreams',
        image: 'https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg',
        price: 14.99
      },
      {
        title: 'The Alchemist',
        author: 'Paulo Coelho',
        description: 'A story about following dreams',
        image: 'https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg',
        price: 14.99
      },
      {
        title: 'Atomic Habits',
        author: 'James Clear',
        description: 'Build good habits and break bad ones',
        image: 'https://images-na.ssl-images-amazon.com/images/I/91bYsX41DVL.jpg',
        price: 18.99
      },
      {
        title: 'The Alchemist',
        author: 'Paulo Coelho',
        description: 'A story about following dreams',
        image: 'https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg',
        price: 14.99
      },
      {
        title: 'The Alchemist',
        author: 'Paulo Coelho',
        description: 'A story about following dreams',
        image: 'https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg',
        price: 14.99
      },
      {
        title: 'The Alchemist',
        author: 'Paulo Coelho',
        description: 'A story about following dreams',
        image: 'https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg',
        price: 14.99
      },
      {
        title: 'The Alchemist',
        author: 'Paulo Coelho',
        description: 'A story about following dreams',
        image: 'https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg',
        price: 14.99
      },
      {
        title: 'The Alchemist',
        author: 'Paulo Coelho',
        description: 'A story about following dreams',
        image: 'https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg',
        price: 14.99
      },
      {
        title: 'The Alchemist',
        author: 'Paulo Coelho',
        description: 'A story about following dreams',
        image: 'https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg',
        price: 14.99
      },
      {
        title: 'The Alchemist',
        author: 'Paulo Coelho',
        description: 'A story about following dreams',
        image: 'https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg',
        price: 14.99
      },
      {
        title: 'Atomic Habits',
        author: 'James Clear',
        description: 'Build good habits and break bad ones',
        image: 'https://images-na.ssl-images-amazon.com/images/I/91bYsX41DVL.jpg',
        price: 18.99
      },
      {
        title: 'The Alchemist',
        author: 'Paulo Coelho',
        description: 'A story about following dreams',
        image: 'https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg',
        price: 14.99
      },
      {
        title: 'The Alchemist',
        author: 'Paulo Coelho',
        description: 'A story about following dreams',
        image: 'https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg',
        price: 14.99
      },
      {
        title: 'The Alchemist',
        author: 'Paulo Coelho',
        description: 'A story about following dreams',
        image: 'https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg',
        price: 14.99
      },
      {
        title: 'The Alchemist',
        author: 'Paulo Coelho',
        description: 'A story about following dreams',
        image: 'https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg',
        price: 14.99
      },
      {
        title: 'The Alchemist',
        author: 'Paulo Coelho',
        description: 'A story about following dreams',
        image: 'https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg',
        price: 14.99
      },
      {
        title: 'The Alchemist',
        author: 'Paulo Coelho',
        description: 'A story about following dreams',
        image: 'https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg',
        price: 14.99
      },
      {
        title: 'The Alchemist',
        author: 'Paulo Coelho',
        description: 'A story about following dreams',
        image: 'https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg',
        price: 14.99
      },{
        title: 'The Alchemist',
        author: 'Paulo Coelho',
        description: 'A story about following dreams',
        image: 'https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg',
        price: 14.99
      },{
        title: 'The Alchemist',
        author: 'Paulo Coelho',
        description: 'A story about following dreams',
        image: 'https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg',
        price: 14.99
      }
    ]);
    res.send('Books seeded successfully');
  } catch (err) {
    res.status(500).send('Seeding failed: ' + err.message);
  }
});







app.get('/:id', async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ message: 'Book not found' });
    res.json(book);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});





export default app;
