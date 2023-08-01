import valueRandomizer from '../src/valueRandomizer.js';
import startGame from '../src/index.js';

const gameTask = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const isPrime = () => {
  const mathValue = valueRandomizer(1, 100);

  for (let i = 2; i < mathValue; i += 1) {
    if (mathValue % i === 0) return [mathValue, false];
  }

  return [mathValue, mathValue !== 1];
};

const primeGame = () => startGame(isPrime, gameTask);

export default primeGame;
