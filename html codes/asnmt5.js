function isPrime(num) {
    if (num <= 1) {
      return false; // 0 and 1 are not prime numbers
    }
  
    if (num <= 3) {
      return true; // 2 and 3 are prime numbers
    }
  
    if (num % 2 === 0 || num % 3 === 0) {
      return false; // Numbers divisible by 2 or 3 are not prime
    }
  
    // Check for prime using 6k +/- 1 rule for efficiency
    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) {
        return false;
      }
    }
  
    return true;
  }
  
  function printPrimesUpToN(n) {
    if (n < 2) {
      console.log("There are no prime numbers less than 2.");
      return;
    }
  
    console.log("Prime numbers less than or equal to " + n + ":");
  
    for (let i = 2; i <= n; i++) {
      if (isPrime(i)) {
        console.log(i);
      }
    }
  }
  
  // Example usage:
  const n = 50; // Change this to your desired positive integer.
  printPrimesUpToN(n);
  document.getElementById("twocalling").innerHTML = seen