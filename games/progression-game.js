import getRandomValue from '../my_modules/getRandomValue.js';
import startGame from '../src/index.js';

const gameTask = 'What number is missing in the progression?';
const createProgression = () => {
  const progressionLength = getRandomValue(5, 12);
  const progressionsFirstElement = getRandomValue(1, 100);
  const progressionsStep = getRandomValue(2, 7);
  const progression = [];

  const positionOfHiddenElement = getRandomValue(0, progressionLength - 1);

  let counter = 0;
  while (counter < progressionLength) {
    if (progression.length === 0) progression.push(progressionsFirstElement);
    const nextElement = progression[counter] + progressionsStep;
    progression.push(nextElement);
    counter += 1;
  }

  const rightAnswer = progression[positionOfHiddenElement];
  progression[positionOfHiddenElement] = '..';

  return [progression.join(' '), rightAnswer];
};

const playProgressionGame = () => startGame(createProgression, gameTask);

export default playProgressionGame;
