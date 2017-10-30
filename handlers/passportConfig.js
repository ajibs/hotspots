/**
 * config file for passport.js
 */

// load dependencies
const User = require('../models/User');
const LocalStrategy = require('passport-local').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const TwitterStrategy = require('passport-twitter').Strategy;
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;


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
      User.findOne({ 'local.username': username }, async (err, existingUser) => {
        if (err) {
          return done(err);
        }

        if (existingUser) {
          // username exists in DB
          return done(null, false, req.flash('signupMessage', 'That username already exists'));
        }

        let localUser;
        if (req.user) {
          // user is logged in; use existing account details
          localUser = req.user;
        } else {
          // create entirely new user
          localUser = new User();
        }
        localUser.local.username = username;
        localUser.local.password = localUser.generateHash(password);
        try {
          await localUser.save();
          return done(null, localUser);
        } catch (e) {
          console.error(e);
        }
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


  // GENERIC FUNCTION FOR ALL SOCIAL MEDIA AUTHENTICATION
  async function processAuth(req, token, profile, done, socialMedia) {

    const query = `${socialMedia}.id`;

    // check user in the database with their social media id
    User.findOne({ [query]: profile.id }, async (err, user) => {
      if (err) {
        return done(err);
      }

      if (user) {
        // user account exists;
        return done(null, user);
      }

      let socialUser;
      // check if the user is already logged in
      if (req.user) {
        // user is logged in; use exisitng account details
        socialUser = req.user;
      } else {
        // create entirely new user
        socialUser = new User();
      }
      socialUser[socialMedia].id = profile.id;
      socialUser[socialMedia].token = token;
      socialUser[socialMedia].name = profile.displayName;
      try {
        await socialUser.save();
        return done(null, socialUser);
      } catch (e) {
        console.error(e);
      }
    });
  }


  // Facebook strategy for login
  passport.use(new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
      callbackURL: 'http://localhost:3000/auth/facebook/callback',
      // allows us to pass in the req from out route (lets us check if a user is logged in or not)
      passReqToCallback: true
    },

    // Facebook sends back token and profile
    (req, token, refreshToken, profile, done) => {
      // don't run processAuth until all our input data is complete
      process.nextTick(() => {
        processAuth(req, token, profile, done, 'facebook');
      });
    }
  ));


  // Twitter strategy for login
  passport.use(new TwitterStrategy(
    {
      consumerKey: process.env.TWITTER_CLIENT_ID,
      consumerSecret: process.env.TWITTER_CLIENT_SECRET,
      callbackURL: 'http://localhost:3000/auth/twitter/callback',
      passReqToCallback: true
    },
    // Twitter sends back token and profile
    (req, token, refreshToken, profile, done) => {
      // don't run processAuth until all our input data is complete
      process.nextTick(() => {
        processAuth(req, token, profile, done, 'twitter');
      });
    }
  ));


  // Google strategy for login
  passport.use(new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: 'http://localhost:3000/auth/google/callback',
      passReqToCallback: true
    },
    // Google sends back token and profile
    (req, token, refreshToken, profile, done) => {
      // don't run processAuth until all our input data is complete
      process.nextTick(() => {
        processAuth(req, token, profile, done, 'google');
      });
    }
  ));
};
