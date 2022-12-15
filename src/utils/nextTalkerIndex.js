const readTalker = require('./fs/readTalker');

const nextTalkerIndex = async () => {
  const talkers = await readTalker();
  return Math.max(...talkers.map((e) => e.id)) + 1;
};
module.exports = nextTalkerIndex;