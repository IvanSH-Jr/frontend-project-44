import getRandomValue from '../utilities/getRandomValue.js';
import startGame from '../index.js';

const gameTask = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const isPrime = (number) => {
  if (number < 2) return false;
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) return false;
  }
  return true;
};

const getPrimeGameRigthAnswer = () => {
  const minValue = 0;
  const mxValue = 100;

  const question = getRandomValue(minValue, mxValue);
  const rightAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, rightAnswer];
};

const playPrimeGame = () => startGame(getPrimeGameRigthAnswer, gameTask);

export default playPrimeGame;
