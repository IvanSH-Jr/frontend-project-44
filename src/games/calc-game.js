import getRandomValue from '../utilities/getRandomValue.js';
import startGame from '../index.js';

const gameTask = 'What is the result of the expression?';
const expression = () => {
  const setOfMathOperators = ['-', '+', '*'];
  const minIndex = 0;
  const maxIndex = setOfMathOperators.length;
  const operatorIndex = getRandomValue(minIndex, maxIndex);
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
      throw new Error(`Unknown math operator: '${mathOperator}'!`);
  }
  const question = `${mathValue1} ${mathOperator} ${mathValue2}`;

  return [question, mathResult];
};

const playCalcGame = () => startGame(expression, gameTask);

export default playCalcGame;
