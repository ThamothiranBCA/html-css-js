function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  
    // Compare the original string with its reverse
    const reversedStr = cleanedStr.split('').reverse().join('');
  
    return cleanedStr === reversedStr;
  }
  
  // Example usage:
  const inputString = "A man, a plan, a canal, Panama";
  const result = isPalindrome(inputString);
  
  if (result) {
    console.log(`"${inputString}" is a palindrome.`);
  } else {
    console.log(`"${inputString}" is not a palindrome.`);
  }
  