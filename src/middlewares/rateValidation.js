const { HTTP_BAD_REQUEST_STATUS } = require('../utils/httpStatus/httpStatus');

const rateValidation = (request, response, next) => {
  const { rate } = request.body.talk;
  if (rate === undefined) {
    return response
    .status(HTTP_BAD_REQUEST_STATUS)
    .json({ message: 'O campo "rate" é obrigatório' });
  }
  if (rate < 1 || rate > 5 || rate !== Math.floor(rate)) {
     return response
     .status(HTTP_BAD_REQUEST_STATUS)
     .json({ message: 'O campo "rate" deve ser um inteiro de 1 à 5' });
  }
  next();
};

module.exports = rateValidation;