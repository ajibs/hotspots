const passport = require('passport');
require('../handlers/passportConfig.js')(passport);


exports.logout = (req, res) => {
  req.logout();
  res.flash('success', 'You are now logged out');
  res.redirect('/');
};


exports.signup = passport.authenticate('local-signup', {
  successRedirect: '/users',
  failureRedirect: '/signup',
  failureFlash: true
});


exports.login = passport.authenticate('local-login', {
  successRedirect: '/users',
  failureRedirect: '/login',
  failureFlash: true
});
