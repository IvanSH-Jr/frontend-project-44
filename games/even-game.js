import valueRandomizer from '../src/valueRandomizer.js';
import startGame from '../src/index.js';

const gameTask = 'Answer "yes" if the number is even, otherwise answer "no"'

const evenCheck = () => {
  const questionValue = valueRandomizer(1, 100);
  const correctAnswer = questionValue % 2 === 0 ? 'yes' : 'no';

  return [questionValue, correctAnswer];
};

const evenGame = () => startGame (evenCheck, gameTask);

export default evenGame;
