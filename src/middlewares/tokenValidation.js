const { HTTP_UNAUTHORIZED_STATUS } = require('../utils/httpStatus/httpStatus');

const tokenValidation = (request, response, next) => {
  const { token } = request.headers;
  if (!token) {
    return response.status(HTTP_UNAUTHORIZED_STATUS).json({ message: 'Token não encontrado' });
  }
  if (token.length !== 16 || typeof token !== 'string') {
    return response.status(HTTP_UNAUTHORIZED_STATUS).json({ message: 'Token inválido' });
  }
  next();
};

module.exports = tokenValidation;