const cardsRouter = require('express').Router();

const getMoviesController = require('../controllers/getMoviesController');
const postMovieController = require('../controllers/postMovieController');
const deleteMovieController = require('../controllers/deleteMovieController');

const celebrateMovie = require('../middlewares/celebrateMovie');
const celebrateId = require('../middlewares/celebrateId');

cardsRouter.get('/', getMoviesController);
cardsRouter.post('/', celebrateMovie, postMovieController);
cardsRouter.delete('/:id', celebrateId, deleteMovieController);

module.exports = cardsRouter;
