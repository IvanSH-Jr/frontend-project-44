import getRandomValue from '../utilities/getRandomValue.js';
import euclidGcdSearch from './gcdSearch.js';
import startGame from '../index.js';

const gameTask = 'Find the greatest common divisor of given numbers';
const getGcd = () => {
  const mathValue1 = getRandomValue(1, 100);
  const mathValue2 = getRandomValue(1, 100);
  const gcdResult = euclidGcdSearch(mathValue1, mathValue2);
  const question = `${mathValue1} ${mathValue2}`;

  return [question, gcdResult];
};

const playGcdGame = () => startGame(getGcd, gameTask);

export default playGcdGame;
