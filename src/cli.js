import readlineSync from 'readline-sync';

const getNameAndSayHello = () => {
  const userName = readlineSync.question('May I have your name? ');
  return `Hello, ${userName}!`;
};

export default getNameAndSayHello;
