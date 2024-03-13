'use strict';

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const app = express();
const Books = require('./model/books.js');

dotenv.config();
app.use(cors());
//Tells express to expect JSON in the request object
// app.use(express.json());

const PORT = process.env.PORT || 3001;
const DATABASE_URL=process.env.DATABASE_URL;

app.get('/books', async (request, response) => {
  try {
    const books = await Books.find();
    console.log('BOOKS FROM MONGODB', books);
    response.json(books);
  } catch (error) {
    response.status(500).send({ error: 'Error fetching books' });
  }
});


//creates a book object
app.post('/books', async (request, response) => {
  try {
    let json = request.body;
    console.log('HERE ARE THE BOOK VALUES', json);
    let newBook = await Books.create(json);
    response.send(newBook);
  } catch (error) {
    console.error('Error creating book:', error);
    response.status(500).json({ error: 'Error creating book'});
  }
});


//remove books from the object by id
app.delete('/books/:id', async (request, response) => {
  try {
    const id = request.params.id;
    const deletedBook = await Books.findOneAndDelete({ _id: id });

    if (deletedBook) {
      response.status(200).json({ message: 'Book deleted successfully', deletedBook });
    } else {
      response.status(404).json({ message: 'Book not found' });
    }
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
});


mongoose.connect(DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
  });
}).catch(e => {
  console.log('DB CONNECTION ISSUES!!', e);
});
