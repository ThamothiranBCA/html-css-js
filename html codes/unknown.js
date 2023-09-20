var nothing='show';

function checkNumber(number) {
    if (number > 0) {
    nothing="The number is positive"
      console.log("The number is positive");
    } else if (number < 0) {
      nothing="The number is negative"
      console.log("The number is negative");
    } else {
      nothing="The number is zero"
      console.log("The number is zero");
    }
  }
 
  
  // Example usage:
  checkNumber(4);    // Output: "The number is positive"
  checkNumber(-2);   // Output: "The number is negative"
  checkNumber(0);    // Output: "The number is zero"
  // document.getElementById("demo").innerHTML = result;
  document.getElementById("unk").innerHTML = nothing;