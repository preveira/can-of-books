'use strict';

const mongoose = require('mongoose');

// const imageSchema = new mongoose.Schema({
//   url: String,
//   altText: String,
// });

const bookSchema = new mongoose.Schema({
  title: String,
  description: String,
  status: String,
  // image: imageSchema,
});

module.exports = mongoose.model('books', bookSchema);
