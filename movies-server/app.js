const mongoose = require('mongoose');

const { DB_ADDRESS, PORT } = require('./movie-server.config');
const movieServer = require('./routers/server');

mongoose
  .connect(DB_ADDRESS, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .catch();

movieServer.listen(PORT);
