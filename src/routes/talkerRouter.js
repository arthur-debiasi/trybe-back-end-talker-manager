const express = require('express');
const talkerPostValidation = require('../middlewares/talkerPostValidation');
const postTalker = require('../utils/fs/postTalker');
const readTalker = require('../utils/fs/readTalker');
const { 
  HTTP_OK_STATUS,
  HTTP_NOT_FOUND_STATUS,
  HTTP_CREATED_STATUS, 
} = require('../utils/httpStatus/httpStatus');
const nextTalkerIndex = require('../utils/nextTalkerIndex');

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

talkerRouter.post('/', talkerPostValidation, async (request, response) => {
  const { name, age, talk: { watchedAt, rate } } = request.body;

  const newTalker = {
    name,
    age,
    id: await nextTalkerIndex(),
    talk: { watchedAt, rate },
  };
  await postTalker(newTalker);

  return response.status(HTTP_CREATED_STATUS).json(newTalker);
});

module.exports = talkerRouter;