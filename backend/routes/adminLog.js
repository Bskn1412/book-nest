// routes/adminLogin.js
import express from 'express';
import Admin from '../models/Admin.js';

const router = express.Router();

router.post('/', async (req, res) => {
  const { email, password } = req.body;

  const admin = await Admin.findOne({ email });
  if (admin && admin.password === password) {
    return res.json({
      message: 'Admin login successful',
      user: {
        _id: admin._id,
        name: admin.name,
        email: admin.email,
        role: admin.role
      }
    });
  }

  res.status(401).json({ message: 'Invalid admin credentials' });
});

export default router;
