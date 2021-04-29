const MovieModel = require('../models/MovieModel');

async function postMovieController(req, res, next) {
  const {
    country,
    description,
    director,
    duration,
    year,
    movieId,
    nameRU,
    nameEN,
    image,
    trailer,
    thumbnail,
  } = req.params;
  const { id } = req.user;
  try {
    const movie = await MovieModel.create({
      country,
      description,
      director,
      duration,
      year,
      movieId,
      nameRU,
      nameEN,
      image,
      trailer,
      thumbnail,
      owner: id,
    });
    res.status(200).json({
      country: movie.country,
      description: movie.description,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      movieId: movie.movieId,
      nameRU: movie.nameRU,
      nameEN: movie.nameEn,
      image: movie.image,
      trailer: movie.trailer,
      thumbnail: movie.thumbnail,
      owner: movie.owner,
      id: movie._id,
    });
  } catch (err) {
    next(err);
  }
}

module.exports = postMovieController;
