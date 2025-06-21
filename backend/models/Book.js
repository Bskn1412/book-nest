import { Schema, model } from 'mongoose';

const bookSchema = new Schema({
  title: { type: String, required: true },
  author: String,
  description: String,
  image: String, // URL of the image
  price: Number
});

const Book = model('Book', bookSchema);
export default Book;
