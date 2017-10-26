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
  usernamesGoing: [String],
  expireAt: Date
});


placeSchema.statics.expirationDate = () => {
  const d = new Date();
  // change date to next day and time to 9am
  d.setDate(d.getDate() + 1);
  d.setHours(9, 0, 0);
  return d;
};

placeSchema.index({ expireAt: 1 }, { expireAfterSeconds: 0 });


module.exports = mongoose.model('Place', placeSchema);
