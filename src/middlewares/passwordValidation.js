const { HTTP_NOT_FOUND_STATUS } = require('../utils/httpStatus/httpStatus');

const passwordValidation = (req, res, next) => {
  if (!req.body.password || req.body.password.length === 0) {
    return res.status(HTTP_NOT_FOUND_STATUS)
    .json({ message: 'O campo "password" é obrigatório' }); 
   }
   if (req.body.password.length < 6) {
    return res.status(HTTP_NOT_FOUND_STATUS)
    .json({ message: 'O "password" deve ter pelo menos 6 caracteres' });
   }
   next();
};

module.exports = passwordValidation;
