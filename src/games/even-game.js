import getRandomValue from '../utilities/getRandomValue.js';
import startGame from '../index.js';

const gameTask = 'Answer "yes" if the number is even, otherwise answer "no"';

const evenCheck = () => {
  const question = getRandomValue(1, 100);
  let rightAnswer = question % 2 === 0 ? 'yes' : 'no';
  rightAnswer = String(rightAnswer);
  return [question, rightAnswer];
};

const playEvenGame = () => startGame(evenCheck, gameTask);

export default playEvenGame;
