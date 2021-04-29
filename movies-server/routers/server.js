const express = require('express');

const auth = require('../middlewares/auth');

const signUpRouter = require('./signUpRouter');
const signInRouter = require('./signInRouter');
const usersRouter = require('./usersRouter');
const moviesRouter = require('./moviesRouter');
const notFoundController = require('../controllers/notFoundController');

const serverRouter = express();

serverRouter.use('/signup', signUpRouter);
serverRouter.use('/signin', signInRouter);
serverRouter.use(auth);
serverRouter.use('/movies', moviesRouter);
serverRouter.use('/users', usersRouter);
serverRouter.use('/*', notFoundController);

module.exports = serverRouter;
