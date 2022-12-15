const express = require('express');
const { emailValidation } = require('../middlewares/emailValidation');
const passwordValidation = require('../middlewares/passwordValidation');
const tokenGenerator = require('../utils/tokenGenerator');
const { HTTP_OK_STATUS } = require('../utils/httpStatus/httpStatus');

const loginRouter = express.Router();

loginRouter.post('/', emailValidation, passwordValidation, (_request, response) => {
  response.status(HTTP_OK_STATUS).json({ token: tokenGenerator() });
});

module.exports = loginRouter;