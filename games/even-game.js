import { question } from 'readline-sync';

import valueRandomizer from '../src/valueRandomizer.js';

const evenGame = (userName) => {
  let rightAnswers = 0;
  while (rightAnswers < 3) {
    const questionValue = valueRandomizer();
    console.log(`Question: ${questionValue}`);

    const userAnswer = question('Your answer: ');
    const correctAnswer = questionValue % 2 === 0 ? 'yes' : 'no';
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      rightAnswers += 1;
    } else {
      rightAnswers = 0;
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      break;
    }
  }
  console.log(rightAnswers === 3 ? `Congratulations, ${userName}!` : `Let's try again, ${userName}!`);
};

export default evenGame;
