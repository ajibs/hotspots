const express = require('express');
const hotspotsController = require('../controllers/hotspotsController');
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');
const { catchErrors } = require('../handlers/errorHandlers');
const passport = require('passport');
require('../handlers/passportConfig.js')(passport);

const router = express.Router();


router.get('/', hotspotsController.showHome);

router.get('/login', userController.showLogin);
router.post('/login', passport.authenticate('local-login', {
  successRedirect: '/users',
  failureRedirect: '/login',
  failureFlash: true
}));


router.get('/signup', userController.showSignup);
router.post('/signup', userController.validateSignup, passport.authenticate('local-signup', {
  successRedirect: '/users',
  failureRedirect: '/signup',
  failureFlash: true
}));


router.get('/users', catchErrors(userController.getUsers));

router.get('/test', hotspotsController.test);
router.post('/test', hotspotsController.showTest);


router.get('/logout', authController.logout);


module.exports = router;
