const User = require('../models/User');


exports.showLogin = (req, res) => {
  res.render('login', {
    title: 'Login'
  });
};


exports.showSignup = (req, res) => {
  res.render('signup', {
    title: 'Signup'
  });
};


exports.getUsers = async (req, res) => {
  const users = await User.find();
  res.json({ users });
};


exports.validateSignup = (req, res, next) => {
  req.checkBody('username', 'You must supply a name!').notEmpty();
  req.sanitizeBody('username');
  req.checkBody('password', 'Password cannot be blank').notEmpty();

  const errors = req.validationErrors();
  if (errors) {
    req.flash('error', errors.map(err => err.msg));
    res.render('signup', {
      title: 'Signup',
      body: req.body,
      flashes: req.flash()
    });
    return; // stop the fn running
  }
  next(); // there were no errors
};


exports.showProfile = (req, res) => {
  res.render('profile', {
    title: 'Edit Your Profile'
  });
};


exports.updateProfile = async (req, res) => {
  await User.findOneAndUpdate(
    { _id: req.user._id },
    { $set: { username: req.body.username } },
    { new: true, runValidators: true }
  );

  req.flash('success', 'profile update successful');
  res.redirect('back');
};
