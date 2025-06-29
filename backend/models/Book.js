import { Schema, model, mongoose } from 'mongoose';

const bookSchema = new Schema({
  title: { type: String, required: true },
  author: String,
  description: String,
  price: Number,
  image: {
  type: String,
  required: true,
},
 seller: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Seller',
  }
});

const Book = model('Book', bookSchema);
export default Book;
