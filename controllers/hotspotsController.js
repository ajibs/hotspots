const Place = require('../models/Place');

exports.showHome = (req, res) => {
  res.render('index', {
    title: 'Home'
  });
};


exports.going = async (req, res) => {
  const { placeID } = req.params;
  const place = await Place.find({ placeID });
  const { username } = req.user.local;

  if (!place.length) {
    // place not found
    // set document expiration date
    const expireAt = Place.expirationDate();
    const newSpot = await (new Place({ placeID, usernamesGoing: username, expireAt })).save();
    res.json({ message: 'not found', newSpot });
    return;
  }

  // place found
  // check if user has previously indicated going tonight
  const [incValue, operator] = place[0].usernamesGoing.includes(username) ? ['-1', '$pull'] : ['1', '$addToSet'];

  // find placeID and update
  const updated = await Place.findOneAndUpdate(
    { placeID },
    {
      $inc: { numberTonight: incValue },
      [operator]: { usernamesGoing: username }
    },
    { new: true }
  );

  res.json({ message: 'found', updated });
};
