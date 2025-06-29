import express from 'express';
import User from '../models/User.js';

const router = express.Router();

router.post('/', async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user || user.password !== password) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  res.status(200).json({
    message: 'Login successful',
    user: {
      _id: user._id,
      name: user.name,
      email: user.email,
      role: 'user'
    }
  });
});

export default router;
