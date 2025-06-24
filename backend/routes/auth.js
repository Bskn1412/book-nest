import express from 'express';
import User from '../models/User.js';
import Seller from '../models/Seller.js';

const app = express.Router();

app.post('/', async (req, res) => {
  const { email, password } = req.body;

  try {
    // First check if it's a User
    let account = await User.findOne({ email });
    if (account && account.password === password) {
      return res.status(200).json({
  message: 'Login successful',
  user: {
    _id: account._id, // ✅ include this
    name: account.name,
    role: 'user',
    email: account.email
  }
});
    }

    // Else check if it's a Seller
    account = await Seller.findOne({ email });
    if (account && account.password === password) {
      return res.status(200).json({
        message: 'Login successful',
        user: {
          _id: account._id, // ✅ include this
          name: account.name,
          role: 'seller',
          email: account.email
        }
      });
    }

    // If neither matched
    res.status(401).json({ message: 'Invalid credentials' });
  } catch (err) {
    res.status(500).json({ message: 'Login error', error: err.message });
  }
});

export default app;
