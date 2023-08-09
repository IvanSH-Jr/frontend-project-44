import getRandomValue from '../utilities/getRandomValue.js';
import startGame from '../index.js';

const gameTask = 'What is the result of the expression?';
const expression = () => {
  const setOfMathOperators = ['-', '+', '*'];
  const operatorIndex = getRandomValue(0, setOfMathOperators.length - 1);
  const mathOperator = setOfMathOperators[operatorIndex];

  const mathValue1 = getRandomValue(1, 100);
  const mathValue2 = getRandomValue(1, 100);
  let rightAnswer = 0;

  switch (mathOperator) {
    case '-':
      rightAnswer = mathValue1 - mathValue2;
      break;
    case '+':
      rightAnswer = mathValue1 + mathValue2;
      break;
    case '*':
      rightAnswer = mathValue1 * mathValue2;
      break;
    default:
      throw new Error(`Unknown math operator: '${mathOperator}'!`);
  }
  const question = `${mathValue1} ${mathOperator} ${mathValue2}`;

  return [question, String(rightAnswer)];
};

const playCalcGame = () => startGame(expression, gameTask);

export default playCalcGame;
