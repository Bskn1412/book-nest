import express from 'express';
import Admin from '../models/Admin.js';
const app = express.Router();

app.get('/seed', async (req, res) => {
  const existing = await Admin.findOne({ email: 'admin@gmail.com' });
  if (existing) return res.send('Admin already exists');

  const admin = new Admin({
    name: 'Admin',
    email: 'admin@gmail.com',
    password: 'admin',
    role: 'admin'
  });

  await admin.save();
  res.send('Admin Added');
});

export default app;