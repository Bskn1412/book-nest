import express from 'express';
import { connect } from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

import userRoutes from './routes/users.js';
import sellerRoutes from './routes/seller.js';
import bookRoutes from './routes/book.js';
fetch('http://localhost:5000/api/books/seed', { method: 'POST' });
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connect(process.env.MONGO_URI, {})
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('❌ DB connection error:', err.message));

// Routes
app.use('/api/users', userRoutes);       // e.g. /api/user/signup
app.use('/api/seller', sellerRoutes);   // e.g. /api/seller/signup
app.use('/api/books', bookRoutes);      // e.g. /api/books (GET, seed, etc.)

// Optional: Common login route for both user/seller
import User from './models/User.js';
import Seller from './models/Seller.js';

app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    let account = await User.findOne({ email });
    let role = 'user';

    if (!account) {
      account = await Seller.findOne({ email });
      role = 'seller';
    }

    if (!account) return res.status(404).json({ error: 'Account not found' });
    if (account.password !== password) return res.status(401).json({ error: 'Incorrect password' });

    res.status(200).json({ message: 'Login successful', role });
  } catch (err) {
    res.status(500).json({ error: 'Login failed', details: err.message });
  }
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
