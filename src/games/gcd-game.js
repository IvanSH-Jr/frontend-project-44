import getRandomValue from '../utilities/getRandomValue.js';
import startGame from '../index.js';

const gameTask = 'Find the greatest common divisor of given numbers';

const euclidGcdSearch = (val1, val2) => {
  let firstNumber = Math.abs(val1);
  let secondNumber = Math.abs(val2);

  while (firstNumber !== 0 && secondNumber !== 0) {
    if (firstNumber > secondNumber) {
      firstNumber %= secondNumber;
    } else secondNumber %= firstNumber;
  }

  return firstNumber + secondNumber;
};

const getGcd = () => {
  const mathValue1 = getRandomValue(1, 100);
  const mathValue2 = getRandomValue(1, 100);
  const rightAnswer = euclidGcdSearch(mathValue1, mathValue2);
  const question = `${mathValue1} ${mathValue2}`;

  return [question, String(rightAnswer)];
};

const playGcdGame = () => startGame(getGcd, gameTask);

export default playGcdGame;
