import getRandomValue from '../utilities/getRandomValue.js';
import startGame from '../index.js';

const gameTask = 'What number is missing in the progression?';

const createProgression = (progressionLength, progressionsFirstElement, progressionsStep) => {
  const progression = [];
  let counter = 0;
  while (counter < progressionLength) {
    if (progression.length === 0) progression.push(progressionsFirstElement);
    const nextElement = progression[counter] + progressionsStep;
    progression.push(nextElement);
    counter += 1;
  }

  return progression;
};

const getProgressionForGame = () => {
  const length = getRandomValue(5, 12);
  const firstElement = getRandomValue(1, 100);
  const step = getRandomValue(2, 7);

  const progression = createProgression(length, firstElement, step);
  const positionOfHiddenElement = getRandomValue(0, progression.length - 1);

  const rightAnswer = progression[positionOfHiddenElement];
  progression[positionOfHiddenElement] = '..';
  const question = progression.join(' ');

  return [question, String(rightAnswer)];
};

const playProgressionGame = () => startGame(getProgressionForGame, gameTask);

export default playProgressionGame;
