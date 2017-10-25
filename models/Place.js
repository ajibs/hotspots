const mongoose = require('mongoose');

const placeSchema = new mongoose.Schema({
  placeID: {
    type: String,
    unique: true
  },
  numberTonight: {
    type: Number,
    default: 1
  },
  usernamesGoing: [String]
});


module.exports = mongoose.model('Place', placeSchema);
