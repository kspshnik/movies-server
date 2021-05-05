const signInRouter = require('express').Router();

const signInController = require('../controllers/signInController');
const celebrateSignIn = require('../middlewares/celebrateSignIn');

signInRouter.post('/', celebrateSignIn, signInController);

module.exports = signInRouter;
