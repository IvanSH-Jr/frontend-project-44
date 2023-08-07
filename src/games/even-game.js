import getRandomValue from '../utilities/getRandomValue.js';
import startGame from '../index.js';

const gameTask = 'Answer "yes" if the number is even, otherwise answer "no"';
const isEven = (number) => number % 2 === 0;

const getEvenGameRigthAnswer = () => {
  const question = getRandomValue(1, 100);
  const rightAnswer = isEven(question) ? 'yes' : 'no';
  return [question, rightAnswer];
};

const playEvenGame = () => startGame(getEvenGameRigthAnswer, gameTask);

export default playEvenGame;
