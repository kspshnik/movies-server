const usersRouter = require('express').Router();

const getUserController = require('../controllers/getUserController');
const patchUserController = require('../controllers/patchUserController');

const celebrateUser = require('../middlewares/celebrateUser');
const celebrateId = require('../middlewares/celebrateId');

usersRouter.get('/me', celebrateId, getUserController);
usersRouter.patch('/me', celebrateUser, patchUserController);

module.exports = usersRouter;
