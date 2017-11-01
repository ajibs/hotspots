const express = require('express');
const hotspotsController = require('../controllers/hotspotsController');
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');
const { catchErrors } = require('../handlers/errorHandlers');

const router = express.Router();


router.get('/', hotspotsController.showHome);


router.get(
  '/profile',
  authController.isLoggedIn,
  userController.showProfile
);
router.post(
  '/profile',
  authController.isLoggedIn,
  catchErrors(userController.updateUsername)
);

router.post(
  '/places/:placeID',
  authController.isLoggedIn,
  catchErrors(hotspotsController.going)
);


// AUTHENTICATE (First Login)
// signup, login and logout
router.get('/signup', userController.showSignup);
router.post(
  '/signup',
  userController.validateSignup,
  authController.signup
);

router.get('/login', userController.showLogin);
router.post('/login', authController.login);

router.get('/logout', authController.logout);

// Facebook Authenticate
router.get('/auth/facebook', authController.facebookAuth);
router.get('/auth/facebook/callback', authController.facebookCallback);

// Twitter Authenticate
router.get('/auth/twitter', authController.twitterAuth);
router.get('/auth/twitter/callback', authController.twitterCallback);

// Google Authenticate
router.get('/auth/google', authController.googleAuth);
router.get('/auth/google/callback', authController.googleCallback);


// AUTHORIZE (Already logged in / connecting other social account)
// local Authorize
router.get(
  '/connect-local',
  authController.isLoggedIn,
  userController.showConnectLocal
);
router.post(
  '/connect-local',
  authController.isLoggedIn,
  authController.connectLocalAuth
);

// Facebook Authorize
router.get(
  '/connect/facebook',
  authController.isLoggedIn,
  authController.connectFacebook
);

// Twitter Authorize
router.get(
  '/connect/twitter',
  authController.isLoggedIn,
  authController.connectTwitter
);

// Google Authorize
router.get(
  '/connect/google',
  authController.isLoggedIn,
  authController.connectGoogle
);


// Anlink Accounts
router.get(
  '/unlink/:accountType',
  authController.isLoggedIn,
  catchErrors(userController.unlinkAccount)
);


module.exports = router;
