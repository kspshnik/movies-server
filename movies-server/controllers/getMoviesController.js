const MovieModel = require('../models/MovieModel');

async function getMoviesController(req, res, next) {
  try {
    const movies = await MovieModel.find({});
    res.status(200).json(movies);
  } catch (err) {
    next(err);
  }
}

module.exports = getMoviesController;
