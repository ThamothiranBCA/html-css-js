function findLargerNumber(number1, number2) {
  if (number1 > number2) {
    return number1;
  } else {
    return number2;
  }
}

// Example usage:
const num1 = 10;
const num2 = 66;
const result = findLargerNumber(num1, num2);
console.log("The larger number is: " + result);
