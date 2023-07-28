const randomMathOperator = () => {
  const mathOperators = ['-', '+', '*'];
  const operatorIndex = Math.floor(Math.random() * mathOperators.length);

  return mathOperators[operatorIndex];
};

export default randomMathOperator;
