const valueRandomizer = (min, max) => {
  const randomValue = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomValue;
};

export default valueRandomizer;
