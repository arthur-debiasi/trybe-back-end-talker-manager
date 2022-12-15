const { HTTP_BAD_REQUEST_STATUS } = require('../utils/httpStatus/httpStatus');

const rateValidation = (request, response, next) => {
  const { rate } = request.body.talk;
  if (!rate) {
    return response
    .status(HTTP_BAD_REQUEST_STATUS)
    .json({ message: 'O campo "rate" é obrigatório' });
  }
  if (rate < 1 || rate > 5) {
     return response
     .status(HTTP_BAD_REQUEST_STATUS)
     .json({ message: 'O "name" deve ser um inteiro de 1 a 5' });
  }
  next();
};

module.exports = rateValidation;