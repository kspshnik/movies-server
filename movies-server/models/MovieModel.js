const mongoose = require('mongoose');

const validateUrl = require('../helpers/validateUrl');

const MovieSchema = new mongoose.Schema({
  country: {
    type: String,
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
    validate: {
      validator: validateUrl,
      message: (props) => `${props.value} не является корректным URL`,
    },
  },
  trailer: {
    type: String,
    required: true,
    validate: {
      validator: validateUrl,
      message: (props) => `${props.value} не является корректным URL`,
    },
  },
  thumbnail: {
    type: String,
    required: true,
    validate: {
      validator: validateUrl,
      message: (props) => `${props.value} не является корректным URL`,
    },
  },
  owner: {
    type: mongoose.Types.ObjectId,
    ref: 'user',
    required: true,
  },

  movieId: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  nameRU: {
    type: String,
    required: true,
  },
  nameEN: {
    type: String,
    required: true,
  },
  __v: { type: Number, select: false },
});
const movieModel = mongoose.model('movie', MovieSchema);

module.exports = { movieModel };
