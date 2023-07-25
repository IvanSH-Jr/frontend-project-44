import readlineSync from 'readline-sync';

const getNameAndSayHello = () => {
  const userName = readlineSync.question('May I have your name? ');
  return userName;
};

export default getNameAndSayHello;
