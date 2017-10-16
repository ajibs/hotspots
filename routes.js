const express = require('express');
const hotspotsController = require('./controllers/hotspotsController');
const userController = require('./controllers/userController');
const { catchErrors } = require('./handlers/errorHandlers');

const router = express.Router();


router.get('/', hotspotsController.showHome);
router.get('/login', userController.showLogin);


router.get('/test', hotspotsController.test);


module.exports = router;
