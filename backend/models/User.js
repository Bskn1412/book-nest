import mongoose from 'mongoose';
import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true },
  password: { type: String, required: true },
  role: { type: String, default: 'user' },
  favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Book' }],
  cart: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Book' }],
  orders: [{
    items: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Book' }],
    purchasedAt: { type: Date, default: Date.now }
  }],
});

export default model('User', userSchema);
