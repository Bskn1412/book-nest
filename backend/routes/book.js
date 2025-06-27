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




app.post('/', async (req, res) => {
  try {
    const { title, price, description, image, sellerId } = req.body;

    const newBook = new Book({
      title,
      price,
      description,
      image,
      seller: sellerId,
    });

    await newBook.save();
    res.status(201).json({ message: 'Book added successfully', book: newBook });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
// Get all books by a specific seller
app.get('/seller/:sellerId', async (req, res) => {
  try {
    const books = await Book.find({ seller: req.params.sellerId });
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});






// Seed books (optional utility)
app.post('/seed', async (req, res) => {
  await Book.deleteMany();
  await Book.insertMany([
      {
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    description: "The beginning of Harry's journey into the wizarding world.",
    image: "https://covers.openlibrary.org/b/isbn/9780590353427-L.jpg",
    price: 16.99
  },
  {
    title: "Harry Potter and the Chamber of Secrets",
    author: "J.K. Rowling",
    description: "Harry returns for his second year at Hogwarts.",
    image: "https://covers.openlibrary.org/b/isbn/9780439064873-L.jpg",
    price: 17.99
  },
  {
    title: "Harry Potter and the Prisoner of Azkaban",
    author: "J.K. Rowling",
    description: "A mysterious prisoner escapes and Harry faces dark truths.",
    image: "https://covers.openlibrary.org/b/isbn/9780439136365-L.jpg",
    price: 18.49
  },
  {
    title: "Harry Potter and the Goblet of Fire",
    author: "J.K. Rowling",
    description: "The Triwizard Tournament comes to Hogwarts.",
    image: "https://covers.openlibrary.org/b/isbn/9780439139601-L.jpg",
    price: 19.49
  },
  {
    title: "Harry Potter and the Order of the Phoenix",
    author: "J.K. Rowling",
    description: "Dark forces rise and the Ministry interferes at Hogwarts.",
    image: "https://covers.openlibrary.org/b/isbn/9780439358071-L.jpg",
    price: 20.99
  },
  {
    title: "Harry Potter and the Half-Blood Prince",
    author: "J.K. Rowling",
    description: "Secrets of Voldemort’s past begin to emerge.",
    image: "https://covers.openlibrary.org/b/isbn/9780439785969-L.jpg",
    price: 21.99
  },
  {
    title: "Harry Potter and the Deathly Hallows",
    author: "J.K. Rowling",
    description: "The final battle begins—can Harry defeat Voldemort?",
    image: "https://covers.openlibrary.org/b/isbn/9780545010221-L.jpg",
    price: 22.99
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
      title: 'Sapiens: A Brief History of Humankind',
      author: 'Yuval Noah Harari',
      description: 'How Homo sapiens came to dominate the world',
      image: 'https://covers.openlibrary.org/b/isbn/9780062316097-L.jpg',
      price: 19.99
    },
    {
      title: 'Thinking, Fast and Slow',
      author: 'Daniel Kahneman',
      description: 'How we think, fast and slow',
      image: 'https://covers.openlibrary.org/b/isbn/9780374533557-L.jpg',
      price: 18.25
    },
    {
      title: 'Educated',
      author: 'Tara Westover',
      description: 'Memoir of growing up in survivalist family',
      image: 'https://covers.openlibrary.org/b/isbn/9780399590504-L.jpg',
      price: 13.49
    },
    {
      title: 'Becoming',
      author: 'Michelle Obama',
      description: 'Memoir of First Lady’s life',
      image: 'https://covers.openlibrary.org/b/isbn/9781524763138-L.jpg',
      price: 17.99
    },
    {
      title: 'The Power of Habit',
      author: 'Charles Duhigg',
      description: 'Science of habit formation',
      image: 'https://covers.openlibrary.org/b/isbn/9780812981605-L.jpg',
      price: 16.49
    },
    {
      title: 'The Subtle Art of Not Giving a F*ck',
      author: 'Mark Manson',
      description: 'Counterintuitive approach to living well',
      image: 'https://covers.openlibrary.org/b/isbn/9780062457714-L.jpg',
      price: 15.49
    },
    {
      title: 'Man’s Search for Meaning',
      author: 'Viktor E. Frankl',
      description: 'Psychotherapist’s memoir and logotherapy',
      image: 'https://covers.openlibrary.org/b/isbn/9780807014271-L.jpg',
      price: 12.49
    },
    {
      title: 'Dune',
      author: 'Frank Herbert',
      description: 'Epic sci‑fi political saga on Arrakis',
      image: 'https://covers.openlibrary.org/b/isbn/9780441013593-L.jpg',
      price: 15.99
    },
  {
    title: '1984',
    author: 'George Orwell',
    description: 'Dystopian novel about surveillance and control',
    image: 'https://covers.openlibrary.org/b/isbn/9780451524935-L.jpg',
    price: 12.99
  },
  {
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    description: 'Teenage angst and alienation',
    image: 'https://covers.openlibrary.org/b/isbn/9780316769488-L.jpg',
    price: 11.49
  },
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    description: 'Racial injustice in the Deep South',
    image: 'https://covers.openlibrary.org/b/isbn/9780061120084-L.jpg',
    price: 13.99
  },
  {
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    description: 'Classic romance and social satire',
    image: 'https://covers.openlibrary.org/b/isbn/9780141439518-L.jpg',
    price: 10.99
  },
  {
    title: 'Moby-Dick',
    author: 'Herman Melville',
    description: 'The quest for the white whale',
    image: 'https://covers.openlibrary.org/b/isbn/9780142437247-L.jpg',
    price: 14.49
  },
  {
    title: 'War and Peace',
    author: 'Leo Tolstoy',
    description: 'Epic novel set during Napoleonic Wars',
    image: 'https://covers.openlibrary.org/b/isbn/9781420951080-L.jpg',
    price: 19.99
  },
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    description: 'Jazz Age critique and tragedy',
    image: 'https://covers.openlibrary.org/b/isbn/9780743273565-L.jpg',
    price: 10.49
  },
  {
    title: 'Crime and Punishment',
    author: 'Fyodor Dostoevsky',
    description: 'Psychological drama of guilt and redemption',
    image: 'https://covers.openlibrary.org/b/isbn/9780140449136-L.jpg',
    price: 13.49
  },
  {
    title: 'Brave New World',
    author: 'Aldous Huxley',
    description: 'Dystopian society of genetic control',
    image: 'https://covers.openlibrary.org/b/isbn/9780060850524-L.jpg',
    price: 12.49
  },
  {
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    description: 'Bilbo Baggins’s unexpected adventure',
    image: 'https://covers.openlibrary.org/b/isbn/9780547928227-L.jpg',
    price: 14.99
  },
  {
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
    description: 'Epic trilogy about the One Ring',
    image: 'https://covers.openlibrary.org/b/isbn/9780618640157-L.jpg',
    price: 25.99
  },
  {
    title: 'Harry Potter and the Sorcerer’s Stone',
    author: 'J.K. Rowling',
    description: 'The beginning of a magical journey',
    image: 'https://covers.openlibrary.org/b/isbn/9780590353427-L.jpg',
    price: 16.99
  },
  {
    title: 'The Chronicles of Narnia',
    author: 'C.S. Lewis',
    description: 'Fantasy series for children and adults',
    image: 'https://covers.openlibrary.org/b/isbn/9780064471190-L.jpg',
    price: 19.99
  },
  {
    title: 'The Lion, the Witch and the Wardrobe',
    author: 'C.S. Lewis',
    description: 'Magical fantasy in Narnia',
    image: 'https://covers.openlibrary.org/b/isbn/9780064471046-L.jpg',
    price: 9.99
  },
  {
    title: 'Jane Eyre',
    author: 'Charlotte Brontë',
    description: 'Gothic romance and strong heroine',
    image: 'https://covers.openlibrary.org/b/isbn/9780141441146-L.jpg',
    price: 11.99
  },
  {
    title: 'Wuthering Heights',
    author: 'Emily Brontë',
    description: 'Dark tale of love and revenge',
    image: 'https://covers.openlibrary.org/b/isbn/9780141439556-L.jpg',
    price: 11.49
  },
  {
    title: 'The Picture of Dorian Gray',
    author: 'Oscar Wilde',
    description: 'A man’s portrait ages in his stead',
    image: 'https://covers.openlibrary.org/b/isbn/9780141442464-L.jpg',
    price: 11.49
  },
  {
    title: 'Frankenstein',
    author: 'Mary Shelley',
    description: 'Gothic novel of man and monster',
    image: 'https://covers.openlibrary.org/b/isbn/9780141439471-L.jpg',
    price: 11.49
  },
  {
    title: 'Dracula',
    author: 'Bram Stoker',
    description: 'Classic vampire horror tale',
    image: 'https://covers.openlibrary.org/b/isbn/9780141439846-L.jpg',
    price: 11.99
  },
  {
    title: 'Great Expectations',
    author: 'Charles Dickens',
    description: 'A coming-of-age story full of twists',
    image: 'https://covers.openlibrary.org/b/isbn/9780141439563-L.jpg',
    price: 13.49
  },
  {
    title: 'Les Misérables',
    author: 'Victor Hugo',
    description: 'Redemption amid revolution in France',
    image: 'https://covers.openlibrary.org/b/isbn/9780140444308-L.jpg',
    price: 16.99
  },
  {
    title: 'Anna Karenina',
    author: 'Leo Tolstoy',
    description: 'Tragic tale of love and society',
    image: 'https://covers.openlibrary.org/b/isbn/9780140449174-L.jpg',
    price: 17.99
  },
  {
    title: 'Madame Bovary',
    author: 'Gustave Flaubert',
    description: 'Tragic provincial life',
    image: 'https://covers.openlibrary.org/b/isbn/9780140449129-L.jpg',
    price: 12.49
  },
  {
    title: 'The Brothers Karamazov',
    author: 'Fyodor Dostoevsky',
    description: 'Philosophical family drama',
    image: 'https://covers.openlibrary.org/b/isbn/9780374528379-L.jpg',
    price: 14.99
  },
  {
    title: 'The Count of Monte Cristo',
    author: 'Alexandre Dumas',
    description: 'Revenge and adventure on a grand scale',
    image: 'https://covers.openlibrary.org/b/isbn/9780140449266-L.jpg',
    price: 15.49
  },
  {
    title: 'Catch-22',
    author: 'Joseph Heller',
    description: 'Satirical WWII absurdity',
    image: 'https://covers.openlibrary.org/b/isbn/9781451626650-L.jpg',
    price: 12.99
  },
  {
    title: 'One Hundred Years of Solitude',
    author: 'Gabriel García Márquez',
    description: 'Magical realism in a family saga',
    image: 'https://covers.openlibrary.org/b/isbn/9780060883287-L.jpg',
    price: 15.99
  },
  {
    title: 'Beloved',
    author: 'Toni Morrison',
    description: 'Haunting tale after American slavery',
    image: 'https://covers.openlibrary.org/b/isbn/9781400033416-L.jpg',
    price: 14.49
  },
  {
    title: 'The Road',
    author: 'Cormac McCarthy',
    description: 'Post‑apocalyptic journey of father and son',
    image: 'https://covers.openlibrary.org/b/isbn/9780307387899-L.jpg',
    price: 13.49
  },
  {
    title: 'The Kite Runner',
    author: 'Khaled Hosseini',
    description: 'Friendship and redemption in Afghanistan',
    image: 'https://covers.openlibrary.org/b/isbn/9781594631931-L.jpg',
    price: 13.99
  },
  {
    title: 'Life of Pi',
    author: 'Yann Martel',
    description: 'Survival and storytelling aboard a lifeboat',
    image: 'https://covers.openlibrary.org/b/isbn/9780156027328-L.jpg',
    price: 12.99
  },
  {
    title: 'Memoirs of a Geisha',
    author: 'Arthur Golden',
    description: 'Life of a geisha in pre‑war Japan',
    image: 'https://covers.openlibrary.org/b/isbn/9780679781585-L.jpg',
    price: 14.49
  },
  {
    title: 'Born a Crime',
    author: 'Trevor Noah',
    description: 'South African comedian’s memoir',
    image: 'https://covers.openlibrary.org/b/isbn/9780399588198-L.jpg',
    price: 12.99
  },
  {
    title: 'Educated',
    author: 'Tara Westover',
    description: 'Memoir of survivalist upbringing',
    image: 'https://covers.openlibrary.org/b/isbn/9780399590504-L.jpg',
    price: 13.49
  },
  {
    title: 'Becoming',
    author: 'Michelle Obama',
    description: 'Memoir of First Lady’s life',
    image: 'https://covers.openlibrary.org/b/isbn/9781524763138-L.jpg',
    price: 17.99
  },
  {
    title: 'Sapiens: A Brief History of Humankind',
    author: 'Yuval Noah Harari',
    description: 'How Homo sapiens dominated the world',
    image: 'https://covers.openlibrary.org/b/isbn/9780062316097-L.jpg',
    price: 19.99
  },
  {
    title: 'The Power of Habit',
    author: 'Charles Duhigg',
    description: 'Science of habit formation',
    image: 'https://covers.openlibrary.org/b/isbn/9780812981605-L.jpg',
    price: 16.49
  },
  {
    title: 'Thinking, Fast and Slow',
    author: 'Daniel Kahneman',
    description: 'Two systems that drive our thinking',
    image: 'https://covers.openlibrary.org/b/isbn/9780374533557-L.jpg',
    price: 18.25
  },
  {
    title: 'Grit',
    author: 'Angela Duckworth',
    description: 'Power of passion and perseverance',
    image: 'https://covers.openlibrary.org/b/isbn/9781501111105-L.jpg',
    price: 14.49
  },
  {
    title: 'Quiet',
    author: 'Susan Cain',
    description: 'Strength of introverts in a loud world',
    image: 'https://covers.openlibrary.org/b/isbn/9780307352156-L.jpg',
    price: 14.49
  }
]);
  res.send('Seeded books with real covers');
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
