import { question } from 'readline-sync';

const startGame = (game, gameTask) => {
  console.log('Welcome to the Brain Games!');
  const userName = question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  if (userName.length === 0) return exitGame();

  console.log(gameTask);

  let rightAnswers = 0;
  while (rightAnswers < 3) {
    let gameQuestion = '';
    let correctAnswer = '';
    [gameQuestion, correctAnswer] = game();

    if (correctAnswer === true) correctAnswer = 'yes';
    if (correctAnswer === false) correctAnswer = 'no';

    console.log(`Question: ${gameQuestion}`);

    const userAnswer = question('Your answer: ');
    if (userAnswer === String(correctAnswer)) {
      rightAnswers += 1;
      console.log('Correct!');
    } else {
      rightAnswers = 0;
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      break;
    }
  }
  console.log(rightAnswers === 3 ? `Congratulations, ${userName}!` : `Let's try again, ${userName}!`);
};

const exitGame = () => console.log('Name is empty! Restart the game!');

export default startGame;
