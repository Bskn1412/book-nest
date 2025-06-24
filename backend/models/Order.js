// models/Order.js
import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  books: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Book' }],
  status: { type: String, default: 'pending' },
  date: { type: Date, default: Date.now }
});

export default mongoose.model('Order', orderSchema);
