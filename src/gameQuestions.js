import randomizer from './valueRandomize.js';
import checkAnswer from './checkAnswer.js';
import { question } from 'readline-sync';

const gameQuestions = (userName) => {
  let gameQuestion = 1;
  let wrongAsnwer = 0;
  while (gameQuestion <= 3) {
    const questionValue = randomizer();
    console.log(`Question: ${questionValue}`);

    const userAnswer = question('Your answer: ');
    console.log(userAnswer);

    const result = checkAnswer(questionValue, userAnswer);
    console.log(result);

    if(result !== 'Correct!') {
      console.log(`Let's try again, ${userName}!`);
      wrongAsnwer = 1;
      break;
    } else gameQuestion += 1;
  }
 
  if(wrongAsnwer === 0) console.log(`Congratulations, ${userName}!`);

};


export default gameQuestions;

