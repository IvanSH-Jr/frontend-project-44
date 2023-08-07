import getRandomValue from '../utilities/getRandomValue.js';
import startGame from '../index.js';

const gameTask = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const isPrime = () => {
  const mathValue = getRandomValue(1, 100);

  for (let i = 2; i < mathValue; i += 1) {
    if (mathValue % i === 0) return [mathValue, false];
  }

  return [mathValue, mathValue !== 1];
};

const playPrimeGame = () => startGame(isPrime, gameTask);

export default playPrimeGame;
