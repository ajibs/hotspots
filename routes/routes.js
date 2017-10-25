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


router.get('/profile', authController.isLoggedIn, userController.showProfile);
router.post('/profile', catchErrors(userController.updateProfile));

router.get('/users', authController.isLoggedIn, catchErrors(userController.getUsers));


module.exports = router;
