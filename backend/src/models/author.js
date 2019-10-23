import mongoose from 'mongoose';

const authorSchema = new mongoose.Schema({
  name: String,
  age: Number
});

const authorModel = mongoose.model('Author', authorSchema);

export {authorModel}
