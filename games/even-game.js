import getRandomValue from '../my_modules/getRandomValue.js';
import startGame from '../src/index.js';

const gameTask = 'Answer "yes" if the number is even, otherwise answer "no"';

const evenCheck = () => {
  const questionValue = getRandomValue(1, 100);
  const correctAnswer = questionValue % 2 === 0 ? 'yes' : 'no';

  return [questionValue, correctAnswer];
};

const playEvenGame = () => startGame(evenCheck, gameTask);

export default playEvenGame;
