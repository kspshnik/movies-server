import { Joi } from 'celebrate';

import validateEmail from '../helpers/validateEmail';

const signInJoiScheme = Joi.object({
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

export default signInJoiScheme;
