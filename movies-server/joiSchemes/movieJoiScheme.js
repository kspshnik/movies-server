const { Joi } = require('celebrate');

const validateUrl = require('../helpers/validateUrl');

const movieJoiScheme = Joi.object({
  country: Joi.string()
    .required()
    .custom((value, helper) => {
      if (!value || value.length === 0) {
        return helper.message('country является обязательным полем');
      }
      return value;
    }),
  director: Joi.string()
    .required()
    .custom((value, helper) => {
      if (!value || value.length === 0) {
        return helper.message('director является обязательным полем');
      }
      return value;
    }),
  duration: Joi.number()
    .integer()
    .min(1)
    .required()
    .custom((value, helper) => {
      if (!value) {
        return helper.message('duration является обязательным полем');
      }
      if (value < 1) {
        return helper.message(
          'duration не может быть нулём или отрицательным числом',
        );
      }
      return value;
    }),
  year: Joi.string()
    .required()
    .custom((value, helper) => {
      if (!value || value.length === 0) {
        return helper.message('year является обязательным полем');
      }
      return value;
    }),
  description: Joi.string()
    .required()
    .custom((value, helper) => {
      if (!value || value.length === 0) {
        return helper.message('description является обязательным полем');
      }
      return value;
    }),

  image: Joi.string()
    .required()
    .custom((value, helper) => {
      if (!validateUrl(value)) {
        return helper.message('image должен быть валидным url');
      }
      return value;
    }),
  trailer: Joi.string()
    .required()
    .custom((value, helper) => {
      if (!validateUrl(value)) {
        return helper.message('trailer должен быть валидным url');
      }
      return value;
    }),
  thumbnail: Joi.string()
    .required()
    .custom((value, helper) => {
      if (!validateUrl(value)) {
        return helper.message('thumbnail должен быть валидным url');
      }
      return value;
    }),
  movieId: Joi.number()
    .integer()
    .positive()
    .required()
    .messages({
      'number.base': 'movieId должно быть целым положительным числом',
      'number.integer': 'movieId должно быть целым положительным числом',
      'number.positive': 'movieId должно быть целым положительным числом',
    }),
  nameRU: Joi.string()
    .required()
    .custom((value, helper) => {
      if (!value || value.length === 0) {
        return helper.message('nameRU является обязательным полем');
      }
      return value;
    }),
  nameEN: Joi.string()
    .required()
    .custom((value, helper) => {
      if (!value || value.length === 0) {
        return helper.message('nameEN является обязательным полем');
      }
      return value;
    }),
});

module.exports = movieJoiScheme;
