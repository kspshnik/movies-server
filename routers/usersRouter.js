const usersRouter = require('express').Router();

const getUserController = require('../controllers/getUserController');
const patchUserController = require('../controllers/patchUserController');

const celebrateUser = require('../middlewares/celebrateUser');

usersRouter.get('/me', getUserController);
usersRouter.patch('/me', celebrateUser, patchUserController);

module.exports = usersRouter;
