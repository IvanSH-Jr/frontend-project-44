import getRandomValue from '../my_modules/getRandomValue.js';
import euclidGcdSearch from '../my_modules/gcdSearch.js';
import startGame from '../src/index.js';

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
