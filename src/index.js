import { question } from 'readline-sync';

const exitGame = () => 'Name is empty! Restart the game!';

const startGame = (game, gameTask) => {
  console.log('Welcome to the Brain Games!');
  const userName = question('May I have your name? ');
  if (userName.length === 0) return console.log(exitGame());
  console.log(`Hello, ${userName}!`);

  console.log(gameTask);

  let questionCounter = 0;
  for (questionCounter; questionCounter < 3; questionCounter += 1) {
    let gameQuestion = '';
    let correctAnswer = '';
    [gameQuestion, correctAnswer] = game();

    console.log(`Question: ${gameQuestion}`);

    const userAnswer = question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      break;
    }
  }
  console.log(questionCounter);
  return console.log(questionCounter === 3 ? `Congratulations, ${userName}!` : `Let's try again, ${userName}!`);
};

export default startGame;
