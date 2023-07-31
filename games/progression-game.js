import valueRandomizer from '../src/valueRandomizer.js';

const progression = () => {
  console.log('What number is missing in the progression?');
  const progressionLength = valueRandomizer(5, 12);
  const progressionsFirstElement = valueRandomizer(1, 100);
  const progressionsStep = valueRandomizer(2, 7);
  const progression = [];

  let counter = 0;
  while (counter < progressionLength){
    if (progression.length === 0) progression.push(progressionsFirstElement);
    const nextElement = progression[counter] + progressionsStep;
    progression.push(nextElement);
    counter += 1;
  }
  console.log(progression);
};
progression();
export default progression;