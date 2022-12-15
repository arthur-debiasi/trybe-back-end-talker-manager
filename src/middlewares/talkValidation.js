const { HTTP_BAD_REQUEST_STATUS } = require('../utils/httpStatus/httpStatus');

const talkValidation = (request, response, next) => {
  if (!request.body.talk) {
    return response
    .status(HTTP_BAD_REQUEST_STATUS)
    .json({ message: 'O campo "talk" é obrigatório' });
  }
  next();
};

module.exports = talkValidation;