import express from 'express';
import Seller from '../models/Seller.js';
const app = express.Router();

app.post('/', async (req, res) => {
  const { email, password } = req.body;
  try {
    const seller = await Seller.findOne({ email });
    if (!seller || seller.password !== password) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    res.status(200).json({
      message: 'Seller login successful',
      seller: {
        _id: seller._id,
        name: seller.name,
        email: seller.email,
        role: 'seller'
      }
    });
  } catch (err) {
    res.status(500).json({ error: 'Login error', details: err.message });
  }
});

export default app;
