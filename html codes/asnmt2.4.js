var dear='show';

function calculateFactorial(number) {
    if (number < 0) {
      return "Factorial is not defined for negative numbers";
    }
  
    if (number === 0 || number === 1) {
      return 1;
    }
  
    let factorial = 1;
    for (let i = 2; i <= number; i++) {
      factorial *= i; 
    }
    return factorial;
  }
  const inputNumber = 5;
  const result = calculateFactorial(inputNumber);
  //console.log(`The factorial of ${inputNumber} is ${result}`);
  sandy = "The factorial of ${inputNumber} is ${result}" ;
  document.getElementById("thamu").innerHTML= sandy ;



//   var nothing='show';

// function findLargerNumber(number1, number2) {
//   if (number1 > number2) {
//     return number1;
//   } else {
//     return number2;
//   }
// }

// // Example usage:
// const num1 = 10;
// const num2 = 68;
// const result = findLargerNumber(num1, num2);
// //console.log("The larger number is: " + result);
// seen = "The larger number is: " + result ;
// document.getElementById("twocalling").innerHTML = seen;