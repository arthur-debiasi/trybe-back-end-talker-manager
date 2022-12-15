const { writeFile } = require('fs').promises;
const path = require('path');
const readTalker = require('./readTalker');

const postTalker = async (newTalker) => {
  const talkerFile = await readTalker();
  talkerFile.push(newTalker);
  console.log(talkerFile);
  const newTalkerFile = JSON.stringify(talkerFile, null, 2);
  const talkerPwd = path.resolve('src', 'talker.json');
  await writeFile(talkerPwd, newTalkerFile);
};

module.exports = postTalker;