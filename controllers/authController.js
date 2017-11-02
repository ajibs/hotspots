const passport = require('passport');
require('../handlers/passportConfig.js')(passport);


exports.logout = (req, res) => {
  req.logout();
  req.flash('success', 'You are now logged out');
  res.redirect('/');
};


exports.signup = passport.authenticate('local-signup', {
  successRedirect: '/profile',
  failureRedirect: '/signup'
});


exports.login = passport.authenticate('local-login', {
  successRedirect: '/',
  failureRedirect: '/login'
});


exports.isLoggedIn = (req, res, next) => {
  // first check if the user is authenticated
  if (!req.isAuthenticated()) {
    req.flash('error', 'You must be logged in to do that');
    res.redirect('/login');
  }
  return next(); // carry on! user is logged in
};


exports.facebookAuth = passport.authenticate('facebook');
exports.facebookCallback = passport.authenticate('facebook', {
  successRedirect: '/profile',
  failureRedirect: '/login'
});


exports.twitterAuth = passport.authenticate('twitter');
exports.twitterCallback = passport.authenticate('twitter', {
  successRedirect: '/profile',
  failureRedirect: '/login'
});


exports.googleAuth = passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] });
exports.googleCallback = passport.authenticate('google', {
  successRedirect: '/profile',
  failureRedirect: '/login'
});


exports.connectLocalAuth = passport.authenticate('local-signup', {
  successRedirect: '/profile',
  failureRedirect: '/connect/local'
});


exports.connectFacebook = passport.authorize('facebook');

exports.connectTwitter = passport.authorize('twitter');

exports.connectGoogle = passport.authorize('google', { scope: ['https://www.googleapis.com/auth/plus.login'] });
