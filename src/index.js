import { question } from 'readline-sync';

const startGame = (getGame, gameTask) => {
  console.log('Welcome to the Brain Games!');
  const userName = question('May I have your name? ');
  if (userName.length === 0) return console.log('Name is empty! Restart the game!');
  console.log(`Hello, ${userName}!`);

  console.log(gameTask);
  const questionCounter = 3;

  for (let i = 0; i < questionCounter; i += 1) {
    const [gameQuestion, correctAnswer] = getGame();

    console.log(`Question: ${gameQuestion}`);

    const userAnswer = question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      return console.log(`Let's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default startGame;
