const express = require('express');
const helmet = require('helmet');
const routes = require('./routes');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const path = require('path');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo')(session);
const csurf = require('csurf');

const app = express();


// secure app by setting http headers
app.use(helmet());


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


// serves up static files from the public folder.
app.use(express.static(path.join(__dirname, 'public')));


// retrieve information from POST requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// exposes a bunch of methods for validating data. used heavily in userController
app.use(expressValidator());


// populate req.cookies with any cookies that come along with the request
app.use(cookieParser());


// store data on visitors from request to request and keep them logged in
const sess = {
  secret: process.env.SECRET,
  key: process.env.KEY,
  resave: false,
  saveUninitialized: false,
  store: new MongoStore({ mongooseConnection: mongoose.connection }),
  cookie: {
    maxAge: 3600000
  }
};

// use secure cookies in production
if (app.get('env') === 'production') {
  // trust first proxy
  app.set('trust proxy', 1);
  // serve cookies only when the browser connection is HTTPS
  sess.cookie.secure = true;
}

app.use(session(sess));

// protect site from Cross Site Request Forgery
app.use(csurf());


// expose variables to templates
app.use((req, res, next) => {
  res.locals.csrfToken = req.csrfToken();
  next();
});


// handle CSRF token errors here
app.use((err, req, res, next) => {
  if (err.code === 'EBADCSRFTOKEN') {
    res.status(403);
    res.send('form tampered with');
  }
  return next(err);
});


// load routes
app.use('/', routes);


module.exports = app;
