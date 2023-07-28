const valueRandomizer = () => {
  const minValue = 1;
  const maxValue = 100;
  const randomValue = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
  return randomValue;
};

export default valueRandomizer;