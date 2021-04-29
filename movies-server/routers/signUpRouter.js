const signUpRouter = require('express').Router();

const signUpController = require('../controllers/signUpController');
const celebrateSignUp = require('../middlewares/celebrateSignUp');

signUpRouter.post('/signup', celebrateSignUp, signUpController);

module.exports = signUpRouter;
