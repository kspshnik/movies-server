import {} from 'dotenv/config';

export const {
  PORT = 5000,
  DB_ADDRESS = 'mongodb://localhost:27017/moviesdb',
  JWT_KEY = 'fe0efc9c0c561d176ba8908df811811b7a061b851e8c9c87fb5609f21268f978',
} = process.env;
