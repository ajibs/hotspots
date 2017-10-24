const passport = require('passport');
require('../handlers/passportConfig.js')(passport);


exports.logout = (req, res) => {
  req.logout();
  res.flash('success', 'You are now logged out');
  res.redirect('/');
};


exports.signup = passport.authenticate('local-signup', {
  successRedirect: '/profile',
  failureRedirect: '/signup',
  failureFlash: true
});


exports.login = passport.authenticate('local-login', {
  successRedirect: '/profile',
  failureRedirect: '/login',
  failureFlash: true
});


exports.isLoggedIn = (req, res, next) => {
  // first check if the user is authenticated
  if (req.isAuthenticated()) {
    return next(); // carry on! user is logged in
  }
  req.flash('error', 'You must be logged in to do that');
  res.redirect('/login');
};

