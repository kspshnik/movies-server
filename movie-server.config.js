require('dotenv').config();

const {
  PORT = 3000,
  DB_ADDRESS = process.env.NODE_ENV === 'production'
    ? 'mongodb://localhost:27017/moviesdb'
    : 'mongodb://localhost:27017/moviesdb-dev',
  JWT_KEY = 'fe0efc9c0c561d176ba8908df811811b7a061b851e8c9c87fb5609f21268f978',
  NODE_ENV,
} = process.env;
module.exports = {
  PORT, DB_ADDRESS, JWT_KEY, NODE_ENV,
};
