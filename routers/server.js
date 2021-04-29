const express = require('express');
const cors = require('cors');
const jsonParser = require('body-parser').json();

const signUpRouter = require('./signUpRouter');
const signInRouter = require('./signInRouter');
const usersRouter = require('./usersRouter');
const moviesRouter = require('./moviesRouter');
const notFoundController = require('../controllers/notFoundController');

const app = express();

app.use(cors);
app.use(jsonParser);
// app.use(requestsLogger);
app.use('/signup', signUpRouter);
app.use('/signin', signInRouter);
// app.use(auth);
app.use('/movies', moviesRouter);
app.use('/users', usersRouter);
app.use('/*', notFoundController);

// app.use(errorsLogger);

// app.use(errors);
// app.use(errorsHandler);

module.exports = app;
