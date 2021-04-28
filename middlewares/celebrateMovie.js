import { Joi, celebrate } from 'celebrate';

import movieJoiScheme from '../joiSchemes/movieJoiScheme';

const celebrateMovie = celebrate({
  body: Joi.object().keys(movieJoiScheme),
});

export default celebrateMovie;
