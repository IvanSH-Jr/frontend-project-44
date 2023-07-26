const checkAnswer = (value, userAnswer) => {
  const correctAnswer = value % 2 === 0 ? 'yes' : 'no';
  if(userAnswer === correctAnswer) return 'Correct!';
  if(userAnswer !== correctAnswer) return `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`;
};

export default checkAnswer;