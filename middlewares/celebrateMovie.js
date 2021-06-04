const { celebrate } = require('celebrate');

const movieJoiScheme = require('../joiSchemes/movieJoiScheme');

const celebrateMovie = celebrate({
  body: movieJoiScheme,
});

module.exports = celebrateMovie;
