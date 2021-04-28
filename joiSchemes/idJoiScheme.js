import { Joi } from 'celebrate';

import validateId from '../helpers/validateId';

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

export default idJoiScheme;
