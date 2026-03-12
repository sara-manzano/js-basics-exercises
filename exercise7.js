function getMaxNumber(numberOne, numberTwo) {
  // También se podría usar Math.max(numberOne, numberTwo)
  if (numberOne > numberTwo) {
    return numberOne;
  } else {
    return numberTwo;
  }
}

console.log(getMaxNumber(3, 11));
console.log(getMaxNumber(19, 7));