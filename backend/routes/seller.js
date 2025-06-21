import express from 'express';
import Seller from '../models/Seller.js';

const app = express.Router();

app.post('/signup', async (req, res) => {
  try {
    const { name, org, email, password } = req.body;

    if (!name || !org || !email || !password) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    const existingSeller = await Seller.findOne({ email });
    if (existingSeller) {
      return res.status(409).json({ message: 'Email already registered.' });
    }

    const newSeller = new Seller({ name, org, email, password });
    await newSeller.save();

    res.status(201).json({ message: 'Seller registered successfully.' });
  } catch (err) {
    console.error('Signup error:', err);
    res.status(500).json({ message: 'Server error during seller signup.' });
  }
});

export default app;
