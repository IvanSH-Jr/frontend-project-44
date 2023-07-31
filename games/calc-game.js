import { question } from 'readline-sync';

import valueRandomizer from '../src/valueRandomizer.js';
import randomMathOperator from '../src/mathOperator.js';

const calcGame = (userName) => {
  console.log('What is the result of the expression?');

  let rightAnswers = 0;
  let mathResult = 0;

  while (rightAnswers < 3) {
    const mathOperator = randomMathOperator();
    const mathValue1 = valueRandomizer(1, 100);
    const mathValue2 = valueRandomizer(1, 100);

    console.log(`Question: ${mathValue1} ${mathOperator} ${mathValue2}`);

    switch (mathOperator) {
      case '-':
        mathResult = mathValue1 - mathValue2;
        break;
      case '+':
        mathResult = mathValue1 + mathValue2;
        break;
      case '*':
        mathResult = mathValue1 * mathValue2;
        break;
      default:
        console.log('Operator exist!');
    }

    const userAnswer = question('Your answer: ');
    if (+userAnswer === mathResult) {
      console.log('Correct!');
      rightAnswers += 1;
    } else {
      rightAnswers = 0;
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${mathResult}'`);
      break;
    }
  }
  console.log(rightAnswers === 3 ? `Congratulations, ${userName}!` : `Let's try again, ${userName}!`);
};

export default calcGame;
