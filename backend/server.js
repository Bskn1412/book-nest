import express from 'express';
import { connect } from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

import userRoutes from './routes/users.js';
import sellerRoutes from './routes/seller.js';
import bookRoutes from './routes/book.js';
import loginRoutes from './routes/auth.js';
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
app.use('/api/login', loginRoutes);



// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
