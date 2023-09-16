function countVowels(str) {
  // Convert the string to lowercase to handle both uppercase and lowercase vowels
  str = str.toLowerCase();
  
  // Initialize a variable to store the vowel count
  let vowelCount = 0;
  
  // Loop through each character in the string
  for (let i = 0; i < str.length; i++) {
    // Check if the current character is a vowel
    if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
      // If it's a vowel, increment the vowel count
      vowelCount++;
    }
  }
  
  // Return the final vowel count
  return vowelCount;
}

// Example usage:
const inputString = "Hello, World!";
const result = countVowels(inputString);
console.log("Number of vowels:", result);
