var nothing='show';

function findLargerNumber(number1, number2) {
  if (number1 > number2) {
    return number1;
  } else {
    return number2;
  }
}

// Example usage:
const num1 = 10;
const num2 = 68;
const result = findLargerNumber(num1, num2);
//console.log("The larger number is: " + result);
seen = "The larger number is: " + result ;
document.getElementById("twocalling").innerHTML = seen;