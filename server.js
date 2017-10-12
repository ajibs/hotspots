require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');


mongoose.connect(process.env.DB_URI);
mongoose.Promise = global.Promise; // Tell Mongoose to use ES6 promises;
mongoose.connection.on('error', (err) => {
  console.error(`Error!: ${err.message}`);
});


app.get('/', (req, res) => {
  res.send('hello world');
});


app.listen(port, () => {
  console.log(`Magic is happening on ${port}`);
});