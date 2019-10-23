import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
  name: String,
  genre: String,
  authorId: String
});

const bookModel = mongoose.model('Book', bookSchema);

export {bookModel}

