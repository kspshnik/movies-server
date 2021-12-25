const jwt = require('jsonwebtoken');

const { JWT_KEY } = require('../movie-server.config');
const NotAuthorizedError = require('../errors/NotAuthorizedError');

function auth(req, res, next) {
  let payload;
  const { authorization } = req.headers;
  if (!authorization || !authorization.startsWith('Bearer ')) {
    throw new NotAuthorizedError('Необходима авторизация');
  }
  const token = authorization.replace('Bearer ', '');
  try {
    payload = jwt.verify(token, JWT_KEY);
  } catch (err) {
    throw new NotAuthorizedError('Необходима авторизация');
  }
  req.usr = payload;
  next();
}

module.exports = auth;
