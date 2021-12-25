const winston = require('winston');
const expressWinston = require('express-winston');

const requestsLogger = expressWinston.logger({
  transports: [
    new winston.transports.File({ filename: 'movie-server_requests.log' }),
  ],
  format: winston.format.json(),
});

const errorsLogger = expressWinston.errorLogger({
  transports: [
    new winston.transports.File({ filename: 'movie-server_errors.log' }),
  ],
  format: winston.format.json(),
});

module.exports = { requestsLogger, errorsLogger };
