// routes/user.js
import express from 'express';
import User from '../models/User.js';
import Order from '../models/Order.js';
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



app.post('/:userId/cart', async (req, res) => {
  const userId = req.params.userId;
  const { bookId } = req.body;
  try {
    const user = await User.findById(userId);
    if (!user.cart.includes(bookId)) user.cart.push(bookId);
    await user.save();
    res.json({ message: 'Added to cart' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
app.delete('/:userId/cart/:bookId', async (req, res) => {
  try {
    const { userId, bookId } = req.params;
    const user = await User.findById(userId);
    user.cart = user.cart.filter(id => id.toString() !== bookId);
    await user.save();
    res.json({ message: 'Book removed from cart' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});







app.post('/:userId/favorites', async (req, res) => {
  const { bookId } = req.body;
  try {
    const user = await User.findById(req.params.userId);
    if (!user.favorites.includes(bookId)) {
      user.favorites.push(bookId);
    }
    await user.save();
    res.json({ message: 'Book added to favorites' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
app.delete('/:userId/favorites/:bookId', async (req, res) => {
  try {
    const { userId, bookId } = req.params;
    const user = await User.findById(userId);
    user.favorites = user.favorites.filter(id => id.toString() !== bookId);
    await user.save();
    res.json({ message: 'Book removed from favorites' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});



app.post('/:id/orders', async (req, res) => {
  const userId = req.params.id;
  const { books } = req.body; // books: [{ bookId }]

  try {
    const order = new Order({
      user: userId,
      books: books.map(b => b.bookId),
      status: 'success',
      date: new Date()
    });

    await order.save();
    res.json({ message: 'Order placed successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/:userId/cart', async (req, res) => {
  const user = await User.findById(req.params.userId).populate('cart');
  res.json(user.cart);
});

app.get('/:userId/favorites', async (req, res) => {
  const user = await User.findById(req.params.userId).populate('favorites');
  res.json(user.favorites);
});

app.post('/:userId/purchase', async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    if (user.cart.length === 0) {
      return res.status(400).json({ message: 'Cart is empty' });
    }
    user.orders.push({ items: [...user.cart] });
    user.cart = [];
    await user.save();
    res.json({ message: 'Purchase successful' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/:userId/orders', async (req, res) => {
  const user = await User.findById(req.params.userId).populate('orders.items');
  res.json(user.orders);
});


export default app;
