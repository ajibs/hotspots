const Place = require('../models/Place');

exports.showHome = (req, res) => {
  res.render('index', {
    title: 'Home Page'
  });
};


exports.going = async (req, res) => {
  const { placeID } = req.params;
  const place = await Place.find({ placeID });
  const { username } = req.user;

  if (!place.length) {
    // place not found
    const newHotspot = await (new Place({ placeID, usernamesGoing: username })).save();
    res.json({ message: 'not found', newHotspot });
    return;
  }

  // place found
  // check if user has indicated going tonight
  const [incValue, operator] = place[0].usernamesGoing.includes(username) ? ['-1', '$pull'] : ['1', '$addToSet'];

  // find placeID and update
  const updatedPlace = await Place.findOneAndUpdate(
    { placeID },
    {
      $inc: { numberTonight: incValue },
      [operator]: { usernamesGoing: username }
    },
    { new: true }
  );

  res.json({ updatedPlace });
};
