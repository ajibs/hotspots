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


exports.validateSignup = (req, res, next) => {
  req.checkBody('username', 'You must supply a name!').notEmpty();
  req.sanitizeBody('username');
  req.checkBody('password', 'Password cannot be blank').notEmpty();

  const errors = req.validationErrors();
  if (errors) {
    req.flash('error', errors.map(err => err.msg));
    res.render('signup', {
      title: 'Signup',
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


exports.showConnectLocal = (req, res) => {
  res.render('connect-local', {
    title: 'Connect Local'
  });
};


exports.updateUsername = async (req, res) => {
  const { username } = req.body;
  const duplicateUser = await User.find({ 'local.username': username });

  // username not in database
  if (!duplicateUser.length) {
    await User.findOneAndUpdate(
      { _id: req.user._id },
      { $set: { 'local.username': username } },
      { new: true, runValidators: true }
    );

    req.flash('success', 'Profile update successful');
    res.redirect('back');
    return;
  }

  req.flash('error', 'Error! That username is not available, choose another username');
  res.redirect('back');
};


exports.unlinkAccount = async (req, res) => {
  const { accountType } = req.params;
  await User.findOneAndUpdate(
    { _id: req.user._id },
    { $unset: { [accountType]: 1 } },
    { new: true }
  );

  req.flash('success', `${accountType} account unlinked successfully`);
  res.redirect('back');
};
