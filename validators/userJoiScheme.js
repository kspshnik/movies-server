import { Joi } from 'celebrate';

import validateEmail from '../helpers/validateEmail';

const userJoiScheme = Joi.object({
  name: Joi.string()
    .required()
    .custom((value, helper) => {
      if (!value || value.length === 0) {
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
});

export default userJoiScheme;
