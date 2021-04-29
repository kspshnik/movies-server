const { Joi } = require('celebrate');

const validateId = require('../helpers/validateId');

const idJoiScheme = Joi.object({
  id: Joi.string()
    .required()
    .custom((value, helper) => {
      if (!validateId(value)) {
        return helper.message(
          `${value} не является действительным идентификатором`,
        );
      }
      return value;
    }),
});

module.exports = idJoiScheme;
