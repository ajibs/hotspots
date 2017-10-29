const express = require('express');
const hotspotsController = require('../controllers/hotspotsController');
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');
const { catchErrors } = require('../handlers/errorHandlers');

const router = express.Router();


router.get('/', hotspotsController.showHome);


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


router.get(
  '/profile',
  authController.isLoggedIn,
  userController.showProfile
);
router.post('/profile', catchErrors(userController.updateProfile));

router.post(
  '/places/:placeID',
  authController.isLoggedIn,
  catchErrors(hotspotsController.going)
);


// Facebook Login
router.get('/auth/facebook', authController.facebookAuth);
router.get('/auth/facebook/callback', authController.facebookCallback);


// Twitter Login
router.get('/auth/twitter', authController.twitterAuth);
router.get('/auth/twitter/callback', authController.twitterCallback);


// Google Login
router.get('/auth/google', authController.googleAuth);
router.get('/auth/google/callback', authController.googleCallback);


module.exports = router;
