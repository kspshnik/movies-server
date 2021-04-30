const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const jsonParser = require('body-parser').json();
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const { xss } = require('express-xss-sanitizer');
const mongoSanitize = require('express-mongo-sanitize');
const sanitizer = require('express-html-sanitizer');
const nosniff = require('dont-sniff-mimetype');

const { DB_ADDRESS, PORT } = require('./movie-server.config');
const serverRouter = require('./routers/server');

const { requestsLogger, errorsLogger } = require('./middlewares/loggers');
const errorsHandler = require('./middlewares/errorsHandler');

const app = express();

mongoose
  .connect(DB_ADDRESS, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .catch();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // за 15 минут
  max: 600, // можно совершить максимум 100 запросов с одного IP
});

app.use(helmet());
app.use(limiter);
app.use(cors());
app.use(nosniff());
app.use(jsonParser);
app.use(xss());
app.use(
  mongoSanitize({
    replaceWith: '_',
  }),
);
app.use(sanitizer());
app.use(requestsLogger);
app.use(serverRouter);
app.use(errorsLogger);
app.use(errorsHandler);
app.listen(PORT);
