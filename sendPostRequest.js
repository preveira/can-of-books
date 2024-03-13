const axios = require('axios'); // If you're using axios for making HTTP requests


// Define the data representing the new book
const newBookData = {
  title: 'Sample Book',
  description: 'This is a sample book',
  status: 'Available',
};

// Make a POST request to your server's /books endpoint
axios.post('http://localhost:3001/model/books.js', newBookData)
  .then(response => {
    console.log('Response:', response.data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
