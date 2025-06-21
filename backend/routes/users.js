// routes/user.js
import express from 'express';
import User from '../models/User.js';
const app = express.Router();

app.post('/signup', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default app;
