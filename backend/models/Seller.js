import { Schema, model } from 'mongoose';

const sellerSchema = new Schema({
  name: { type: String, required: true },
  org: { type: String, required: true },
  email: { type: String, unique: true },
  password: { type: String, required: true },
  role: { type: String, default: 'seller' }
  // future fields: productsListed, rating, reviews, etc.
});

export default model('Seller', sellerSchema);
