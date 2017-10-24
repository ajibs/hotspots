const express = require('express');
const hotspotsController = require('../controllers/hotspotsController');
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');
const { catchErrors } = require('../handlers/errorHandlers');

const router = express.Router();


router.get('/', hotspotsController.showHome);

router.get('/login', userController.showLogin);
router.post('/login', authController.login);

router.get('/signup', userController.showSignup);
router.post(
  '/signup',
  userController.validateSignup,
  authController.signup
);

router.get('/logout', authController.logout);


router.get('/users', catchErrors(userController.getUsers));


module.exports = router;
