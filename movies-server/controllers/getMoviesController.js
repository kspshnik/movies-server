const MovieModel = require('../models/MovieModel');

async function getMoviesController(req, res, next) {
  const user = req.usr.id;
  try {
    const movies = await MovieModel.find({ owner: user });
    res.status(200).json(movies);
  } catch (err) {
    next(err);
  }
}

module.exports = getMoviesController;
