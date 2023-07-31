import valueRandomizer from '../src/valueRandomizer.js';
import euclidGcdSearch from '../src/gcdSearch.js';
import startGame from '../src/index.js';

const gameTask = 'Find the greatest common divisor of given numbers';
const getGcd = () => {
  const mathValue1 = valueRandomizer(1, 100);
  const mathValue2 = valueRandomizer(1, 100);
  const gcdResult = euclidGcdSearch(mathValue1, mathValue2);
  const question = `${mathValue1} ${mathValue2}`;

  return [question, gcdResult]
};

const gcdGame = () => startGame(getGcd, gameTask);

export default gcdGame;
