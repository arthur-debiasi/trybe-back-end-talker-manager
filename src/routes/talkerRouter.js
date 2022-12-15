const express = require('express');
const tokenValidation = require('../middlewares/tokenValidation');
const readTalker = require('../utils/fs/readTalker');
const { 
  HTTP_OK_STATUS,
  HTTP_NOT_FOUND_STATUS,
  HTTP_CREATED_STATUS, 
} = require('../utils/httpStatus/httpStatus');

const talkerRouter = express.Router();

talkerRouter.get('/', async (_request, response) => {
  const data = await readTalker();
  response.status(HTTP_OK_STATUS).json(data); 
});

talkerRouter.get('/:id', async (request, response) => {
  const { id } = request.params;
  const data = await readTalker();
  const dataById = data.filter((e) => e.id === Number(id))[0] || [];
  if (dataById.length === 0) {
    return response
    .status(HTTP_NOT_FOUND_STATUS)
    .json({ message: 'Pessoa palestrante não encontrada' });
  }
  response.status(HTTP_OK_STATUS).json(dataById); 
});

talkerRouter.post('/', tokenValidation, (request, response) => {
  response.status(HTTP_CREATED_STATUS).json({ message: 'oie' });
});

module.exports = talkerRouter;