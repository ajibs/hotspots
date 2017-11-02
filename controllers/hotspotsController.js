const Place = require('../models/Place');

exports.showHome = (req, res) => {
  res.render('index', {
    title: 'Home'
  });
};


// add user as going or remove from going
exports.going = async (req, res) => {
  const { placeID } = req.params;
  const place = await Place.find({ placeID });
  const { username } = req.user.local;

  if (!place.length) {
    // place not found
    // set document expiration date to 9am the next day
    const expireAt = Place.expirationDate();
    const newSpot = await (new Place({ placeID, usernamesGoing: username, expireAt })).save();
    res.json({ message: 'hotspot not in DB', newSpot });
    return;
  }

  // place found

  const remove = ['-1', '$pull'];
  const addGoing = ['1', '$addToSet'];
  const usersTonight = place[0].usernamesGoing;

  // check if user has previously indicated going tonight
  const [incValue, operator] = usersTonight.includes(username) ? remove : addGoing;

  // use placeID to update place document
  const updated = await Place.findOneAndUpdate(
    { placeID },
    {
      $inc: { numberTonight: incValue },
      [operator]: { usernamesGoing: username }
    },
    { new: true }
  );

  res.json({ message: 'hotspot already in DB', updated });
};
