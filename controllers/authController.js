exports.logout = (req, res) => {
  req.logout();
  res.flash('success', 'You are now logged out');
  res.redirect('/');
};
