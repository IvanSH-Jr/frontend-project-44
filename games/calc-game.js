import getRandomValue from '../my_modules/getRandomValue.js';
import startGame from '../src/index.js';

const gameTask = 'What is the result of the expression?';
const expression = () => {
  const setOfMathOperators = ['-', '+', '*'];
  const operatorIndex = Math.floor(Math.random() * setOfMathOperators.length);
  const mathOperator = setOfMathOperators[operatorIndex];

  const mathValue1 = getRandomValue(1, 100);
  const mathValue2 = getRandomValue(1, 100);
  let mathResult = 0;

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
  const question = `${mathValue1} ${mathOperator} ${mathValue2}`;

  return [question, mathResult];
};

const playCalcGame = () => startGame(expression, gameTask);

export default playCalcGame;
