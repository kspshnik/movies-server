import { Joi, celebrate } from 'celebrate';

import userJoiScheme from '../joiSchemes/userJoiScheme';

const celebrateUser = celebrate({
  body: Joi.object().keys(userJoiScheme),
});

export default celebrateUser;
