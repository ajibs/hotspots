/**
 * config file for passport.js
 */

// load dependencies
const User = require('../models/User');
const LocalStrategy = require('passport-local').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;


module.exports = (passport) => {
  /**
   * for persistent login sessions
   * passport needs ability to serialize and unserialize users out of session
   */

  // serialize user for the session
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  // deserialize user
  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      done(err, user);
    });
  });

  // strategy for local signup
  passport.use('local-signup', new LocalStrategy({
    passReqToCallback: true
  }, async (req, username, password, done) => {
    // User.findOne wont fire unless data is sent back
    process.nextTick(() => {
      // check if user username already exists in DB
      User.findOne({ 'local.username': username }, async (err, user) => {
        if (err) {
          return done(err);
        }

        // username does not exist in DB; create new user
        if (!user) {
          const newUser = new User();
          newUser.local.username = username;
          newUser.local.password = newUser.generateHash(password);
          try {
            await newUser.save();
            return done(null, newUser);
          } catch (e) {
            console.error(e);
          }
        }

        // username exists in DB
        return done(null, false, req.flash('signupMessage', 'That username already exists'));
      });
    });
  }));


  // local strategy for login
  passport.use('local-login', new LocalStrategy({
    passReqToCallback: true
  }, (req, username, password, done) => {
    process.nextTick(() => {
      // check if username exists
      User.findOne({ 'local.username': username }, (err, user) => {
        if (err) {
          return done(err);
        }

        // wrong username
        if (!user) {
          return done(null, false, req.flash('loginMessage', 'Username is incorrect'));
        }

        // wrong password
        if (!user.validPassword(password)) {
          return done(null, false, req.flash('loginMessage', 'Password is incorrect'));
        }

        // login successful
        return done(null, user);
      });
    });
  }));


  // Facebook strategy for login
  passport.use(new FacebookStrategy(
    {
      clientID: process.env.FACEBOOKAUTH_CLIENTID,
      clientSecret: process.env.FACEBOOKAUTH_CLIENTSECRET,
      callbackURL: 'http://localhost:3000/auth/facebook/callback'
    },
    // facebook sends back token and profile
    (token, refreshToken, profile, done) => {
      // dont run User.findOne until all our input data is complete
      process.nextTick(() => {
        // find the user in the database with their facebook id
        User.findOne({ 'facebook.id': profile.id }, async (err, user) => {
          if (err) {
            return done(err);
          }

          // no user with that facebook id found; sign them up
          if (!user) {
            const newUser = new User();
            newUser.facebook.id = profile.id;
            newUser.facebook.token = token;
            newUser.facebook.name = profile.displayName;
            try {
              await newUser.save();
              return done(null, newUser);
            } catch (e) {
              console.error(e);
            }
          }

          // user found; log them in
          return done(null, user);
        });

      });
    }
  ));
};
