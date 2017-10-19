exports.showHome = (req, res) => {
  res.render('index', {
    title: 'Home Page'
  });
};


exports.test = (req, res) => {
  res.json({
    csrf: req.csrfToken()
  });
};


exports.showTest = (req, res) => {
  res.send(req.body);
};
