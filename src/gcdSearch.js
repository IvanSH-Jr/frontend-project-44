const euclidGcdSearch = (val1, val2) => {
  let firstNumber = Math.abs(val1);
  let secondNumber = Math.abs(val2);

  while (firstNumber !== 0 && secondNumber !== 0) {
    if (firstNumber > secondNumber) {
        firstNumber = firstNumber % secondNumber;
    } else secondNumber = secondNumber % firstNumber;
  }

  return firstNumber + secondNumber;
};

export default euclidGcdSearch;