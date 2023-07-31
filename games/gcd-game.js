import { question } from 'readline-sync';

import valueRandomizer from '../src/valueRandomizer.js';
import euclidGcdSearch from '../src/gcdSearch.js';

const gcdGame = (userName) => {
  console.log('Find the greatest common divisor of given numbers');

  let rightAnswers = 0;
  while (rightAnswers < 3) {
    const mathValue1 = valueRandomizer(1, 100);
    const mathValue2 = valueRandomizer(1, 100);
    const gcdResult = euclidGcdSearch(mathValue1, mathValue2);

    console.log(`Question: ${mathValue1} ${mathValue2}`);
    const userAnswer = question('Your answer: ');
    if (+userAnswer === gcdResult) {
      console.log('Correct!');
      rightAnswers += 1;
    } else {
      rightAnswers = 0;
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${gcdResult}'`);
      break;
    }
  }
  console.log(rightAnswers === 3 ? `Congratulations, ${userName}!` : `Let's try again, ${userName}!`);
};

export default gcdGame;
