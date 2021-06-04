const { Joi } = require('celebrate');

const validateEmail = require('../helpers/validateEmail');

const signUpJoiScheme = Joi.object({
  name: Joi.string()
    .required()
    .custom((value, helper) => {
      if (!value || value.length < 2 || value.length > 30) {
        return helper.message('name является обязательным полем');
      }
      return value;
    }),
  email: Joi.string()
    .required()
    .custom((value, helper) => {
      if (!validateEmail(value)) {
        return helper.message(
          'email должен быть валидным адресом электронной почты',
        );
      }
      return value;
    }),
  password: Joi.string()
    .required()
    .custom((value, helper) => {
      if (!value || value.length === 0) {
        return helper.message('password является обязательным полем');
      }
      return value;
    }),
});

module.exports = signUpJoiScheme;
