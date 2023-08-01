import { question } from 'readline-sync';

const exitGame = () => 'Name is empty! Restart the game!';

const startGame = (game, gameTask) => {
  console.log('Welcome to the Brain Games!');
  const userName = question('May I have your name? ');
  if (userName.length === 0) return console.log(exitGame());
  console.log(`Hello, ${userName}!`);

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
  return console.log(rightAnswers === 3 ? `Congratulations, ${userName}!` : `Let's try again, ${userName}!`);
};

export default startGame;
