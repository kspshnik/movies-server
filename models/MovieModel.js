import {
  Schema as MongooseSchema,
  model as mongooseModel,
  types as mongooseTypes,
} from 'mongoose';
import validateUrl from '../helpers/validateUrl';

const MovieSchema = new MongooseSchema({
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
    type: mongooseTypes.ObjectId,
    ref: 'user',
    required: true,
  },

  movieId: {
    type: mongooseTypes.ObjectId,
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
const movieModel = mongooseModel('movie', MovieSchema);

export default movieModel;
