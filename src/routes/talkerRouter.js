const express = require('express');
const { writeFile } = require('fs').promises;
const path = require('path');
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

talkerRouter.put('/:id', talkerPostValidation, async (request, response) => { 
  const { name, age, talk: { watchedAt, rate } } = request.body;
  const talkerFile = await readTalker();
  const paramsId = Number(request.params.id);
  const newTalker = {
    name,
    age,
    id: paramsId,
    talk: { watchedAt, rate },
  };
  const findTalker = talkerFile.find((e) => e.id === paramsId);
  const indexOfTalker = talkerFile.indexOf(findTalker);
  talkerFile.splice(indexOfTalker, 1, newTalker);
  const newTalkerFile = JSON.stringify(talkerFile, null, 2);
  const talkerPwd = path.resolve('src', 'talker.json');
  await writeFile(talkerPwd, newTalkerFile);
  response.status(HTTP_OK_STATUS).json(newTalker); 
});

module.exports = talkerRouter;